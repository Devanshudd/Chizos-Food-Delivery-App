// import { useEffect, useState } from "react";

// const User = (props) =>{
//     const [count, setCount] = useState(0);

//     useEffect(()=>{
//         //api call

//         // console.log("useEffect called");

//         const timer = setInterval(()=>{
//             // console.log("Namaste React🚀");
//         }, 1000)

//         return ()=>{
//             // console.log("useEffect returned");
//             clearInterval(timer);
//         }
//     },[])

//     // console.log("render component");
//     return(
//         <div className="user-container">
//             <div>
//                 <button onClick={()=>setCount(prev=>prev-1)}><h1> - </h1></button>
//                 {count}
//                 <button onClick={()=>setCount(prev=>prev+1)}><h1> + </h1></button>
//             </div>
//             <h2>{props.name}</h2>
//             <h3>Gujarat</h3>
//             <p>@imNaval</p>
//         </div>
//     )
// }

// export default User

import { useState } from "react";
import AboutImg from "../utils/images/chizos1.png";
import BurgerImg from "../utils/images/burgerImg.png";

const User = () => {
  const [profile, setProfile] = useState(false);
  const handelProfileShow = () => setProfile(!profile);

  return (
    <div
      className={`user-cart flex flex-col gap-3 items-center w-[80vw] mx-auto text-gray-600 shadow-2xl rounded-lg py-2 
        font-bold mobile:w-[90vw] ${
          profile ? "animate-[flip_2s_ease,flash_3s_ease]" : ""
        }`}
    >
      {profile ? (
        <div
          className="flex flex-col gap-4 w-[90%] mx-auto items-center font-medium py-[1.5rem] text-justify
           laptop:text-base text-sm smallM:text-xs px-2"
        >
          <img
            src={AboutImg}
            alt="aboutImg"
            className="laptop:w-[150px] w-[120px] smallM:w-[100px]"
          />
          <p>
            At Chizos, we're passionate about bringing delicious food right to
            your doorstep with just a few taps on your smartphone. Whether
            you're craving authentic Italian pasta, spicy Thai curry, or a
            classic American burger, we've got you covered with a diverse range
            of cuisines from the best local restaurants.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-800 text-bold laptop:text-lg text-base text-center smallM:text-sm">
              Our Mission
            </span>
            <p>
              To make ordering food convenient, enjoyable, and reliable for
              everyone. We understand the importance of good food and the role
              it plays in bringing people together, whether it's a family
              dinner, a cozy night in, or a spontaneous gathering with friends.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-800 text-bold laptop:text-lg text-base text-center smallM:text-sm">
              What Set Us Apart
            </span>
            <ol className="list-decimal text-gray-700 flex flex-col gap-2 font-medium">
              <li>
                <b>Extensive Selection:</b> We partner with a wide variety of
                restaurants, ranging from beloved neighborhood eateries to
                popular chains, ensuring there's something for every taste and
                craving.
              </li>
              <li>
                <b>Seamless Experience:</b> Our user-friendly app makes ordering
                food a breeze. With intuitive navigation, real-time updates, and
                secure payment options, you can place your order with confidence
                and track it every step of the way.
              </li>
              <li>
                <b>Quality Assurance:</b> We hold ourselves to the highest
                standards when it comes to food quality and safety. Our partner
                restaurants adhere to strict hygiene practices, and our delivery
                partners handle your food with care, ensuring it arrives fresh
                and piping hot.
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="flex p-[2rem] w-[100%] mobile:flex-col mobile:gap-[3rem]">
          <div className="w-[50%] mobile:w-[100%] mobile:items-center flex flex-col justify-center gap-5">
            <h2
              className="text-gray-700 desktop:leading-[3.8rem] desktop:text-5xl text-4xl leading-[3.2rem] 
                 mobile:text-center mobile:leading-[3.8rem]"
            >
              Welcome to <br className="mobile:hidden" />
              The world of <br />
              <span className="text-white bg-red-500 py-1 px-3 rounded desktop:text-4xl text-2xl mobile:text-3xl">
                Tasty & Fresh Food
              </span>
            </h2>
            <p className="desktop:text-xl text-lg mobile:text-center">
              "Better you will feel if you eat a Food
              <span className="text-red-500">Fire</span> healthy meal"
            </p>
          </div>
          <div className="w-[50%] m-auto mobile:w-[100%]">
            <img
              src={BurgerImg}
              alt="burger"
              className="mobile:w-[350px] mx-auto"
            />
          </div>
        </div>
      )}
      <button
        className="bg-[#dc2626] px-4 py-[0.35rem] outline-none mb-3 font-semibold text-white rounded"
        onClick={handelProfileShow}
      >
        {profile ? "Hide" : "About Us"}
      </button>
    </div>
  );
};
export default User;
