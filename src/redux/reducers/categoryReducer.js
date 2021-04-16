const initialState = [];

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_ALL_CATEGORIES":
      return payload;
    default:
      return state;
  }
};

export default categoryReducer;
