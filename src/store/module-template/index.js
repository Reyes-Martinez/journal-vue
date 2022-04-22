import state from "./state";
import * as actions from "./actions";
import * as getters from "./actions";
import * as mutations from "./mutations";

const myCutomModules = {
  namespace: true,
  actions,
  getters,
  mutations,
  state,
};

export default myCutomModules;
