const Header = () => {
  return (
    <>
      {/* -------------------Artist name, image and actions------------------- */}
      <div className="flex items-center">
        <div className="w-16 h-16 bg-[#D9D9D9] rounded-full overflow-hidden">
          <img
            src="/images/drake.jpeg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center ml-2">
          <div className="flex items-center">
            <p className="text-center leading-5">Drake</p>
            <span className="ml-1">
              <span className="iconify" data-icon="humbleicons:verified"></span>
            </span>
          </div>

          <p className="text-[rgba(0,0,0,0.60)] text-xs">110K members</p>
        </div>

        {/* -------------------Actions------------------- */}
        <button className="bg-black rounded-3xl text-white ml-auto py-1 px-4 text-sm font-medium">
          Leave
        </button>
        <span className="text-3xl ml-2 -mr-2">
          <span className="iconify" data-icon="ant-design:more-outlined"></span>
        </span>
      </div>
      <div className="my-2"></div>
      {/* -------------------Description------------------- */}
      <div className="text-xs leading-3 flex flex-wrap relative">
        <p className="text-ellipsis line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore maere erere erere erere
          erecve
        </p>
        <div className="ml-auto absolute right-0 bottom-0 bg-white">
          <span className="text-black">... </span>
          <span className="text-[#A49E1E] font-semibold">Read more</span>
        </div>
      </div>
    </>
  );
};

export default Header;
