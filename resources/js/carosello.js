import Swiper from "swiper";
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


export default function () {
  return {
    init() {
      new Swiper(this.$el, {
        modules: [Pagination],
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
  };
}
