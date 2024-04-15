import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [iscPasswordVisible, setIscPasswordVisible] = useState(false);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  console.log("userid", userId);
  console.log("password", password);
  const handleSubmit = () => {
    navigate("/dashboardpage");
  };
  return (
    <div>
      {/* desktop  */}
      <div className="hidden    h-screen w-2/ mx-auto md:flex overflow-x-hidden  justify-between overflow-y-hidden">
        {/* left */}
        <div className=" max-w-screen-xl ">
          <h1 className="text-[#000000] p-5">Your logo</h1>
          <div className="flex flex-col justify-center items-center h-screen mx-[100px] mt-10 py-10">
            <div className=" flex flex-col gap-10">
              <div className=" flex flex-col gap-3">
                <h1 className="text-[#000000] font-bold text-4xl">
                  Sign Up to
                </h1>
                <h1 className=" font-bold text-2xl">Lorem ipsum is simply</h1>
              </div>
              <div className=" flex gap-10">
                <h1>
                  if you already have an account <br /> you can
                  <Link className=" text-[#4D47C3] mx-2" to="/">
                    Login here !
                  </Link>
                </h1>
                <div className=" md:-mt-20 ">
                  <img src="./man.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" flex  flex-col  justify-center px-32 lg:px-[300px]">
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-12">
              <p className="font-poppin text-[40px] font-semibold leading-[normal] text-black">
                Signup
              </p>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col gap-5"
                >
                  <div className=" flex flex-col gap-7">
                    <input
                      className="    text-[20px]   rounded-lg  bg-[#F0EFFF]
                                text-stone-300 text-xl font-normal  h-[50px] p-3 hover:border-3 outline-none"
                      placeholder="Enter your email or user id"
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col gap-7">
                    <input
                      className="    text-[20px]   rounded-lg  bg-[#F0EFFF]
                                text-stone-300 text-xl font-normal  h-[50px] p-3 hover:border-3 outline-none"
                      placeholder="create username "
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col gap-7">
                    <input
                      className="    text-[20px]   rounded-lg  bg-[#F0EFFF]
                                text-stone-300 text-xl font-normal  h-[50px] p-3 hover:border-3 outline-none"
                      placeholder="contact number"
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col ">
                    <div className=" flex">
                      <input
                        className="relative   text-stone-300 text-xl  h-[50px] px-2 rounded-lg  bg-[#F0EFFF] hover:border-3 outline-none"
                        placeholder="Password"
                        type={isPasswordVisible ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className=" absolute right-10 mt-3">
                        {!isPasswordVisible ? (
                          <Icon
                            onClick={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }
                            class="absolute -mr-20 text-gray-400"
                            icon={eyeOff}
                            size={25}
                          />
                        ) : (
                          <Icon
                            onClick={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }
                            class="absolute mr-10 text-gray-400"
                            icon={eye}
                            size={25}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col ">
                    <div className=" flex">
                      <input
                        className="relative   text-stone-300 text-xl  h-[50px] px-2 rounded-lg  bg-[#F0EFFF] hover:border-3 outline-none"
                        placeholder="Confirm  password"
                        type={iscPasswordVisible ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className=" absolute right-10 mt-3">
                        {!iscPasswordVisible ? (
                          <Icon
                            onClick={() =>
                              setIscPasswordVisible(!iscPasswordVisible)
                            }
                            class="absolute -mr-20 text-gray-400"
                            icon={eyeOff}
                            size={25}
                          />
                        ) : (
                          <Icon
                            onClick={() =>
                              setIscPasswordVisible(!iscPasswordVisible)
                            }
                            class="absolute mr-10 text-gray-400"
                            icon={eye}
                            size={25}
                          />
                        )}
                      </div>
                    </div>
                    {/* forget password */}
                    <div className="flex mt-2 justify-end text-gray-400 font-semibold font-['Poppins']">
                      <Link to="/forgotpassword">forgot password</Link>
                    </div>
                  </div>

                  <button
                    className=" text-[#FFF]  text-[20px]  h-[50px] px-2 mt-5 rounded-lg bg-[#4D47C3] 
                hover:bg-[#48bfe4] *:text-white text-lg font-semibold "
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className=" flex flex-col gap-10 mx-auto">
                <p>or continue with</p>
                <div className=" flex gap-5">
                  <FaApple className=" w-10 h-9" />
                  <img src="./google.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>

      {/* mobile  */}
      <div className=" md:hidden">
        {/* left */}
        <div className=" px-10 flex flex-col gap-10">
          <h1 className="text-[#000000] mt-5 ">Your logo</h1>
          <div className="flex flex-col  h-screen  ">
            <div className=" flex flex-col gap-7">
              <div className=" flex flex-col gap-3">
                <h1 className="text-[#000000] font-bold text-4xl">
                  Sign up to
                </h1>
                <h1 className=" font-bold text-2xl">Lorem ipsum is simply</h1>
              </div>
              <div className=" flex ">
                <h1>
                  if you already have an account <br /> you can
                  <Link className=" text-[#4D47C3] mx-2" to="/">
                    Login here !
                  </Link>
                </h1>
              </div>
            </div>
            <div className=" mt-20">
            <form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col gap-5"
                >
                  <div className=" flex flex-col gap-7">
                    <input
                      className="    text-[20px]   rounded-lg  bg-[#F0EFFF]
                                text-stone-300 text-xl font-normal  h-[50px] p-3 hover:border-3 outline-none"
                      placeholder="Enter your email or user id"
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col gap-7">
                    <input
                      className="    text-[20px]   rounded-lg  bg-[#F0EFFF]
                                text-stone-300 text-xl font-normal  h-[50px] p-3 hover:border-3 outline-none"
                      placeholder="create username "
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col gap-7">
                    <input
                      className="    text-[20px]   rounded-lg  bg-[#F0EFFF]
                                text-stone-300 text-xl font-normal  h-[50px] p-3 hover:border-3 outline-none"
                      placeholder="contact number"
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col ">
                    <div className=" flex">
                      <input
                        className="relative   text-stone-300 text-xl w-full  h-[50px] px-2 rounded-lg  bg-[#F0EFFF] hover:border-3 
                        outline-none"
                        placeholder="Password"
                        type={isPasswordVisible ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className=" absolute right-10 mt-3">
                        {!isPasswordVisible ? (
                          <Icon
                            onClick={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }
                            class="absolute -mr-20 text-gray-400"
                            icon={eyeOff}
                            size={25}
                          />
                        ) : (
                          <Icon
                            onClick={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }
                            class="absolute mr-10 text-gray-400"
                            icon={eye}
                            size={25}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col ">
                    <div className=" flex">
                      <input
                        className="relative   text-stone-300 text-xl w-full h-[50px] px-2 rounded-lg  bg-[#F0EFFF] hover:border-3 outline-none"
                        placeholder="Confirm  password"
                        type={iscPasswordVisible ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className=" absolute right-10 mt-3">
                        {!iscPasswordVisible ? (
                          <Icon
                            onClick={() =>
                              setIscPasswordVisible(!iscPasswordVisible)
                            }
                            class="absolute -mr-20 text-gray-400"
                            icon={eyeOff}
                            size={25}
                          />
                        ) : (
                          <Icon
                            onClick={() =>
                              setIscPasswordVisible(!iscPasswordVisible)
                            }
                            class="absolute mr-10 text-gray-400"
                            icon={eye}
                            size={25}
                          />
                        )}
                      </div>
                    </div>
                    {/* forget password */}
                    <div className="flex mt-2 justify-end text-gray-400 font-semibold font-['Poppins']">
                      <Link to="/forgotpassword">forgot password</Link>
                    </div>
                  </div>

                  <button
                    className=" text-[#FFF]  text-[20px]  h-[50px] px-2 mt-5 rounded-lg bg-[#4D47C3] 
                hover:bg-[#48bfe4] *:text-white text-lg font-semibold "
                  >
                    Login
                  </button>
                </form> 
              <div className=" w-full  mt-10">
                <p className=" text-center">or continue with</p>
                <div className=" flex gap-5 mx-auto justify-center mt-10">
                  <FaApple className=" w-10 h-9" />
                  <img src="./google.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
