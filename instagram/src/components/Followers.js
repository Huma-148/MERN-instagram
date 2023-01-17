import { createContext, useContext } from "react"

const Followers = () =>{
    const numOfFollowers = createContext(500);
    const useFollowers = useContext(numOfFollowers);
  
    return(
        <>
            <p>Followers : {useFollowers}</p>
        </>
    )   
}

export default Followers;