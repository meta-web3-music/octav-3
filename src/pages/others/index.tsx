/* 
Todo :
- Optimize the page by creating different components
*/

const arr = [1, 2, 3, 1, 2, 3];
const Others = () => {
  return (
    <div className="py-4 pl-4">
      {/* Instagram */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 font-bold text-black">Instagram</div>
          <span className="text-black text-opacity-50 font-semibold mr-2">
            See all
          </span>
        </div>

        <div className="w-[360px] h-auto rounded-2xl overflow-hidden mt-3">
          <div className="grid grid-cols-3 gap-x-[1px] gap-y-[1px]">
            {arr.map((_e) => (
              <img
                src="/images/instagram.png"
                className="w-[119px] h-28 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Latest Video */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 font-bold text-black">Latest Video</div>
          <span className="text-black text-opacity-50 font-semibold mr-2">
            See all
          </span>
        </div>

        <div className="w-[360px] h-auto mt-3">
          <div className="relative rounded-2xl">
            <div className="absolute right-1 -top-2 rounded-full text-[#000000] text-[13px] bg-[#F3EA01] w-[42px] h-[20px] flex items-center justify-center">
              <p className="-mt-[.18rem]">new</p>
            </div>
            <img
              src="/images/latest_video.png"
              alt="latest_videos"
              className="block overflow-hidden"
            />
            <div className="absolute h-10 w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm bg-gray-800 bg-opacity-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[20px] w-[20px] ml-[10px] mt-[10px]"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_2328_1108)">
                  <path
                    d="M17.8669 8.93338L4.96687 2.48338C4.79284 2.40275 4.60141 2.36693 4.41 2.37918C4.2186 2.39142 4.03329 2.45135 3.87096 2.5535C3.70862 2.65565 3.57442 2.79678 3.48055 2.96404C3.38669 3.1313 3.33615 3.31938 3.33354 3.51116V16.4056C3.33191 16.6025 3.3811 16.7964 3.47634 16.9687C3.57158 17.141 3.70966 17.2858 3.87723 17.3892C4.04481 17.4925 4.2362 17.5509 4.43292 17.5586C4.62964 17.5664 4.82503 17.5232 5.0002 17.4334L17.8669 10.9834C18.0575 10.8877 18.2177 10.7409 18.3297 10.5594C18.4416 10.3779 18.501 10.1689 18.501 9.95561C18.501 9.74234 18.4416 9.53329 18.3297 9.35179C18.2177 9.17029 18.0575 9.0235 17.8669 8.92783V8.93338Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2328_1108">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <p className="mt-1 text-black font-semibold">
            Drake - Song (Official Video)
          </p>
        </div>
      </div>

      {/* store */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 font-bold text-black">Store</div>
          <span className="text-black text-opacity-50 font-semibold mr-2">
            See all
          </span>
        </div>

        <div className="flex overflow-x-scroll pt-1">
          {arr.map((e) => (
            <div className="relative flex flex-col py-2 mr-3">
              <div className="absolute -right-2 top-0 rounded-full text-[#000000] text-[13px] bg-[#F3EA01] w-[42px] h-[20px] flex items-center justify-center">
                <p className="-mt-[.18rem]">new</p>
              </div>
              <div className="w-[140px] h-[140px]">
                <img
                  src={`/images/product${e}.png`}
                  className="h-full w-full rounded-2xl"
                />
              </div>
              <p className="text-black font-Figtree text-sm font-medium mt-[4px] -mb-1">
                Product
              </p>
              <p className="text-black font-Figtree text-sm font-medium">$50</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tik-TOk */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 font-bold text-black">Tik Tok</div>
          <span className="text-black text-opacity-50 font-semibold mr-2">
            See all
          </span>
        </div>

        <div className="flex overflow-x-scroll pt-1">
          {arr.map((_e) => (
            <div className="relative flex flex-col py-2 bg-trueGray-300 mr-3">
              <div className="absolute -right-2 top-0 rounded-full text-[#000000] text-[13px] bg-[#F3EA01] w-[42px] h-[20px] flex items-center justify-center">
                <p className="-mt-[.18rem]">new</p>
              </div>
              <div className="w-40 h-56">
                <img
                  src="/images/tik_tok.png"
                  className="h-full w-full rounded-2xl object-cover"
                />
                <p className="absolute left-4 bottom-4 text-white text-xs">
                  3:30
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 font-bold text-black">Events</div>
          <span className="text-black text-opacity-50 font-semibold mr-2">
            See all
          </span>
        </div>

        <div className="grid grid-rows gap-4 mb-16 pt-2">
          {arr.map((_e, i) => (
            <div
              key={i}
              className="flex items-center p-2 mr-2 rounded-2xl border border-[#D9D9D9]"
            >
              <div className="ml-3">
                <p className="text-black text-sm font-semibold">
                  6 Nov, Tuesday, 8 pm
                </p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    className="mr-[1px]"
                  >
                    <path
                      d="M5.49984 6.41667C6.51092 6.41667 7.33317 5.59442 7.33317 4.58333C7.33317 3.57225 6.51092 2.75 5.49984 2.75C4.48875 2.75 3.6665 3.57225 3.6665 4.58333C3.6665 5.59442 4.48875 6.41667 5.49984 6.41667ZM5.49984 3.66667C6.00538 3.66667 6.4165 4.07779 6.4165 4.58333C6.4165 5.08887 6.00538 5.5 5.49984 5.5C4.9943 5.5 4.58317 5.08887 4.58317 4.58333C4.58317 4.07779 4.9943 3.66667 5.49984 3.66667Z"
                      fill="black"
                    />
                    <path
                      d="M5.23437 9.99816C5.31194 10.0536 5.40488 10.0833 5.5002 10.0833C5.59552 10.0833 5.68846 10.0536 5.76604 9.99816C5.90537 9.89962 9.18016 7.53508 9.16687 4.58341C9.16687 2.56171 7.52191 0.916748 5.5002 0.916748C3.47849 0.916748 1.83354 2.56171 1.83354 4.58112C1.82024 7.53508 5.09504 9.89962 5.23437 9.99816ZM5.5002 1.83341C7.01683 1.83341 8.2502 3.06679 8.2502 4.58571C8.25983 6.61979 6.23904 8.44625 5.5002 9.04529C4.76183 8.44579 2.74058 6.61887 2.7502 4.58341C2.7502 3.06679 3.98358 1.83341 5.5002 1.83341Z"
                      fill="black"
                    />
                  </svg>
                  <p className="text-black text-sm font-semibold">
                    Madison Square, New York
                  </p>
                </div>
              </div>

              <div className="ml-auto mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    opacity="0.7"
                    d="M3.82724 0.400097L12.7266 8.0001L3.82724 15.6001L3.27342 14.9526L11.4145 8.0001L3.27342 1.04763"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Others;
