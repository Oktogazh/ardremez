const lessonState = ({
  namespaced: true,
  state: {
    backToChapter: null,
    cards: [
      {
        type: null,
        data: {
          header: null,
          body: [],
        },
      },
    ],
    images: [],
    links: {
      linksTitle: null,
      links: [],
    },
    openCardOnEnded: null,
    title: null,
  },
  mutations: {
    SET_LESSON(state, chapterData) {
      const keysToUpdate = Object.keys(chapterData);
      keysToUpdate.forEach((key) => {
        state[key] = chapterData[key];
      });
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      state.id = chapterData._id;
    },
  },
  actions: {
  },
  modules: {
  },
});

export default lessonState;
