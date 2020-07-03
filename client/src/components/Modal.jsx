import React from 'react';

const Modal = (props) => {
  // console.log('modal', props);

  function displayInfo() {
    return (
      <div className="qnamodal-container">
        <img className="qnamodal-img" src={props.modalInfo} />
      </div>
    );
  }
  const divStyle = {
    display: props.displayModal ? 'block' : 'none',
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div className="modal qnamodal" onClick={closeModal} style={divStyle}>
      <div className="modal-content qnaMC" onClick={(e) => e.stopPropagation()}>
        <span className="qnaclose" onClick={closeModal}>
          &times;
        </span>
        <div className="qnamodal-flex">{displayInfo()}</div>
      </div>
    </div>
  );
};
export default Modal;
