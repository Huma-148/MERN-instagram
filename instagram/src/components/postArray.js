import { Link } from "react-router-dom";
import { createContext, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTime from "./postTime";
import profile from "./usersArray";
// import Followers from "./Followers";
// import VerifyAccount from "./VerifyAccount";



const VerifyAccount = () =>{
    const numOfFollowers = createContext(profile[0].followers);
    const useFollowers = useContext(numOfFollowers);
    let verifyProfile = createContext(<FontAwesomeIcon icon="fa-solid fa-badge-check" />);
    let useverifyProfile = useContext(verifyProfile);
   
        return(
            <>
                <span>{useverifyProfile}</span>
            </>
        )
       
}


const postsArray= [{
    id:0,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    designation:profile[0].designation,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post1.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    followers: profile[0].followers,
     following: profile[0].following,
     about: profile[0].about
   

},
{
    id:1,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post2.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    
},
{
    id:2,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post3.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    
},
{
    id:3,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post4.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    
},
{
    id:4,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post5.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    
},
{
    id:5,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post6.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    
},
{
    id:6,
    progileimage: profile[0].userImage,
    username: profile[0].userName,
    userdescription: "User Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    picture: "images/post7.jfif",
    postdescription: "Post DescriptionLorem ipsum dolor sit amet, consectetur adipisicing elit.",
    movetocomment:<Link to={"/comments"} >View all Comments</Link>,
    timeofpost:<CTime />,
    verifyIcon:<VerifyAccount />,
    
},
];

export default postsArray;