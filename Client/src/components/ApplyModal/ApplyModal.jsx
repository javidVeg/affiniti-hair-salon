import React from 'react'
import "../ApplyModal/ApplyModal.css"
//!_vv CLOSEMODAL PROP SETS MODALOPEN TO FALSE vv_//
const ApplyModal = ({closeModal}) => {
  return (
    <div className=' z-40 fixed inset-0 bg-slate-500 justify-center items-center'>
      <div className="modal-container">
        <button onClick={() => {closeModal(false)}}> X </button>
        <div className="modal-title">Join the team!</div>
        <div className="modal-form">
          <form>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstname" placeholder='First name..'/>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastname" placeholder='Last name...'/>
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" placeholder='Email address..'/>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder='Phone number..'/>
            <label htmlFor="role">Role</label>
            <select id="role" name="roles">
              <option value="Hair Stylist">Hair Stylist</option>
              <option value="Hair Colorist">Hair Colorist</option>
              <option value="Lash Artist">Lash Artist</option>
            </select>
            <label htmlFor="ig">Instagram</label>
            <input type="text" id="ig" name="ig" placeholder='Instagram'/>
            <textarea id="more-info" name="moreinfo" maxLength={100} placeholder="Who are some of your favorite stylist and why?"></textarea>
          <input onClick={() => {closeModal(false)}} type="submit" value="Submit" />
          </form>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  )
}

export default ApplyModal