import initialState from "./InitialState";

function toDoReducer(state = listStat, { type, payload }) {
  switch (type) {
    case "todo/data":
      return { toDoListing: payload, status: "ready" };
    case "todo/delete":
      return { toDoListing: payload };
    case "todo/update":
      return { toDoListing: payload };
    case "todo/checked":
      return { toDoListing: payload };
    default:
      return state;
  }
}
export default toDoReducer;
