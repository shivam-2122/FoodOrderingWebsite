import { useEffect, useState } from "react";
import { RestrauntCard3 } from "./RestrauntCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../assets/useOnline.js";

function filterData(Searchtext, restraunt) {
  const FilterData = restraunt.filter((restraunt) =>
    restraunt?.info?.name?.toLowerCase()?.includes(Searchtext.toLowerCase())
  );
  return FilterData;
}

const Body = () => {
  // Searchtxt is a Local Variable
  const [allRestraunt, setAllRestraunt] = useState([]);
  const [FilteredRestraunt, setFilteredRestraunt] = useState([]);
  const [Searchtext, setSearchtext] = useState(""); // T Create State Variable - it returns array

  // Empty dependency array => called once after render
  // dependency array{seaechtext} => once after initial render + everytime after render(my search text chNGES)

  useEffect(() => {
    // use effect makes an API Call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(data.json);

    //Optional Chainng
    setAllRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are Offline, Please check your Internet Connection !!</h1>;
  }

  //COnditional Rendering
  // if Restraunt is Eempty => load Shimmer UI
  // If res has Data => Actual Data UI

  // Using Ternary Oper ator

  if (!allRestraunt) return null; // early Returned
  // if(FilteredRestraunt?.length === 0) return <h1> No Restraunt match your filter !!!</h1>

  return allRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={Searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(Searchtext, allRestraunt);

            setFilteredRestraunt(data);
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="RestrauntList">
        {FilteredRestraunt.map((restraunt) => {
          return (
            <Link
              to={"/restraunt/" + restraunt.info.id}
              key={restraunt.info.id}
            >
              <RestrauntCard3 {...restraunt.info} />
            </Link> // Must provide key
          );
        })}
      </div>
    </>
  );
};
export default Body;
