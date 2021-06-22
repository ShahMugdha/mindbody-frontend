const initialState = {
  userData: {},
  locationData: [],
  selectedUser: null
}

const LocationReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case 'GET_ALL__LOCATION_DATA':{
      return { 
        ...state, 
        locationData: action.payload.result
      }
    }    
    case 'GET_USER_TOKEN':
      return {...state, userData: action.payload.result}
    case 'GET_USER':
      return { ...state, selectedUser: state.selectedUser }
    default:
      console.log("default state")
      return state
  }
}
export default LocationReducer
