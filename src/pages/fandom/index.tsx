import Post from "../components/Post";
import PostProducts from "./PostAudio";

const Fandom = () => {
  return (
    <div className="p-3">
      <div className="flex items-center text-[#00000099] ">
        <div className="border-[1px] border-[#00000099] rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M8.7875 5.625L9.375 6.2125L3.7 11.875H3.125V11.3L8.7875 5.625ZM11.0375 1.875C10.8813 1.875 10.7187 1.9375 10.6 2.05625L9.45625 3.2L11.8 5.54375L12.9437 4.4C13.1875 4.15625 13.1875 3.75 12.9437 3.51875L11.4813 2.05625C11.3563 1.93125 11.2 1.875 11.0375 1.875ZM8.7875 3.86875L1.875 10.7812V13.125H4.21875L11.1312 6.2125L8.7875 3.86875Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
        </div>
        <span className="text-2xl ml-auto">
          <span className="iconify" data-icon="bi:filter"></span>
        </span>
      </div>

      <div className="my-2"></div>
      <Post
        author="Camarilla"
        postedAgo="2h"
        comments={200}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqau. Ut enim"
        title="My favourite song. What’s yours?"
        hasControls={true}
        lastLike="1m ago"
      >
        <PostProducts />
      </Post>
      <Post
        author="Om"
        postedAgo="22m"
        comments={22}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqau. Ut enim"
        title="My favourite song. What’s yours?"
        hasControls={true}
        lastLike="15m ago"
      />
      <Post
        author="Kunal"
        postedAgo="3m"
        comments={22}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqau. Ut enim"
        title="My favourite song. What’s yours?"
        hasControls={true}
        lastLike="15m ago"
      />
    </div>
  );
};

export default Fandom;
