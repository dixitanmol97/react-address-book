export const searchReducer = (
  state = {
    value: "",
  },
  action
) => {
  switch (action.type) {
    case "ON_CHANGE":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
