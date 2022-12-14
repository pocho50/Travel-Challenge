import type Flight from "@/types/Flight";
import type Option from "@/types/Option";
import type Segment from "@/types/Segment";
import { ref, computed } from "vue";
import type Search from "@/types/Search";

export default function useOptions() {
  const search = ref<Search>({ nonstop: false, budget: null });
  const apiBaseUrl =
    "https://sprout-backend-example.free.beeceptor.com/sprout/example";
  const options = ref<Option[] | []>([]);
  const carriers = ref();
  const searchOptions = ref<Option[] | []>([]);
  const page = ref(1);
  const itemsxPage = 10;

  const fetchOptions = async (newSearch: Search) => {
    search.value = { ...newSearch, budget: newSearch.budget || null };
    const response = await fetch(apiBaseUrl);
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();
    carriers.value = data.carriers;
    options.value = data.options.map((option: any, index: number): Option => {
      return {
        outwardFlight: buildFlight(option.journeys[0]),
        returnFlight: buildFlight(option.journeys[1]),
        price: option.itineraryPrice,
        id: index,
      };
    });
  };

  const buildFlight = (flight: any): Flight => {
    const layovers: [] = flight.layovers.all;
    return {
      departureDateTime: flight.departureDateTime,
      arrivalDateTime: flight.arrivalDateTime,
      layovers: layovers.length,
      origin: flight.originPlace.name,
      destination: flight.destinationPlace.name,
      segments: flight.segments.map((segment: any, index: number) =>
        buildSegment(segment, index)
      ),
    };
  };

  const buildSegment = (segment: any, index: number): Segment => {
    return {
      departureDateTime: segment.departureDateTime,
      arrivalDateTime: segment.arrivalDateTime,
      origin: segment.originPlace.name,
      destination: segment.destinationPlace.name,
      airline: getCarrier(segment.operatingAirline),
      id: index,
    };
  };

  const getSearchOptions = computed<Option[]>(() => {
    searchOptions.value = options.value;
    if (search.value.nonstop) {
      searchOptions.value = searchOptions.value.filter(
        (option: Option) => option.outwardFlight.layovers === 0
      );
    }

    if (search.value.budget) {
      searchOptions.value = searchOptions.value.filter(
        (option: Option) => option.price <= (search.value.budget || 0)
      );
    }

    return searchOptions.value.slice(0, itemsxPage * page.value);
  });

  const totalCount = computed(() => options.value.length);

  const getCarrier = (sl: string) => {
    return carriers.value[sl];
  };

  const hasMoreItems = computed(() => {
    return searchOptions.value.length > itemsxPage * page.value;
  });

  return {
    getSearchOptions,
    fetchOptions,
    page,
    totalCount,
    hasMoreItems,
  };
}
