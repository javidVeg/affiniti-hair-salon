import React, { useRef } from 'react'
import "../ApplyModal/ApplyModal.css"
//!_vv CLOSEMODAL PROP SETS MODALOPEN TO FALSE vv_//
const ApplyModal = ({ closeModal }) => {

  const modalRef = useRef(null)

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
  const handleClick = (e) => {
    e.preventDefault();
    modalRef.current.className = "modal-disappear overscroll-contain h-screen w-screen z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    setTimeout(() => {
      closeModal(false);
    }, 300)
  }

  return (
    <div id="bg" ref={modalRef} onClick={handleBGClick} className='modal-appear overscroll-contain h-screen w-screen z-40 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className="modal-container">
        <button onClick={handleClick}> X </button>
        <div className="modal-title">Join the team!</div>
        <div className="modal-form">
          <form>
            <div className="inputs">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstname" />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastname" />
              </div>
            </div>
            <div className="inputs">
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" name="email" />
              </div>
            </div>
            <div className="inputs">
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" />
              </div>
            </div>

            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Role are you interested in?</label>
            <select id="role" name="roles" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected value="Role of Interest">Choose a role</option>
              <option value="Hair Stylist">Hair Stylist</option>
              <option value="Hair Colorist">Hair Colorist</option>
              <option value="Lash Artist">Lash Artist</option>
            </select>

            <div className="inputs">
              <div>
                <label htmlFor="ig">Instagram</label>
                <input type="text" id="ig" name="ig" />
              </div>
            </div>
            <textarea id="more-info" name="moreinfo" maxLength={100}
              placeholder="Who are some of your favorite stylist and why?"
              rows="3"
              class="block p-2.5 w-full text-sm">
            </textarea>
            <input onClick={handleClick} type="submit" value="Submit" />
          </form>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  )
}

export default ApplyModal