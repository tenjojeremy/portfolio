export default function(state = "", action) {
  switch (action.type) {
    case "SET_GALLERY":
      return action.data;

    default:
      return state;
  }
}
