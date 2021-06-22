const initialState = {
  userData: {},
  staffData: [],
  selectedUser: null
}

const StaffReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case 'GET_ALL__STAFF_DATA':
      return { ...state, staffData: action.payload.result}
    case 'GET_USER_TOKEN':
      return {...state, userData: action.payload.result}
    case 'GET_USER':
      return { ...state, selectedUser: state.selectedUser }
    default:
      return state
  }
}
export default StaffReducer