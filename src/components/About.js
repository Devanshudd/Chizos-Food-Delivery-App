// import { Component } from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// import UserContext from "../utils/UserContext";

// class About extends Component{
//     constructor(props){
//         super(props);

//         // console.log("parent constructor")
//     }

//     componentDidMount(){
//         window.scrollTo(0,0)
//         // console.log("parent did mount")
//     }

//     componentDidUpdate(){
//         // console.log("parent did update");
//     }

//     render(){
//         // console.log("parent render")
//         return (
//             <div className="text-center p-16">
//                 <h1 className="text-lg mb-8">I'm diving deep in rect with Namaste React🚀</h1>
//                 {/* <User name={"Naval"} /> */}
//                 <UserClass name={"Naval (Class)"} />

//                 {/* <UserClass name={"Child-1"} />
//                 <UserClass name={"Child-2"} /> */}

//                 <div>
//                     <UserContext.Consumer>
//                         {
//                             //(data) => <h1>User Name : {data.loggedInUser}</h1>
//                             ({loggedInUser}) => <h1>User Name : {loggedInUser}</h1>
//                         }
//                     </UserContext.Consumer>
//                 </div>
//             </div>
//         )
//     }
// }

// // const About = () =>{
// //     return (
// //         <div>
// //             <h1>I'm diving deep in rect with Namaste React🚀</h1>
// //             {/* <User name={"Naval"} /> */}
// //             <UserClass name={"Naval (Class)"} />
// //         </div>
// //     )
// // }

// export default About;

import User from "./User.js";
const About = () => {
  return (
    <div className="my-[10rem]">
      <User />
    </div>
  );
};
export default About;
