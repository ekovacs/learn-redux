// role of the reducer: taking in the action (user intent) and the current state. 
// The state is not mutated but cloned 

function comments(state = [], action) {
  console.log(state, action);

  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // override this post with a new one
      [action.postId]: postComment(state[action.postId], action)
    }
  }

  return state;
};

function postComment(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state, {
          user: action.author, 
          text: action.comment
        }
      ]
      state;
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default: 
      return state;
  }
  return state;
}

export default comments;