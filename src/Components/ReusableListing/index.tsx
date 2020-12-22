import React, {useEffect} from "react";

// Resuable props Interface to strict type checking
interface ReusableProps {
    Url: string,
    Callback: React.ReactElement
}
const ReusableListing = (props: ReusableProps) => {
    
    const {Url,Callback} = props;
    useEffect<any>(async () => {
        try{
            const response = await fetch(Url);
            const result = await response.json();
        }
        catch(err){
            console.log(err);
        }
    },[])

    return(
        {Callback()}
    )
    

}

export default ReusableListing;