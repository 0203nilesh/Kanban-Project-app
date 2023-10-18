import React, { useEffect, useState } from 'react'
import './style.css';
import more from '../../../assets/Icon/more.png';
import Card from '../Card/Card';

export default function Column({title, OrderingType , image, GroupingType, data}) {
  // console.log(data);
  function OrderDataAccordingToType(){
    // console.log(OrderingType);
    if(OrderingType==='priority'){
      data.sort((a, b) => a.priority - b.priority);
      data.reverse();
    }else{
      data.sort((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      // data.reverse();
    }
  }
  useEffect(()=>{
    OrderDataAccordingToType();
  },[OrderingType])

  function firstAndLastLetter(fullName) {
    let arrName = fullName.split("");
    let iniName = fullName.charAt(0);
    let iniLname = arrName[arrName.length - 1].charAt(0);
    return iniName + iniLname;
  }
  const colors= ['#424ef5', '#42c8f5', '#8f1f2e','#a65b19', '#851b81']
  function colorPicker(){
    const index= Math.floor(Math.random() * 5);
    return colors[index];
  }
  return (
    <div className='columnContainer' >
        <div className="firstBox">
            <div className="leftBox">
              {GroupingType==='user' ? (
                <>
                <span className='userIcon' style={{backgroundColor: colorPicker()}} >{firstAndLastLetter(data[0]?.name)}</span>
               <span className='columnTitle' >{data[0]?.name}</span>
                </>
              ):(<>
              <img src={image} className='Icon' alt="columnIcon" />
              <span className='columnTitle' >{title}</span>
              </>)}
              <span style={{color: 'black'}} > {data?.length} </span>
            </div>
            <div className="rightBox">
                <i className="fa-solid fa-plus"></i>
                <img src={more} className='Icon' alt="moreIcon" />
            </div>
        </div>
        <div className="secondBox">
          {data?.length!==0 && (<>
          {data.map((item, index)=>(
            <Card key={index} GroupingType={GroupingType} count={data.length} data={item} />
            )
          )}
          </>)}
        </div>
    </div>
  )
}
