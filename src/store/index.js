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
    // eslint-disable-next-line max-len
    // bindPsychology: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('psychology', db.collection('psychology').orderBy('createdAt', 'desc'))),
    bindPsychology: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      console.log('pasamos por aqui wey que pedo');
      return bindFirestoreRef('psychology', db.collection('psychology'));
    }),
    bindSoftware: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('software', db.collection('software').orderBy('createdAt', 'desc'))),
    bindGastronomy: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('gastronomy', db.collection('gastronomy').orderBy('createdAt', 'desc'))),
    bindOthers: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('others', db.collection('others').orderBy('createdAt', 'desc'))),
  },
  modules: {
  },
});
