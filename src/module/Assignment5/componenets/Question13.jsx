import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import Modal from "../helper/Modal";

const Question13 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div style={styleAll.Ques}>{props.value}</div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Custom Content</h2>
        <p>This is your custom content inside the modal.</p>
      </Modal>
    </div>
  );
};
export default Question13;
