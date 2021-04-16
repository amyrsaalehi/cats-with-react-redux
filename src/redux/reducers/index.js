import categoryReducer from "./categoryReducer";
import imageReducer from "./imageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  image: imageReducer,
  category: categoryReducer,
});

export default rootReducer;
