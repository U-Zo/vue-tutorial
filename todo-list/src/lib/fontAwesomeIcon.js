import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCheckCircle,
  faCircle,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';

import {
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCircle, faCheckCircle, faTrashAlt);
library.add(faPlusCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
