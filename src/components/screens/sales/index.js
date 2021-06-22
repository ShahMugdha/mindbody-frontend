import { React, useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect } from 'react'
import Home from './Home'
import { getSaleData } from '../../../redux/actions/Sales/index'

const SALES = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.SaleReuducer)

  useEffect(() => {
    dispatch(
      getSaleData()
    )
  }, [dispatch])

  return(
    <Fragment>
      {store.saleData ? (
        <Home
          store={store}
          saleData={store.saleData}
          dispatch={dispatch}
          getSaleData={getSaleData}
        />
      ): null}
    </Fragment>
  )
}

export default SALES;