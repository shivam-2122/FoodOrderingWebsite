import {useState} from "react";

const Profile= () =>{
    const [count, setcount] = useState(0);
    // useEffect(()=>{

        // API Call  // Why it is a great place for API Call 
        // ANs - First of all we just render every thing what we want and then we update it.
        // it means first rendering of page is done and then API call happens and then Re-render it once again


         
    //     console.log("UseEffect");
    // })
    console.log("Render")
    return (
        <div>
            <h2>Profile Component in React</h2>
            <h2> Count : {count}</h2>

        <button onClick={()=>{
            setcount(1)
        }}>Count</button>

            </div>
    )
}
export default Profile;