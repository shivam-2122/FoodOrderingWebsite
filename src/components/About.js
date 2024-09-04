import { Outlet } from "react-router-dom";
import ProfileFuncComponent from "./Profile";

 // We can me COMPONENTDIDMOUNT async but we CANNOT MAKE useEffect() as Async why ? 
//   componentDidMount(){

//     // Best Place to make an API Call
   

//     console.log("Parent-ComponentDidMount");
// }
const About =()=>{
    return (
        <div>
          <h1>This is About Us Page</h1>
          <h2>Learn about US</h2>
    
          <ProfileFuncComponent name={"Shivam"} xyz="abcd" />
          {/* <Outlet /> */}
        </div>
      );
}



export default About;
  


/******
 * Parent Constructor
 * parent render
 *  First Child COnstructor 
 *  First Child render
 *   Second Child Constructor
 *  Second Child Render
 *  
 *    DOM UPDATED for children
 *  First Chid ComponentDidMount
 *  SecondChild Component Did Mount
 * Parent ComponentDidMount
 * 
 * 
 */