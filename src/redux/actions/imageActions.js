import { getImages } from "../../services/imageServices";

const fetchImages = (categoryId) => async (dispatch, getState) => {
  const { data } = await getImages({
    category_ids: categoryId,
  });

  dispatch({
    type: "FETCH_IMAGES",
    payload: {
      data,
    },
  });
};

const fetchMoreImages = (categoryId, page = 0) => async (
  dispatch,
  getState
) => {
  const { data } = await getImages({
    category_ids: categoryId,
    page,
  });

  dispatch({
    type: "FETCH_MORE_IMAGES",
    payload: {
      data,
      page,
    },
  });
};

export { fetchImages, fetchMoreImages };
