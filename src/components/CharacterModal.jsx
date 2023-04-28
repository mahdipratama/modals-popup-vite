/* eslint-disable react/prop-types */
import { GoX } from "react-icons/go";
import './Modal.css'

function CharacterModal({ modals, onClick, onChange }) {

  const renderModal = modals.map((modal) => {
    if (modal.id === onChange) {
      return (
        <div key={modal.id} className="modal">
          <img src={modal.img} alt={modal.id} />
          <p>{modal.content}</p>
          <GoX className="close-btn" onClick={() => onClick(null)}>Close</GoX>
        </div>
      );
    } else {
      return null;
    }
  })

  return (
    <div>
      {renderModal}
    </div>
  );
}

export default CharacterModal