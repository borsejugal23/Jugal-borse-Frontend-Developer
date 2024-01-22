import React, { useState } from "react";
import Modal from "./Modal";

const SingleData = ({ data }) => {
  const {
    capsule_serial,
    capsule_id,
    status,
    original_launch,
    type,
    missions,
  } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white p-4 rounded-md shadow-md leading-loose"
        onClick={openModal}
        
      >
        <h2 className="text-xl font-semibold mb-2">{capsule_id}</h2>

        <p className="text-gray-700">
          <span className="font-semibold">Capsule Serial:</span>{" "}
          {capsule_serial}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Status:</span> {status}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Type:</span> {type}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Original Launch:</span>
          {original_launch}
        </p>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {/* Pass any data you want to display in the modal here */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <div className="w-full sm:w-2/4 mb-4 sm:mb-0">
            <img
              className="w-full rounded-lg"
              src="https://www.teslarati.com/wp-content/uploads/2015/05/Space-X-Rocket-e1432020210421.jpg"
              alt="spacex"
            />
          </div>
          <div className="w-full sm:w-2/5">
            <h2 className="text-xl font-semibold mb-2">{capsule_id}</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Capsule Serial:</span>{" "}
              {capsule_serial}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Status:</span> {status}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Type:</span> {type}
            </p>
          </div>
        </div>
        <br />
        <p className="text-gray-700">
          <span className="font-semibold">Original Launch:</span>
          {original_launch}
        </p>
        <br />
        {missions.length === 1 ? (
          <strong className="text-stone-950 text-xl">Mission</strong>
        ) : missions.length > 1 ? (
          <strong className="text-stone-950 text-xl">Missions</strong>
        ) : (
          ""
        )}
        {missions.length > 0 ? (
          <div>
            <div className="flex justify-around bg-neutral-700 rounded-sm">
              <span className="text-stone-50">Name</span>
              <span className="text-stone-50">Flight</span>
            </div>
            {missions?.map((item,i) => (
              <div className="flex justify-around bg-neutral-100" key={i+1}>
                <span>{item.name}</span>
                <span>{item.flight}</span>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default SingleData;
