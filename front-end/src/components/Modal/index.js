import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, children, height, width }) => {
  if (!show) {
    return null;  
  }

  return (
    <div className="modalWrapper">
      <div className="modals" style={{height: height, width: width}}>
        {/* <button onClick={onClose} className={`${styles.btnClose} btn-close`} /> */}
        {/* <button onClick={onClose} className="btnClose"/> */}
        <div className="close-container" onClick={onClose}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close">close</label>
        </div>
        {children}     
      </div>
    </div>
  );
};

export default Modal;