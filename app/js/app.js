import {loadProject} from './modules/_loaderProject.js';
import {TimelineMarker} from './modules/timeline/TimelineMarker.js';
import {loadArti} from './modules/_loaderArti.js';
import {introduction} from './modules/_introduction.js';
import {formValidName, getName} from './modules/_formName.js';

loadProject()
formValidName()

var marker = new TimelineMarker("a","r", "t");
console.log(marker)
