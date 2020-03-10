import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from './db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    psychology: [],
    software: [],
    gastronomy: [],
    others: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindPsychology: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('psychology', db.collection('psychology').orderBy('createdAt', 'desc'))),
    bindSoftware: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('software', db.collection('software').orderBy('createdAt', 'desc'))),
    bindGastronomy: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('gastronomy', db.collection('gastronomy').orderBy('createdAt', 'desc'))),
    bindOthers: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('others', db.collection('others').orderBy('createdAt', 'desc'))),
  },
  modules: {
  },
});
