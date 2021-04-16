import { getAllCategories } from "../../services/categoryServices";

const fetchAllCategories = () => async (dispatch, getState) => {
  const { data } = await getAllCategories();

  dispatch({
    type: "FETCH_ALL_CATEGORIES",
    payload: data,
  });
};

export { fetchAllCategories };
