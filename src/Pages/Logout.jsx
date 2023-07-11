import { AiFillHeart } from "react-icons/ai";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useNavigate } from "react-router-dom";
defineElement(lottie.loadAnimation);
const Logout = () => {
  const nav = useNavigate()
  return (
    <div className="w-full h-screen bg-[#f3f3f9]">
      <header className=" absolute w-full h-[280px] sm:h-[380px]">
        <img
          className="w-full h-full bg-center object-cover bg-no-repeat"
          src="https://themesbrand.com/velzon/html/default/assets/images/auth-one-bg.jpg"
          alt=""
        />
        <div className="w-full absolute inset-0 bg-gradient-to-t from-[#364574] to-[#405189] opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none">
          <svg
            className=" fill-[#f3f3f9]"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1440 120"
          >
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
          </svg>
        </div>
        <canvas
          width="1707"
          height="475"
          className="relative w-full h-full"
        ></canvas>
      </header>
      <main className="w-full relative -mt-8 sm:mt-0 z-10">
        <div className="mt-16 mb-16 text-center text-white">
          <div className="grid place-items-center mb-5">

         <img className="cur cursor-pointer" onClick={() => nav('/')} src="https://themesbrand.com/velzon/html/default/assets/images/logo-light.png" alt="" />
          </div>
          <p className="opacity-50">Premium Admin & Dashboard Template</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className=" sm:w-[32rem] text-center bg-white mx-4 sm:mx-0 p-4 rounded shadow">
            <lord-icon
              src="https://cdn.lordicon.com/hzomhqxz.json"
              trigger="loop"
              colors="primary:#0ab39c"
              class="w-32 h-32"
            ></lord-icon>
            <div className=" w-full flex flex-col items-center px-4">
              <h1 className="mb-3">You are Logged Out</h1>
              <p className="text-gray mb-6">Thank you for using <span className=" font-medium">Panda</span></p>
              <button className="w-full bg-green text-white py-2 rounded">
                  Sign in
                </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full mt-28 sm:mt-96 lg:mt-0 pb-4 bg-inherit">
        <p className="flex justify-center text-sm mb-0 opacity-70">
          ©<script>document.write(new Date().getFullYear())</script>2023 Velzon.
          Crafted with <AiFillHeart className="text-red" /> by Themesbrand
        </p>
      </footer>
    </div>
  );
};
export default Logout;