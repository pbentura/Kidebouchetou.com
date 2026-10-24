import CityPage, { cityMetadata } from "../components/CityPage";
import { getCity } from "../data/cities";

const city = getCity("argenteuil")!;
export const metadata = cityMetadata(city);

export default function Page() {
  return <CityPage city={city} />;
}
