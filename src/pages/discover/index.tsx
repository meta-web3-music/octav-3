const artists = [0, 0, 2, 3, 0];
const discover: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex p-4  items-center relative font-figtree mb-3">
          <p className="absolute left-[50%] translate-x-[-50%] text-xl/[21px] font-semibold">
            Discover
          </p>
          <img
            src="/images/profile_octav3.png"
            className="w-6 rounded-full ml-auto"
          />
        </div>
      </header>

      <div className="px-4 pb-3 w-full overflow-x-hidden">
        {/* Search bar */}
        <div className="mx-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-lg/[18px] font-medium bg-gray-800 bg-opacity-40 sr-only dark:text-black"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.284 15.284C17.8653 12.7026 17.8653 8.51739 15.284 5.93602C12.7026 3.35466 8.51739 3.35466 5.93602 5.93602C3.35466 8.51739 3.35466 12.7026 5.93602 15.284C8.51739 17.8653 12.7026 17.8653 15.284 15.284ZM15.284 15.284L20 20"
                  stroke="#232323"
                  stroke-opacity="0.4"
                  stroke-width="1.7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-9 text-sm text-gray-900 rounded-full bg-gray-800 bg-opacity-5 focus:outline-none focus:ring-0 focus:border-gray-300 dark:bg-trueGray-800 dark:border-black dark:placeholder-gray-400 dark:text-black"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="my-3"></div>

        {/* Horizontal Profile Cards*/}
        <div className="flex gap-3 overflow-x-scroll w-[100vw] pr-6">
          {artists.map((_e, i) => (
            <div className="min-w-min">
              <div
                key={i}
                className="flex flex-col items-center justify-center py-2 w-36 rounded-lg border bg-trueGray-300"
              >
                <div className="relative w-20 h-20">
                  <img
                    src="/images/drake.jpeg"
                    className="h-full w-full object-cover rounded-full"
                  />
                  <div className="absolute bottom-1 left-1 rounded-full text-[#a49e1e] w-5 h-3 flex items-center justify-center">
                    <span
                      className="iconify text-xl"
                      data-icon="material-symbols:verified"
                    />
                  </div>
                </div>
                <div className="my-2"></div>
                <p className="text-center text-black text-xl/[21px] font-semibold">
                  Drake
                </p>
                <p className="text-center text-[#666666] text-xs/[13px] whitespace-nowrap">
                  110k members
                </p>
                <div className="mt-2"></div>
                <button className="py-1 px-5 rounded-full bg-black text-white text-sm/[15px]">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="my-3"></div>

        <p className="text-left text-black text-xl font-semibold">
          Suggested Artists
        </p>

        <div className="my-2"></div>

        {/*Vertical Profile Cards */}
        <div className="grid grid-rows gap-4 mb-16">
          {artists.map((_e, i) => (
            <div
              key={i}
              className="flex items-center p-2 rounded-lg border bg-trueGray-300"
            >
              <div className="relative w-16 h-16">
                <img
                  src="/images/drake.jpeg"
                  className="h-full w-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-0 rounded-full text-[#a49e1e] w-5 h-4 flex items-center justify-center">
                  <span
                    className="iconify text-lg"
                    data-icon="material-symbols:verified"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-black text-xl/[21px] font-semibold pb-1">
                  Drake
                </p>
                <p className="text-[#666666] text-xs/[13px] whitespace-nowrap">
                  110k members
                </p>
              </div>
              <div className="mt-2 ml-auto mr-2">
                <button className="py-2 px-6 rounded-full bg-black text-[#FFFFFF] text-sm/[15px]">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default discover;
