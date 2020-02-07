import { combineReducers } from "redux";

import ToogleCarousel from "./ToogleCarousel.js";
import GallerySelected from "./GallerySelected.js";
import GalleryCount from "./GalleryCount.js";
import CurrentIndex from "./CurrentIndex.js";
const Reducers = combineReducers({
  ToogleCarousel,
  GallerySelected,
  GalleryCount,
  CurrentIndex
});

export default Reducers;
