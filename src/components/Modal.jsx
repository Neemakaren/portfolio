import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalVisible } from "../store/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { data: product } = useSelector((state) => state.modal);

  const modalOverlayHandler = (e) => {
    dispatch(setIsModalVisible(false));
  };

  return (
    <div className="flex-col flex items-center overflow-y-auto shadow-2xl scroll-smooth fixed z-50 inset-0 container mx-auto my-20 border-2 border-gray-950 rounded-sm  w-full sm:w-[60%] bg-gray-100 dark:bg-black gap-8 p-10 text-black dark:text-white font-Cedarville uppercase text-sm backdrop-blur-md bg-grey/40 ">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="absolute right-16 top-10">
        <button
          className="px-2 py-1 bg-gray-800 text-white  font-bold uppercase rounded-full hover:bg-gray-400 focus:outline-none focus:bg-gray-700"
          onClick={() => dispatch(setIsModalVisible(false))}
        >
          x
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="md:text-lg font-bold text-4xl text-red-700">
          {product.name}
        </h1>
        <div className="flex py-4 px-8">
          <img src={product.profileUrl} alt="" className="" />
        </div>
        <h4 className="font-bold text-[16px]">Technologies:</h4>
        <div className="font-semibold text-[16px]">
          {product.Technology.join(",  ")}
        </div>
        <span className="font-bold">About Project</span>
        <p className="leading-relaxed tracking-wide">{product.purpose}</p>

        <a href={product.view}>
          <span className="px-10 bg-slate-400 py-2 border rounded-md hover:bg-orange-200 text-black">
            view live
          </span>
        </a>
      </div>
    </div>
  );
};

export default Modal;



// blog  https://redux-blog-45hmrhtr4-neemas-projects.vercel.app/


// https://github.com/Neemakaren
