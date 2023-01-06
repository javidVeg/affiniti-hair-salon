import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import "../ApplyModal/ApplyModal.css"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


//!_vv CLOSEMODAL PROP SETS MODALOPEN TO FALSE vv_//
const ApplyModal = ({ closeModal }) => {

  const modalRef = useRef(null)

  const formRef = useRef();

  const notify = () => toast.success("Application Submitted!! 🪩 💃🏻", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });

  //!_vv SENDS APPLICATION DATA TO OWNER EMAIL USING EMAILJS vv_//
  const sendApp = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yj2h9ir', 'template_sui26e8', formRef.current, 'WqyMbkG9cBUuCCGiX')
      .then((result) => {
        notify();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    handleClick();
  };

  //!_vv HANDLES CLICKS TO THE BACKGROUND AND NOT THE FORM vv_//
  const handleBGClick = (e) => {
    if (e.target.id === "bg") {
      modalRef.current.className = "modal-disappear overscroll-contain h-screen w-screen z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      setTimeout(() => {
        closeModal(false);
      }, 300)

    }
  }

  //!_vv HANDLES CLICKS TO CLOSE FORM vv_//
  const handleClick = () => {
    // e.preventDefault();
    modalRef.current.className = "modal-disappear overscroll-contain h-screen w-screen z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    setTimeout(() => {
      closeModal(false);
    }, 300)
  }

  return (
    <div id="bg" ref={modalRef} onClick={handleBGClick} className='modal-appear overscroll-contain z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className="modal-container ">
        <div className="exit-button">
          <Button
            onClick={handleClick}
            variant="text"
            size="medium"
            startIcon={<CloseIcon />}
            sx={{
              color: "black",
              fontSize: 14,
              "&:hover": { backgroundColor: "transparent", color: "red" },
            }}
          ></Button>
        </div>
        <div className="modal-title">Join the team!</div>
        <div className="modal-form">
          <form ref={formRef} onSubmit={sendApp}>
            <div className="inputs">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input style={{ fontSize: "16px" }} type="text" id="first-name" name="user_first_name" />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input style={{ fontSize: "16px" }} type="text" id="last-name" name="user_last_name" />
              </div>
            </div>
            <div className="inputs">
              <div className='email'>
                <label htmlFor="email">Email Address</label>
                <input style={{ fontSize: "16px" }} type="email" id="email" name="user_email" />
              </div>
            </div>
            <div className="inputs">
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input style={{ fontSize: "16px" }} type="text" id="phone" name="user_phone" />
              </div>
            </div>

            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">What Role are you interested in?</label>
            <select id="role" name="user_role" type="radio" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
              <option defaultValue value="Role of Interest">Choose a role</option>
              <option value="Hair Stylist">Hair Stylist</option>
              <option value="Hair Colorist">Hair Colorist</option>
              <option value="Lash Artist">Lash Artist</option>
            </select>

            <div className="inputs">
              <div>
                <label htmlFor="ig">Instagram</label>
                <input style={{ fontSize: "16px" }} type="text" id="ig" name="user_ig" />
              </div>
            </div>
            <textarea style={{ fontSize: "16px" }} id="more-info" name="user_more_info"
              placeholder="Who are some of your favorite stylist and why?"
              rows="4"
              className="block p-2.5 w-full text-sm">
            </textarea>
            <div className="button-submit">
              <Button
                // onClick={notify}
                variant="contained"
                type='submit'
                size="medium"
                startIcon={<SendIcon />}
                sx={{
                  marginTop: 2,
                  marginBottom: 1.5,
                  width: "50%",
                  color: "black",
                  backgroundColor: "#ffe082",
                  boxShadow: "10",
                  fontSize: 14,
                  "&:hover": { backgroundColor: "#ffe69b" },
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  )
}

export default ApplyModal