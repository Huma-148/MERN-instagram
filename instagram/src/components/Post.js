import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import postsArray from "./postArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

const Post = () => {
  const [searchParams] = useParams().index;
  const [post, setPost] = useState([]);
  const [allpost, setAllPost] = useState([]);
  useEffect(() => {
    fetchPost();
  });

  const fetchPost = async () => {
    setPost(postsArray[searchParams]);
    setAllPost(postsArray);
  };
  return (
    <>
      <header>
        <div className="headerProfile">
          <div className="back_link">
            <Link to={`/`}>
              <FontAwesomeIcon icon={faChevronLeft} id="backIcon" />
            </Link>
          </div>
          <div className="username">
            <h4>{post.username}</h4>
          </div>
        </div>
      </header>
      <div className="infoHeader">
        <div>
          <img
            src={`/${post.progileimage}`}
            alt="profileimage"
            className="profileimage"
            width={50}
            height={50}
          />
        </div>
        <div className="followDetails">
          <div className="posts">
            <div className="followcount">{allpost.length}</div>
            <div className="followText">Posts</div>
          </div>
          <div className="followers">
            <div className="followcount">{post.followers}</div>
            <div className="followText">Followers</div>
          </div>
          <div className="following">
            <div className="followcount">{post.following}</div>
            <div className="followText">Following</div>
          </div>
        </div>
      </div>
      <div className="profileAbout">
        <div className="designation">{post.designation}</div>
        <div className="hookLine">{post.about}</div>
      </div>
      <div className="messagebtn">{/* <Link to={} >Message</Link> */}</div>

      <div class="posts-grid-container">
        {allpost.map((currElem, index) => {
          return (
            <div class="posts-grid-item">
              <img src={`/${currElem.picture}`} alt="posts grid" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Post;
