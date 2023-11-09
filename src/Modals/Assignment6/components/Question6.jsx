import { useState } from "react";
import Modal from "../../Assignment5/helper/Modal";

const Question6 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Open</h2>
      </Modal>
    </div>
  );
};
export default Question6;
