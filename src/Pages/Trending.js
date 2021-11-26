import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../Components/AppContext";
import { isEmpty } from "../Components/Utils";
import LeftNav from "../Components/LeftNav";
import Card from "../Components/Post/Card";
import Trends from "../Components/Trends";

const Trending = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.trendingReducer);

  return (
    <div className="trending-page">
      <LeftNav />
      <div className="main">
        <ul>
          {!isEmpty(trendList[0]) &&
            trendList.map((post) => <Card post={post} key={post._id} />)}
        </ul>
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <Trends />
        </div>
      </div>
    </div>
  );
};

export default Trending;
