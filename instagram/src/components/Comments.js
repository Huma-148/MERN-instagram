import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import profile from "./usersArray";
import "./comments.css";

const Comments = () => {
  console.log(profile[0].comment, "profile");
  return (
    <>
      <div className="comments_box">
        <header>
          <div className="comment_header">
            <div className="back_link">
              <Link to={`/`}><FontAwesomeIcon icon={faChevronLeft} id="backIcon" /></Link>
            </div>
            <div className="comment_head">
              <h1>Comments</h1>
            </div>
          </div>
        </header>
        {profile.map((user, index) => {
          return (
            <>
              <div className="comment">
                <div>
                  <img
                    src={user.userImage}
                    alt="profileimage"
                    className="profileimage"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="userdetail">
                  <h3>{user.userName}</h3>
                  <p>{user.comment}</p>
                </div>
              </div>
              <hr className="comment_hr" />
            </>
          );
        })}
      </div>
      <div className="add_comment_box">
        <div className="image_add_comment">
          <img
            src="images/imran.jpg"
            alt="profileimage"
            className="profileimage"
            width={50}
            height={50}
          />
        </div>
        <div className="input_add_comment">
          <input type="text" className="add_comment" placeholder="Add Comment here..."/>
        </div>
      </div>
    </>
  );
};

export default Comments;
