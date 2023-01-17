import { createContext, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from "@fortawesome/free-solid-svg-icons";

const VerifyAccount = (param) =>{
    const numOfFollowers = createContext(param.value);
    const useFollowers = useContext(numOfFollowers);
console.log(`Followers passed:  ${param.value}`);
    if(useFollowers > 450){
        return(
            <>
                <FontAwesomeIcon icon={faBadgeCheck} />
            </>
        )
    }    
}

export default VerifyAccount;