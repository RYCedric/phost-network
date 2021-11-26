import React, { useState, useEffect } from "react";
import { UidContext } from "./Components/AppContext";
import axios from "axios";
import Route from "./Components/Routes";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Route />
    </UidContext.Provider>
  );
};

export default App;
