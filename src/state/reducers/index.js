import {combineReducers} from 'redux';

import ToogleCarousel from './ToogleCarousel.js';
import GallerySelected from './GallerySelected.js';
import GalleryCount from './GalleryCount.js';
const Reducers = combineReducers({ToogleCarousel, GallerySelected, GalleryCount})

export default Reducers;
