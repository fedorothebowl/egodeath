import './resources/scss/main.scss';
import Alpine from 'alpinejs';

import carosello from './resources/js/carosello';

Alpine.data('carosello', carosello);
Alpine.start();