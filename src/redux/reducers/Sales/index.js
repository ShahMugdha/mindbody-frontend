const initialState = {
    userData: [],
    saleData: []
  }
  
  const SaleReducer = (state = initialState, action) => {
    console.log(action, "action");
    switch (action.type) {
      case 'GET_ALL__SALE_DATA':
        return { ...state, saleData: action.payload.result}
      case 'GET_USER_TOKEN':
        return {...state, userData: action.payload.result}
      default:
        return state
    }
  }
  export default SaleReducer
  