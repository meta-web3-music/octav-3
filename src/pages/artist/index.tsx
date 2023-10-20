import Header from "./Header";
import { Outlet } from "react-router-dom";
import NavSeg from "./NavSeg";

const Artist: React.FC = () => {
  return (
    <div>
      <header>
        <div className="flex p-4 items-center relative font-figtree">
          <span className="text-2xl">
            <span
              className="iconify"
              data-icon="fluent:chevron-left-20-regular"
            ></span>
          </span>

          <img
            src="/images/profile_octav3.png"
            className="w-6 rounded-full ml-auto"
          />
        </div>
      </header>
      <div>
        <div className="px-5 w-full">
          <Header />
        </div>
        <div className="my-2"></div>
        <div className="flex">
          <NavSeg path="/artist/post">Posts</NavSeg>
          <NavSeg path="/artist/fandom">Fandom</NavSeg>
          <NavSeg path="/artist/music">Music</NavSeg>
          <NavSeg path="/artist/others">Others</NavSeg>
        </div>
        <div className="w-[100vw] bg-[#999] h-[1px] -mt-[1px]" />

        <Outlet />
      </div>
    </div>
  );
};

export default Artist;
