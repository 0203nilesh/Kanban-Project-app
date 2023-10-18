import React, { useState } from 'react'
import './style.css';
import crossBarIcon from '../../assets/Icon/equalizer.png';
import down from '../../assets/Icon/down.png';
import up from '../../assets/Icon/up.png';

export default function Header({GroupingType, OrderingType,setGroupingType, setOrderingType}) {
  const [show , setShow]= useState(false);
  return (
    <div className="headerContainer" >  
        <button className='headerBtn' onClick={()=>{
          setShow(!show);
        }} >
        {/* <i className='HeaderBtnIcon'  class="fa-solid fa-bars"></i> */}
        <img className='Icon' src={crossBarIcon} alt="cross Bar" />
            <span className='headerBtnText' > Display </span>
        <img className='Icon' src={!show?(down):(up)} alt="down icon" />
        </button>
        {show && (<>
        <div className="inputBox">
          <p>
            <span>Grouping</span>
          <select name="GroupingType" id="group" value={GroupingType} onChange={(e)=>{
            // console.log(e.target.value);
            setGroupingType(e.target.value);
            setShow(false);
          }} >
            <option value="user" >User</option>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
          </select>
          </p>
          <p>
            <span>Ordering</span>
          <select name="PriorityType" id="priority" value={OrderingType} onChange={(e)=>{
            // console.log(e.target.value);
            setOrderingType(e.target.value);
            setShow(false);
          }}>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
          </p>
        </div>
        </>)}
    </div>
  )
}
