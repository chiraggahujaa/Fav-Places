import { useSelector } from "react-redux";
import PlaceList from "../components/PlaceList";

const AllPlaces = (props) => {
  const favPlaces = useSelector((state) => state.favPlaces);

  return <PlaceList favPlaces = {favPlaces}/>
};

export default AllPlaces;
