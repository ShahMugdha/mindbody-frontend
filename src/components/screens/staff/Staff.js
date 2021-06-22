import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStaffData } from "../../../redux/actions/Staff";

const Staff = () => {
  const staffData = useSelector(state => state.StaffReducer.staffData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStaffData())
  }, [dispatch])
  
  return(
      <>
        {staffData ? (
      <div
        list={staffData}
        className='todo-task-list media-list'
      >
        {staffData.map((staff) => {
          return (
            <li
              key={staff._id}
            >
              <div className='todo-title-wrapper'>
                <div className='todo-title-area'>
                  <span className='todo-title'>{[staff.FirstName]}</span>
                </div>
              </div>
            </li>
          )
        })}
      </div>
    ) : (
      <div className='no-results show'>
        <h5>No Items Found</h5>
      </div>
    )}
    </>
  );
};
export default Staff;