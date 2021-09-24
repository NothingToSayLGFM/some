import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import api from "@/api";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
  state: {
    tasks: null,
    task: null,
  },
  mutations: {
    SET_TASKS(state, data) {
      state.tasks = data;
    },
    SET_TASK(state, data) {
      state.task = data;
    },
  },
  actions: {
    async getTasks({ commit }) {
      try {
        const res = await api.get("/tasks");
        const { data } = res;
        commit("SET_TASKS", data);
      } catch (err) {
        throw new Error(err);
      }
    },
    async createTask(_, data) {
      try {
        await api.post("/tasks", data);
      } catch (err) {
        throw new Error(err);
      }
    },
    async getTaskById({ commit }, id) {
      try {
        const res = await api.get(`/tasks/${id}`);
        commit("SET_TASK", res.data);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  modules: { auth },
});
