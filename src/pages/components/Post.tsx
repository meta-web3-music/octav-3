import { FC, PropsWithChildren } from "react";

type Props = {
  author: string;
  verified?: boolean;
  hasControls?: boolean;
  title: string;
  desc: string;
  postedAgo: string;
  likes?: number;
  comments: number;
  lastLike?: string;
};
const Post: FC<PropsWithChildren & Props> = (p) => {
  return (
    <div className="border-2 border-[#D9D9D9] rounded-xl p-3 mt-3">
      {/* Post header */}
      <div className="flex items-center">
        {/* Post Image */}
        <div className="relative w-8 h-8">
          <div className="w-full h-full rounded-full overflow-hidden text-2xl">
            <img
              src="/images/drake.jpeg"
              className="object-cover h-full w-full"
            />
          </div>
          {p.verified && (
            <span className="absolute bottom-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M2.32246 3.44359L2.87397 3.98226L2.96234 4.06859L3.0497 3.98123L4.22463 2.8063L4.46762 3.05797L2.96131 4.56428L2.08154 3.68451L2.32246 3.44359ZM2.99136 6.63431C3.1718 6.55736 3.37582 6.55736 3.55626 6.63431C4.0042 6.82535 4.52551 6.65047 4.77326 6.23323C4.8734 6.06456 5.03982 5.94326 5.23059 5.90087C5.70379 5.79571 6.02275 5.35022 5.97726 4.86931C5.95867 4.67285 6.02221 4.47481 6.15187 4.32662C6.4729 3.95972 6.4729 3.4093 6.15187 3.0424C6.02221 2.89421 5.95867 2.69617 5.97726 2.49971C6.02275 2.0188 5.70379 1.57331 5.23059 1.46815C5.03982 1.42576 4.8734 1.30446 4.77326 1.13579C4.52551 0.718545 4.0042 0.543673 3.55626 0.734708C3.37582 0.811659 3.1718 0.811659 2.99136 0.734708C2.54342 0.543673 2.0221 0.718545 1.77436 1.13579C1.67422 1.30446 1.5078 1.42576 1.31703 1.46815C0.843827 1.57331 0.52487 2.0188 0.570361 2.49971C0.588946 2.69617 0.525413 2.89421 0.395754 3.0424C0.0747151 3.4093 0.0747152 3.95972 0.395754 4.32662C0.525413 4.47481 0.588946 4.67285 0.570361 4.86931C0.52487 5.35022 0.843827 5.79571 1.31703 5.90087C1.5078 5.94326 1.67422 6.06456 1.77436 6.23323C2.0221 6.65047 2.54342 6.82535 2.99136 6.63431Z"
                  fill="#A49E1E"
                  stroke="black"
                  stroke-width="0.25"
                />
              </svg>
            </span>
          )}
        </div>

        <div className="leading-3 flex flex-col justify-center ml-1 text-xs">
          <p>{p.author}</p>
          <p className="text-[#00000099]">{p.postedAgo}</p>
        </div>
        <span className="text-2xl ml-auto">
          <span className="iconify" data-icon="ant-design:more-outlined"></span>
        </span>
      </div>

      <div className="my-4" />
      <p>{p.title}</p>
      <div className="my-2" />
      <p className="text-sm">{p.desc}... view</p>
      <div className="my-2" />
      {p.children}
      <div className="flex">
        <div className="flex text-[#00000099] items-center">
          <span className="iconify" data-icon="basil:comment-outline"></span>
          <p className="text-sm ml-1">{p.comments}</p>
          {p.lastLike && <p className="text-sm ml-1">{p.lastLike}</p>}
        </div>
        {p.likes != undefined && (
          <>
            <div className="mx-1" />
            <div className="flex items-center text-[#00000099]">
              <span
                className="iconify"
                data-icon="fluent:heart-20-regular"
              ></span>
              <p className="text-sm ml-1">{p.likes}</p>
            </div>
          </>
        )}
        {p.hasControls && (
          <div className="flex items-center ml-auto">
            <span className="iconify" data-icon="bi:skip-start-fill"></span>
            <p className="text-sm ml-1">5k</p>
            <span className="iconify" data-icon="bi:skip-end-fill"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
