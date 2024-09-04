import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../components/constant";
import Shimmer from "../components/Shimmer";
import useRestraunt from "../components/useRestraunt";

const RestrauntMenu = () => {
  const { resId } = useParams();
  //   const [, setRestauraunt] = useState(null);
  const restauraunt = useRestraunt(resId);

  return !restauraunt ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restraunt id: {resId}</h1>

      <h2>{restauraunt?.info?.name}</h2>
      <h2>{restauraunt?.info?.areaName}</h2>
      <h2>{restauraunt?.info?.avgRating} stars</h2>
      <h2>{restauraunt?.info?.costForTwoMessage}</h2>

      <h2>{restauraunt?.info?.city}</h2>

      {/* <img src ={IMG_CDN_URL+restauraunt?.cloudinaryImageId} /> */}
    </div>
  );
};
export default RestrauntMenu;
