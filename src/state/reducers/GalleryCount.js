export default function(state = 2, action) {
  switch (action.type) {
    case "SET_GALLERY_COUNT":
      return action.data;

    default:
      return state;
  }
}
