import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSaleData } from "../../../redux/actions/Sales";

const Home = () => {
  const saleData = useSelector(state => state.SaleReducer.saleData)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getSaleData())
  }, [dispatch])
  
  return(
    <>
      {saleData ? (
        <div
          list={saleData}
          className='todo-task-list media-list'
        >
          {saleData.map((sale) => {
            return (
              <li
                key={sale.Id}
              >
                <div className='todo-title-wrapper'>
                  <div className='todo-title-area'>
                    <span className='todo-title'>{[sale.SalesRepId]}</span>
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
export default Home;