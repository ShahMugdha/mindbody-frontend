const initialState = {
  userData: {},
  locationData: [],
  selectedUser: null
}

const LocationReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case 'GET_ALL__LOCATION_DATA':
      return { ...state, locationData: action.payload.result[0]}
    case 'GET_USER_TOKEN':
      return {...state, userData: action.payload.result}
    case 'GET_USER':
      return { ...state, selectedUser: state.selectedUser }
    default:
      return state
  }
}
export default LocationReducer
