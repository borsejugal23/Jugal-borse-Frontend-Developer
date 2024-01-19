import React from "react";

const Banner = () => {
  return (
    <>
      <nav className="bg-black shadow-sm  p-4 flex justify-between items-center">
        <span className="text-white text-2xl">SpaceX</span>
      </nav>
      <div className="flex flex-wrap mt-8  justify-around ">
        {/* Text Section */}
        <div className="flex flex-col  p-4 max-w-xl">
          <span className="text-2xl font-bold text-black mb-4">
            SpaceX, Where Boundaries Become Launchpads
          </span>
          <span className="text-md text-gray-500">
            At SpaceX, we transcend the ordinary by
            designing, manufacturing, and launching cutting-edge rockets and
            spacecraft. Our commitment to innovation knows no bounds as we
            redefine the future of space exploration. With a relentless passion
            for pushing boundaries, we propel humanity towards new frontiers,
            turning the impossible into the inevitable. Join us on this cosmic
            journey, where the sky is not the limit – it's just the beginning.
          </span>
        </div>

        {/* Image Section */}
        <div className="flex justify-center p-4 ">
          <img
            className="w-full height-full max-w-lg  rounded-t-lg shadow-lg"
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="spaceX"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Banner;
