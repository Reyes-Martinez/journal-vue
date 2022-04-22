import { createStore } from "vuex";
import jornal from "../modules/daybook/store/journal";
const store = createStore({
  modules: {
    jornal,
  },
});

export default store;
