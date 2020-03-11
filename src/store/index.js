import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from './db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedTopic: '',
    blog: [],
  },
  mutations: {
    setTopic(state, topic) {
      state.selectedTopic = topic;
    },
    ...vuexfireMutations,
  },
  actions: {
    bindBlog: firestoreAction(({ bindFirestoreRef, state }) => bindFirestoreRef('blog', db.collection('blog').where('topic', '==', state.selectedTopic).orderBy('createdAt', 'desc'))),
  },
  modules: {
  },
});
