const artists = [0, 0, 2, 3, 0];
const Home: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex p-4 items-center relative font-figtree">
          <p className="absolute left-[50%] translate-x-[-50%] text-xl">Home</p>
          <img
            src="/images/profile_octav3.png"
            className="w-6 rounded-full ml-auto"
          />
        </div>
      </header>
      <div className="p-4 w-full">
        <h2 className="font-semibold text-xl">My Hubs</h2>
        <div className="my-5"></div>
        <div className="grid grid-cols-3 gap-6">
          {artists.map((e, i) => (
            <div key={i} className="relative">
              <div className="w-24 mx-auto h-24 bg-[#D9D9D9] rounded-full overflow-hidden">
                <img
                  src="/images/drake.jpeg"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="my-2"></div>
              <p className="text-center">Drake</p>
              <div className="w-6 h-6 bg-[#F3EA01] absolute right-1 top-1 border-white border-2 rounded-full flex justify-center items-center">
                <p className="text-xs font-bold">4</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
