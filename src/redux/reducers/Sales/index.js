const initialState = {
    userData: {},
    saleData: [],
    selectedUser: null
  }
  
  const SaleReducer = (state = initialState, action) => {
    console.log(action, "action");
    switch (action.type) {
      case 'GET_ALL__SALE_DATA':
        return { ...state, saleData: action.payload.result}
      case 'GET_USER_TOKEN':
        return {...state, userData: action.payload.result}
      case 'GET_USER':
        return { ...state, selectedUser: state.selectedUser }
      default:
        console.log("default sale")
        return state
    }
  }
  export default SaleReducer
  