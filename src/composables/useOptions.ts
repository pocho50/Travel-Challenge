import type Flight from "@/types/Flight";
import type Option from "@/types/Option";
import type Segment from "@/types/Segment";
import data from "@/data/data.json";
import { ref, computed } from "vue";
// import type Search from "@/types/Search";

export default function useOptions() {
  // const search = ref<Search>({ passengers: 1, budget: Infinity, origin: "" });
  //const flights: Flight[] = await $fetch("/api/flights");
  const options = ref<Option[] | []>([]);
  const page = ref(1);
  const itemsxPage = 10;

  const fetchOptions = async () => {
    // search.value = { ...newSearch, budget: newSearch.budget || Infinity };
    options.value = data.options
      .map((option, index): Option => {
        return {
          outwardFlight: buildFlight(option.journeys[0]),
          returnFlight: buildFlight(option.journeys[1]),
          price: option.itineraryPrice,
          id: index,
        };
      })
      .filter((option) => option.outwardFlight.layovers > 0)
      .slice(0, 10);
  };

  const buildFlight = (flight): Flight => {
    const layovers: [] = flight.layovers.all;
    return {
      departureDateTime: flight.departureDateTime,
      arrivalDateTime: flight.arrivalDateTime,
      layovers: layovers.length,
      origin: flight.originPlace.name,
      destination: flight.destinationPlace.name,
      segments: flight.segments.map((segment, index) =>
        buildSegment(segment, index)
      ),
    };
  };

  const buildSegment = (segment, index): Segment => {
    return {
      departureDateTime: segment.departureDateTime,
      arrivalDateTime: segment.arrivalDateTime,
      origin: segment.originPlace.name,
      destination: segment.destinationPlace.name,
      airline: getCarrier(segment.operatingAirline),
      id: index,
    };
  };

  // const getPackages = computed<Package[]>(() => {
  //   return filterByDestination.value
  //     .sort((pack1: Package, pack2: Package) => {
  //       return pack1.totalPrice - pack2.totalPrice;
  //     })
  //     .slice(0, itemsxPage * page.value);
  // });

  const totalCount = computed(() => options.value.length);

  const getCarrier = (sl) => {
    return data.carriers[sl];
  };

  return {
    options,
    fetchOptions,
    page,
    totalCount,
  };
}
