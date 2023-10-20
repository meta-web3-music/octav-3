const artists = [0, 0, 2, 3, 0];
const discover: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex p-4 items-center relative font-figtree">
          <p className="absolute left-[50%] translate-x-[-50%] text-xl">
            Discover
          </p>
          <img
            src="/images/profile_octav3.png"
            className="w-6 rounded-full ml-auto"
          />
        </div>
      </header>

      <div className="p-4 w-full">
        {/* Search bar */}
        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-trueGray-800 sr-only dark:text-black"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-full bg-gray-50 focus:outline-none focus:ring-0 focus:border-gray-300 dark:bg-trueGray-800 dark:border-black dark:placeholder-gray-400 dark:text-black"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <div className="my-5"></div>

        {/* Horizontal Profile Cards*/}
        <div className="flex gap-5 overflow-x-scroll">
          {artists.map((_e, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-2 px-16 w-32 rounded-lg border bg-trueGray-300"
            >
              <div className="relative w-20 h-20">
                <img
                  src="/images/drake.jpeg"
                  className="h-full w-full object-cover rounded-full"
                />
                <div className="absolute bottom-1 left-1 rounded-full text-[#a49e1e] w-5 h-5 flex items-center justify-center">
                  <span
                    className="iconify"
                    data-icon="material-symbols:verified"
                  />
                </div>
              </div>
              <div className="my-2"></div>
              <p className="text-center text-black">Drake</p>
              <p className="text-center text-xs text-[#666666] whitespace-nowrap">
                110k members
              </p>
              <div className="mt-2"></div>
              <button className="w-16 rounded-full bg-black text-white">
                Join
              </button>
            </div>
          ))}
        </div>

        <div className="my-5"></div>

        <p className="text-left text-black text-xl font-semibold">
          Suggested Artists
        </p>

        <div className="my-5"></div>

        {/*Vertical Profile Cards */}
        <div className="grid grid-rows gap-4 mb-16">
          {artists.map((_e, i) => (
            <div
              key={i}
              className="flex items-center p-2 rounded-lg border bg-trueGray-300"
            >
              <div className="relative w-20 h-20">
                <img
                  src="/images/drake.jpeg"
                  className="h-full w-full object-cover rounded-full"
                />
                <div className="absolute bottom-1 left-1 rounded-full text-[#a49e1e] w-5 h-5 flex items-center justify-center">
                  <span
                    className="iconify"
                    data-icon="material-symbols:verified"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-black">Drake</p>
                <p className="text-xs text-[#666666] whitespace-nowrap">
                  110k members
                </p>
              </div>
              <div className="mt-2 ml-28">
                <button className="w-16 rounded-full bg-black text-white">
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
