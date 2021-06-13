import { useDispatch, useSelector } from 'react-redux'
import Home from './Home'
import { getSaleData } from '../../redux/actions/Sales/index'

const SALES = () => {
  const dispatch = useDispatch(),
  const store = useSelector(state => state.sales)

  useEffect(() => {
    dispatch(
      getSaleData()
    )
  }, [dispatch])

  return(
      <>
        {store.saleData ? (
          <Home
            store={store}
            saleData={store.saleData}
            dispatch={dispatch}
            getSaleData={getSaleData}
          />
        ): null}
      </>
  )
}

export default SALES;