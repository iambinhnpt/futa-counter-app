const initialState = {count1:0, count2:0, count3:0}

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREASE_COUNT":
      console.log(action);
      if(action.name == "count1"){
        return {...state, count1: action.payload}
      } else if(action.name == "count2"){
        return {...state, count2: action.payload}
      } else if(action.name == "count3"){
        return {...state, count3: action.payload}
      }
    case "DECREASE_COUNT":
      console.log(action);
      if(action.name == "count1"){
        return {...state, count1: action.payload}
      } else if(action.name == "count2"){
        return {...state, count2: action.payload}
      } else if(action.name == "count3"){
        return {...state, count3: action.payload}
      }
    case "RESET_COUNT":
      return {...state, count: action.payload}

    default:
      return state
  }
}

export default countReducer