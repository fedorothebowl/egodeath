import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function () {
  return {
    datas: undefined,
    url: "/aforismi.json",

    async init() {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error("Errore nella richiesta!");
      } else {
        this.datas = await response.json();
      }

      new Swiper(this.$el, {
        slidesPerView: 1,
        spaceBetween: 30,
        modules: [Pagination],
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
    },
  };
}
