import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import profile from "../usersArray";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const HeaderProfile = () => {
    const [searchParams] = useParams().id;
    const [userProfile, setUserProfile] = useState([]);
    useEffect(()=>{
        fetchPost();
    })

    const fetchPost = async () =>{
        setUserProfile(profile[searchParams]) 
    }

    return(
    <header>
        <div className='header'>
        <div className="back_link">
              <Link to={`/`}><FontAwesomeIcon icon={faChevronLeft} id="backIcon" /></Link>
            </div>
          <div className="username">
                <h1>Post username : {userProfile.userName}</h1>
                <p>Followers: {userProfile.followers}</p>
            </div> 
        </div>
      </header>
    )
}

export default HeaderProfile;