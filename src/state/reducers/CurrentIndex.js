export default function(state = 0, action) {
  switch (action.type) {
    case "SET_INDEX":
      return action.data;

    default:
      return state;
  }
}
