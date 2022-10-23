import _ from "lodash";
import { useState } from "react";
import CreateRoomModal from "./createRoomModal";
import Rooms from "./rooms";

const Hall = () => {
  const [showCreateRoomModal, setShowCreateRoomModal] =
    useState<boolean>(false);
  return (
    <div>
      {/* {showCreateRoomModal && <CreateRoomModal />} */}
      <button
        className="btn"
        onClick={() => {
          setShowCreateRoomModal(true);
        }}
      >
        我要創建新房間
      </button>
      <Rooms />
    </div>
  );
};
export default Hall;
