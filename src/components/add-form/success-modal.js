import React from "react";
import ReactModal from 'react-modal';
import './success-modal.css'
import { Link } from "react-router-dom";

const SuccessModal = ({modalOpen, setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#71ccca',
          borderRadius: '12px'
        },
      };
    return (
        <ReactModal isOpen = {modalOpen} style={customStyles}>
            <div className="modal-inner">
                <label>Expense Added Successfully</label>
                <img src = "https://assets-global.website-files.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png" alt = 'Expense Added'
                className="added-image"></img>
                <Link to={'/'}>
                    <div className="take-home-button">
                        <i class="fi fi-rr-home"></i>
                        Home
                    </div>
                </Link>
            </div>
        </ReactModal>
    )
}

export default SuccessModal;