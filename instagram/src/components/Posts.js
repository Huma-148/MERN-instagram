import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./posts.css";
import postsArray from "./postArray";
import HeaderPosts from "./headers/headerPosts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  });

  //WITH ASYNC/AWAIT
  const fetchPosts = async () => {
    console.log(postsArray);
    setPosts(postsArray);
  };

  return (
    <>
      <HeaderPosts />

      {posts.map((post, index) => {
        return (
          <div key={index} class="post">
            <Link to={`/post/${post.id}`}>
              <div className="postHeader">
                <div>
                  <img
                    src={post.progileimage}
                    alt="profileimage"
                    className="profileimage"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="userdetail">
                  <h3>
                    {post.username}
                    {post.verifyIcon}
                  </h3>
                  <p>{post.userdescription}</p>
                </div>
              </div>
            </Link>
            <img src={post.picture} alt="postpicture" className="postpicture" />
            <div className="postFooter">
              <div className="postActions">
                <FontAwesomeIcon icon={faHeart} id="likeIcon" />
                <FontAwesomeIcon icon={faComment} id="commentIcon" />
              </div>
              <div className="postDetails">
                <h3>{post.username}</h3>
                <span>{post.postdescription}</span>
              </div>
              <div className="movetocomments">
                <span>{post.movetocomment}</span>
              </div>
              <div className="postTime">{post.timeofpost}</div>
              <div className="Followers">{post.followers} Followers</div>
              <div className="verified">{post.verifyIcon}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Posts;
