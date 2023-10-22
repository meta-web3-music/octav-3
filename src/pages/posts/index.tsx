import Post from "./Post";
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
      <Post>
        <PostProducts />
      </Post>
      <Post />
    </div>
  );
};

export default Posts;
