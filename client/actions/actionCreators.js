// increment / decrement
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
};

export function decrement(index) {
  return {
    type: DECREMENT_LIKES,
    index
  }
};
// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
};


// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
};
