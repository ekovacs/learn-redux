// role of the reducer: taking in the action (user intent) and the current state. 
// The state is not mutated but cloned 

function posts(state = [], action) {
  console.log(state, action);
  return state;
};

export default posts;