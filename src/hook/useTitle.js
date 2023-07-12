import { useEffect } from "react"






const useTitle = title => {
    useEffect(()=>{
        document.title = `${title}-Volunteer-Network`;

    },[title]);
} 


export default useTitle;

/*
1. create a function .
2. use a parameter within the function.
3. use export default this page.
3. and then use this function every pages
*/