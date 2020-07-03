import React from 'react';

const Modal = ({ modalInfo, displayModal }) => {

  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };

  function closeModal(e) {
    e.stopPropagation();
    closeModal();
  }

  return (
    <div
      className="modal qnamodal"
      onClick={closeModal}
      style={divStyle}
      role="button"
    >
      <div
        className="modal-content qnaMC"
        onClick={(e) => e.stopPropagation()}
        role="button"
      >
        <span
          className="qnaclose"
          onClick={closeModal}
          role="button"
        >
          &times;
        </span>
        <div className="qnamodal-flex">
          <div className="qnamodal-container">
            <img className="qnamodal-img" src={modalInfo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
