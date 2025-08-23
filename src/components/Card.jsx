import React, { useState } from "react";
import { download } from "../assets/index";
import { downloadImage } from "../utils";
import { AiFillDelete } from "react-icons/ai";
import { baseUrl } from "../utils/api/apiHelper";

const Card = ({ _id, name, prompt, photo, isProfile }) => {
  //standard
  let clickOnce = true;
  //state
  const [deletePopup, setDeletePopup] = useState(false);

  //func

  const handlePostDelete = () => {
    setDeletePopup(true);
  };

  const handleFinalDelete = async (e) => {
    e.preventDefault();
    if (clickOnce) {
      clickOnce = false;
      try {
        await fetch(`${baseUrl}/post/profile-posts-delete`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, photo }),
        });
      } catch (error) {
        console.log(error);
      } finally {
        window.location.reload();
      }
    }
  };

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />

      {deletePopup ? (
        <div className="bg-[#2b2b2bb2] w-full h-full z-10 fixed top-0 left-0 flex flex-col items-center justify-center">
          <div className="w-80 h-40 bg-[#809475] z-20 flex flex-col justify-center items-center shadow-2xl rounded-md">
            <h1>Do you want to delete this post?</h1>
            <div className="flex justify-between gap-10 items-center mt-6">
              <button
                className="bg-[#d52a2a] p-1 rounded-md shadow-md w-10 hover:scale-105"
                onClick={handleFinalDelete}
              >
                Yes
              </button>
              <button
                className="bg-[#3a603e] p-1 rounded-md shadow-md w-10 hover:scale-105"
                onClick={() => setDeletePopup(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        {isProfile ? (
          <div className="w-full flex justify-end items-end">
            <button
              className="text-[#7c7979] bg-gray-800 flex justify-center items-center w-8 h-8 rounded-md hover:cursor-pointer hover:text-[#cd1818] max-xs:text-[#cd1818]"
              onClick={handlePostDelete}
            >
              <AiFillDelete />
            </button>
          </div>
        ) : (
          <></>
        )}

        <p className="text-white mt-5 overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex justify-center itmes-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 justify-center items-center text-center text-white text-xs font-bold pt-1.5">
              {name[0]}
            </div>
            <h1 className="text-[#9fbf93] pt-1">{name}</h1>
          </div>
          <img
            className="w-7 h-7 rounded-md bg-stone-400 hover:cursor-pointer hover:bg-lime-600 "
            src={download}
            alt="download "
            onClick={() => downloadImage(_id, photo)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
