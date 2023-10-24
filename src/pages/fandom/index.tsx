import Post from "../components/Post";
import PostProducts from "./PostAudio";

const Fandom = () => {
  return (
    <div className="p-3">
      <div className="flex items-center text-[#00000099] ">
        <div className="border-[1px] border-[#00000099] rounded-md p-1">
          <span className="iconify" data-icon="iconamoon:search"></span>
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
