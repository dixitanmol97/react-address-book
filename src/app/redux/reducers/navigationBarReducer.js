export const navigationBarReducer = (
  state = {
    collapsed: true,
  },
  action
) => {
  switch (action.type) {
    case "COLLAPSE":
      return {
        ...state,
        collapsed: true,
      };
    case "OPEN":
      return {
        ...state,
        collapsed: false,
      };
    default:
      return state;
  }
};
