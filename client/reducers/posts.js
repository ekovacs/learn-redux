// role of the reducer: taking in the action (user intent) and the current state. 
// The state is not mutated but cloned 

function posts(state = [], action) {
  console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        
        // speading the first part of the state array, before the modified one
        ...state.slice(0, i), 

      { 
        /* creating a new object: containing the: spreading the unmodified part of the object, and the likes incremented */
        ...state[i], likes: state[i].likes + 1 
      },
        // speading the last part of the state array, after the modified one
        ...state.slice(i + 1)
      ]
    default:
      return state;
  }
  
};

export default posts;