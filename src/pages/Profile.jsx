import React, { useState, useEffect, useRef } from "react";
import { Card } from "../components";
import {
  AiOutlinePoweroff,
  AiOutlineKey,
  AiOutlinePlus,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { baseUrl } from "../utils/api/apiHelper";
import { useApiKeys } from "../../hooks/useApiKeys";

const Profile = () => {
  //standard
  const navigate = useNavigate();
  const { apiKey, fetchUserKey, updateApiKey } = useApiKeys();
  //state
  const [userPosts, setUserPosts] = useState(null);
  const [showApiKey, setShowApiKey] = useState(false);

  const inputRef = useRef(null);

  //function
  useEffect(() => {
    fetchUserPost();
    fetchUserKey();
    console.log(userPosts);
  }, []);

  const logout = () => {
    navigate("/login");
  };

  const RenderCards = ({ data, title }) => {
    if (data?.length > 0)
      return data.map((post) => (
        <Card
          key={post._id}
          _id={post._id}
          name={post.name}
          prompt={post.prompt}
          photo={post.photo}
          isProfile={true}
        />
      ));
    // above code maps over data gets each posts and then makes a card for each post. A card will consist of the post id and all data of the previous post will be passed into it
    return (
      <h2 className="mt-5 font-bold text-[#9fbf93] text-xl uppercase">
        {title}
      </h2>
    );
  };

  let user = JSON.parse(localStorage.getItem("user"));

  const fetchUserPost = async () => {
    console.log(user);
    try {
      const response = await fetch(`${baseUrl}/post-x/profile-posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sub: user.sub }),
      });

      if (response.ok) {
        const result = await response.json();
        setUserPosts(result.data.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function handleUpdateApiKey() {
    const value = inputRef.current.value;

    await updateApiKey(value);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col w-full h-full gap-8">
        <div className="flex flex-col bg-[#e4e9e1] w-full gap-3 justify-center items-center">
          <div className="flex gap-2 justify-center w-full mt-2">
            <div>
              <img
                className="max-xs:w-20 max-xs:h-20 w-24 h-24 rounded-full"
                src={user.picture}
              />
            </div>
          </div>

          <h1 className="max-xs:text-[15px] text-[21px] font-bold">
            {user.name}
          </h1>

          <div className="bg-[#617868] w-full p-2 mt-10 flex justify-end items-center rounded-md italic text-white">
            <div className="w-1/3"></div>

            <div className="flex flex-col justify-center items-center w-1/3">
              {userPosts ? (
                <p className="">
                  Total Posts :{" "}
                  <span className=" font-bold">{userPosts?.length}</span>
                </p>
              ) : (
                "Total Posts: 0"
              )}
            </div>
            <div className="w-1/3  flex justify-end items-end">
              <button
                className="bg-[#9fbf93] p-2 rounded-md hover:cursor-pointer mr-14 shadow-lg text-white w-10 flex items-center justify-center hover:bg-red-700 hover:scale-110"
                onClick={logout}
              >
                <AiOutlinePoweroff />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full bg-white min-h-[5vh] p-4">
          <div className="flex justify-center items-center gap-2">
            <AiOutlineKey color="green" size={24} />
            <h1 className="font-mono text-lg font-semibold w-fit pr-4">
              Open Ai Api Key
            </h1>
            {apiKey ? (
              <>
                <div className="flex flex-col gap-1 w-2/4">
                  <div className="w-full flex justify-end">
                    {showApiKey ? (
                      <AiFillEye
                        onClick={() => setShowApiKey((prev) => (prev = !prev))}
                        className="cursor-pointer"
                      />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={() => setShowApiKey((prev) => (prev = !prev))}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <input
                    type={`${showApiKey ? "text" : "password"}`}
                    className="border border-emerald-800 rounded-md focus:ring-0 outline-none pl-2"
                    ref={inputRef}
                    defaultValue={apiKey}
                  />
                </div>
                <Button
                  icon={<AiOutlinePlus />}
                  text={"Update"}
                  btnClass={"ml-4"}
                  btnFn={handleUpdateApiKey}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="border border-emerald-800 rounded-md w-2/4 focus:ring-0 outline-none pl-2"
                  ref={inputRef}
                />
                <Button
                  icon={<AiOutlinePlus />}
                  text={"Add"}
                  btnClass={"ml-4"}
                  btnFn={handleUpdateApiKey}
                />
              </>
            )}
          </div>
        </div>

        <div
          className={
            "grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 p-4 mt-10 mb-10"
          }
        >
          {
            <RenderCards
              data={userPosts}
              title="No posts found"
              isProfile={true}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
