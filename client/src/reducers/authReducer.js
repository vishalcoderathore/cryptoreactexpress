export default function (state = null, action) {
  console.log('inside authReducer....');
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}
