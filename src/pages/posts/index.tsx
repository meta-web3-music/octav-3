import Post from "../components/Post";
import PostProducts from "./PostProducts";

const Posts = () => {
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
        author="Drake"
        postedAgo="2h"
        comments={68}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqau. Ut enim"
        title="Check out my new merch"
        likes={164}
      >
        <PostProducts />
      </Post>
      <Post
        author="Drake"
        postedAgo="5d"
        comments={68}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqau. Ut enim"
        title="Title"
        likes={164}
      ></Post>
    </div>
  );
};

export default Posts;
