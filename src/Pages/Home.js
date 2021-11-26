import React, { useContext } from "react";
import { UidContext } from "../Components/AppContext";
import LeftNav from "../Components/LeftNav";
import NewPostForm from "../Components/Post/NewPostForm";
import Thread from "../Components/Thread";
import Log from "../Components/Log";
import Trends from "../Components/Trends";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
