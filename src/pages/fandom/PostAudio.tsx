const PostAudio = () => {
  return (
    <div className="flex border-2 border-[#D9D9D9] rounded-xl p-2 my-4 items-center">
      <img src="/images/drake_song.jpeg" className="w-20 h-20 rounded-md" />
      <div className="flex flex-col justify-center ml-2 leading-5">
        <p>Song</p>
        <p className="text-[#00000099]">Single • Drake</p>
      </div>
      <div className="text-white flex justify-center items-center w-8 h-8 bg-black rounded-full ml-auto mr-1">
        <span className="iconify" data-icon="clarity:play-solid"></span>
      </div>
    </div>
  );
};
export default PostAudio;
