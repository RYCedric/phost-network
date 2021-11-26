import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import FollowHandler from "../Profil/FollowHandler";
import { MdOutlineMessage, MdShare, MdEditNote } from "react-icons/md";
import LikeButton from "./LikeButton";
import { updatePost } from "../../actions/post.action";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);

  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  const updateItem = () => {
    textUpdate && dispatch(updatePost(post._id, textUpdate));
    setIsUpdated(false);
  };

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className=" fas fa-spinner fa-spin">
          <FaSpinner />
        </i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="user-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => {
                    setTextUpdate(e.target.value);
                  }}
                />
                <div className="button-container" onClick={updateItem}>
                  <button className="btn">Valider Modification</button>
                </div>
              </div>
            )}

            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            {post.video && (
              <iframe
                src={post.video}
                width="300"
                height="3OO"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            {userData._id === post.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <MdEditNote />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <div className="icon">
                  <MdOutlineMessage
                    onClick={() => setShowComments(!showComments)}
                  />
                </div>
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
              <div className="icon">
                <MdShare />
              </div>
            </div>
            {showComments && <CardComments post={post} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
