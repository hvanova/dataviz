import VueRouter from "vue-router";
import LinePlot from "./components/LinePlot.vue";
import "tachyons";
import "./styles.css";

export default {
  install(Vue) {
    Vue.component("LinePlot", LinePlot);
    Vue.use(VueRouter);
  }
};
