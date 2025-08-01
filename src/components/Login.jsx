import React, { useRef, useState } from "react";
import Header from "./Header";
import FormValidate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BODY, LOGO } from "../utils/constant";
function Login() {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormssg, seterrormssg] = useState(null);
  const dispatch =useDispatch()

  const handlesignin = () => {
    setisSignIn(!isSignIn);
  };

  const handleValidate = () => {
    // console.log(email.current.value)
    // console.log(password.current.value)
    const message = FormValidate(email.current.value, password.current.value);
    seterrormssg(message);

    if (message) return;

    if (!isSignIn) {
      //signup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          
          // const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email,displayName} = auth.currentUser
            dispatch(addUser({ uid: uid, email: email , displayName: displayName}))
         
          }).catch((error) => {
            seterrormssg(error.message)
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormssg(errorCode + " " + errorMessage)
         
        });
    }
    else {

      //signin logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormssg(errorCode + " " + errorMessage)
        });
    }
  };

  const email = useRef();
  const password = useRef();
  const name = useRef();

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BODY}
          alt=""
        />
      </div>
      <div className="relative z-10 flex justify-center items-center h-screen ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/80 w-3/10 p-8 rounded-lg "
        >
          <h1 className="font-bold text-white text-3xl my-4">
            {isSignIn ? "Sign In " : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              required
              className="p-4 w-full text-white rounded-lg my-2 border-1 border-white outline-none bg-gray-700/70"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            required
            className="p-4 w-full text-white rounded-lg my-2 border-1 border-white outline-none bg-gray-700/70"
            type="text"
            placeholder="Email or mobile number"
          />

          <input
            ref={password}
            required
            className="p-4 text-white  w-full rounded-lg my-2 border-1 border-white outline-none bg-gray-700/70"
            type="password"
            placeholder="Password"
          />

          <p className="text-red-700 font-bold my-2">{errormssg}</p>

          <button
            onClick={handleValidate}
            className="bg-red-500 rounded-lg text-white w-full p-4 text-center my-8 cursor-pointer"
          >
            {isSignIn ? "Sign In " : "Sign Up"}
          </button>

          {isSignIn ? (
            <h1 className="text-gray-400">
              New to Netflix?
              <span
                onClick={() => handlesignin()}
                className="text-white hover:underline cursor-pointer"
              >
                {" "}
                Sign Up now.
              </span>
            </h1>
          ) : (
            <h1 className="text-gray-400">
              Already Registered?
              <span
                onClick={() => handlesignin()}
                className="text-white hover:underline cursor-pointer"
              >
                {" "}
                Sign In now.
              </span>
            </h1>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
