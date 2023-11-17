import { useState } from "react";
import Modal from "../../Assignment5/helper/Modal";
import QuestionData from "../../../components/QuestionData";
import Question from "../../../mockData/Data6";

const Question6 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <QuestionData value={Question.Question6} />
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Open</h2>
      </Modal>
    </div>
  );
};
export default Question6;
