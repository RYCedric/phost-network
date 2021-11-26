import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user.actions";
import { isEmpty } from "../Utils";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";

const FollowHandler = ({ idToFollow, type }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userData._id, idToFollow));
    setIsFollowed(false);
  };

  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnfollow}>
          {type === "suggestion" && (
            <button className="unfollow-btn">Abonné</button>
          )}
          {type === "card" && (
            <FiUserMinus
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          )}
        </span>
      )}

      {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
          {type === "suggestion" && (
            <button className="unfollow-btn">Suivre</button>
          )}
          {type === "card" && (
            <FiUserPlus
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          )}
        </span>
      )}
    </>
  );
};

export default FollowHandler;
