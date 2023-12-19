import React, { Fragment, useState } from "react";
import AddAdminModal from "../Modals/AddAdminModal";

const HomeHeader: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[#19202C] font-bold font-outfit text-6xl ">
            <span>Welcome back </span>
            <span>John</span>
          </h3>
          <button onClick={() => setShowModal(true)} className="bg-[#0D60D8] text-white text-lg rounded-md px-4 py-2">
            + Add Admin
          </button>
        </div>
      </div>
      <AddAdminModal visible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
};

export default HomeHeader;
