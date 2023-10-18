import React, { useEffect, useState } from 'react'
import './style.css';
import Column from './Column/Column';
import inProgress from '../../assets/Icon/in-progress.png';
import todo from '../../assets/Icon/todo.png';
import done from '../../assets/Icon/check.png';
import backlog from '../../assets/Icon/backlog.png';
import cancel from '../../assets/Icon/cancel.png';
import noPriority from '../../assets/Icon/no_priority.png'
import urgent from '../../assets/Icon/urgent.png';
import high from '../../assets/Icon/high.png';
import medium from '../../assets/Icon/medium.png';
import low from '../../assets/Icon/low.png';
import Header from '../Header/Header';


export default function MainDisplay({data}) {
  // console.log(data);
  const [GroupingType , setGroupingType]= useState('user');
  const [OrderingType, setOrderingType]= useState('priority');
   function statusFilter(statusType){
    const newData=  data.filter((item)=>{
      if(item.status===statusType){
        return item;
      }
    })
    // console.log(newData);
    return newData;
  }
  function priorityFilter(priorityType){
    const newData=  data.filter((item)=>{
      if(item.priority===priorityType){
        return item;
      }
    })
    // console.log(newData);
    return newData;
  }
  function userFilter(userType){
    // console.log(userType);
    const newData=  data.filter((item)=>{
      // console.log(item);
      if(item.userId===userType){
        return item;
      }
    })
    // console.log(newData);
    return newData;
  }
  const [statusTypeData, setStatusTypeData]=useState([
    {
      title: 'Backlog',
      image: [backlog],
      count: 2,
      newData: statusFilter('Backlog'),
    },
    {
      title: 'Todo',
      image: [todo],
      count: 2,
      newData: statusFilter('Todo'),
    },
    {
      title: 'In Progress',
      image: [inProgress],
      count: 2,
      newData: statusFilter('In progress'),
    },
    {
      title: 'Done',
      image: [done],
      count: 2,
      newData: statusFilter('Done'),
    },
    {
      title: 'Cancelled',
      image: [cancel],
      count: 2,
      newData: statusFilter('Cancelled'),
    },
  ])
  const [priorityTypeData, setPriorityTypeData]=useState([
    {
      title: 'No Priority',
      image: [noPriority],
      count: 2,
      newData:  priorityFilter(0),
    },
    {
      title: 'Urgent',
      image: [urgent],
      count: 2,
      newData:  priorityFilter(4),
    },
    {
      title: 'High',
      image: [high],
      count: 2,
      newData:  priorityFilter(3),
    },
    {
      title: 'Medium',
      image: [medium],
      count: 2,
      newData:  priorityFilter(2),
    },
    {
      title: 'Low',
      image: [low],
      count: 2,
      newData:  priorityFilter(1),
    },
  ])
  const [userTypeData, setUserTypeData]=useState([
    {
      newData:  userFilter('usr-1'),
    },
    {
      newData:  userFilter('usr-2'),
    },
    {
      newData:  userFilter('usr-3'),
    },
    {
      newData:  userFilter('usr-4'),
    },
    {
      newData:  userFilter('usr-5'),
    },
  ])
  function showOnGroupingType (){
    if(GroupingType==="status"){
      return (<>
      {statusTypeData.map((item, index)=>{
        return(
          <>
     <Column key={index} newData={statusTypeData} OrderingType={OrderingType} title={item.title} image={item.image} count={item.count} data={item.newData}  GroupingType={GroupingType} />
          </>
        )
      })}
      </>)
    }else if (GroupingType==="priority"){
      return(<>
      {priorityTypeData.map((item, index)=>{
        return(<>
        <Column key={index} newData={priorityTypeData}   OrderingType={OrderingType} title={item.title} image={item.image} count={item.count} data={item.newData} GroupingType={GroupingType} />
        </>)
      })}
      </>)
    }else if (GroupingType==="user"){
      return (<>
      {userTypeData.map((item,index)=>{
        return(
          <>
        <Column data={item.newData} newData={userTypeData} OrderingType={OrderingType}  key={index} GroupingType={GroupingType}/>
          </>
        )
      })}
      </>)
    }
  }
  return (
    <>
    <Header GroupingType={GroupingType} OrderingType={OrderingType} setGroupingType={setGroupingType} setOrderingType={setOrderingType} />
    <div className='mainDisplayContainer' >
      {/* {GroupingType==='user'?(<>
        <Column title={"backlog"} image={backlog}  GroupingType={'user'} />
        <Column title={"todo"} image={todo}  GroupingType={'user'} />
        <Column title={"In Progress"} image={inProgress}  GroupingType={'user'} />
        <Column title={"Done"} image={done}  GroupingType={'user'} />
        <Column title={"Cancelled"} image={cancel} GroupingType={'user'} />
      </>):(<> */}
      {showOnGroupingType()}
      {/* </>) */}
      {/* } */}
    </div>
    </>
  )
}
