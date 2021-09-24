import api from "@/api";

const auth = {
  state: {
    userInfo: null,
    fail: false,
  },
  mutations: {
    SET_USER_INFO(state, data) {
      state.userInfo = data;
    },
    SET_FAIL(state, data) {
      state.fail = data;
    },
  },
  actions: {
    async answer({ state, commit }, data) {
      try {
        await api.patch(`/users/${data.user}`, {
          question: [
            ...state.userInfo.question,
            { id: data.id, answer: data.answer },
          ],
        });
        const user = await api.get(
          `/users?login=${state.userInfo.login}&password=${state.userInfo.password}`
        );
        commit("SET_USER_INFO", user.data[0]);
      } catch (err) {
        throw new Error(err);
      }
    },
    async register({ commit }, data) {
      try {
        const isExist = await api.get(
          `/users?login=${data.login}&password=${data.password}`
        );
        if (isExist.data.length) {
          commit("SET_FAIL", true);
          return;
        } else {
          commit("SET_FAIL", false);
          data.question = [];
          const res = await api.post("/users", data);
          commit("SET_USER_INFO", res.data);
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async login({ commit }, data) {
      try {
        const res = await api.get(
          `/users?login=${data.login}&password=${data.password}`
        );
        if (res.data.length) {
          commit("SET_FAIL", false);
          commit("SET_USER_INFO", res.data[0]);
        } else {
          commit("SET_FAIL", true);
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    logout({ commit }) {
      commit("SET_USER_INFO", null);
    },
  },
};

export default auth;
