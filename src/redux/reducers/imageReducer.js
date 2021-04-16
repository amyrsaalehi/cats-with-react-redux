const initialState = {
  images: [],
  page: 0,
};

const imageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_IMAGES":
      return {
        ...state,
        images: payload.data,
      };
    case "FETCH_MORE_IMAGES":
      return {
        ...state,
        images: [...state.images, ...payload.data],
        page: payload.page,
      };
    default:
      return state;
  }
};

export default imageReducer;
