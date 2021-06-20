import React from "react";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getLocationData } from "../../redux/actions/Locations";

const Locations = (props) => {
    const {
        store,
        locationData,
    } = props
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLocationData())
    }, [dispatch])
    
    return(
       <>
          {locationData ? (
        <div
          list={locationData}
          className='todo-task-list media-list'
        >
          {locationData.map((location) => {
            return (
              <li
                key={location._id}
              >
                <div className='todo-title-wrapper'>
                  <div className='todo-title-area'>
                    <span className='todo-title'>{[location.city]}</span>
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
export default Locations;