import React from 'react'
import './style.css';
import more from '../../../assets/Icon/more_gray.png';
import dot from '../../../assets/Icon/dot.png';
import todo from '../../../assets/Icon/todo.png';
import inProgress from '../../../assets/Icon/in-progress.png'
import done from '../../../assets/Icon/dot.png';
import backlog from '../../../assets/Icon/backlog.png';
import cancelled from '../../../assets/Icon/cancel.png';

export default function Card({GroupingType,count ,data}) {
  const colors= ['#424ef5', '#42c8f5', '#8f1f2e','#a65b19', '#851b81']
  function colorPicker(){
    const index= Math.floor(Math.random() * 5);
    return colors[index];
  }
  function firstAndLastLetter(fullName) {
    let arrName = fullName.split(" ");
    let iniName = fullName.charAt(0);
    let iniLname = arrName[arrName.length - 1].charAt(0);
    return iniName + iniLname;
  }
  function imgSelector(statusType){
    // console.log(statusType);
    switch(statusType){
      case 'Todo':
        return todo;
      case 'In progress':
        return inProgress;
      case 'Backlog':
        return backlog;
      case 'Cancelled':
        return cancelled;
      default: 
        return done;
    }
  }
  return (
    <div className="cardContainer" >
      {GroupingType!=='user' && (<>
      <span className='imgIcon' style={{backgroundColor: colorPicker()}} >
        {firstAndLastLetter(data.name)}
        <span className='imgIconSmallDot' style={{backgroundColor: data.available?"green": "gray"}} >.</span>
        </span>
      </>)} 
      <div className="cardFirstBox">
        <span className='cardHeadingText' > {data.id} </span>
      <p className='description' >
      <img src={imgSelector(data.status)} className='Icon' alt="columnIcon" />
      <span>
        {data.title}
      </span> 
        </p>
      </div>
      <div className="cardLastBox">
      <img src={more} className='Icon' color='gray' alt="moreIcon" />
      <span className='lastBoxBottomContent'>
        <span className='gray_dot' >{count}</span>
        <span style={{color: "gray", fontSize: 14}} >
          {data.tag[0]}
          </span>
      </span>
      </div>
    </div>
  )
}
