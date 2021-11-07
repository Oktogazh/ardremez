const seriesMockup = ({
  namespaced: true,
  state: {
    code: '@br42_fr.1',
    title: 'Le breton en trois mois',
    comments: [ // An array of strings, one str is a <p>
      'Cette série est la première et pour l\'instant la seule qu\'offre le site. Elle se concentre sur le dialecte de Basse-Cornouaille (en vert sur la carte) mais vous pourrez également provité d\'une prononciation plus standarde si vous souhaitez maîtriser un autre dialecte par la suite.',
      'Si vous parvennez à suivre un rythme d\'une leçon par jour, vous devriez pouvoir atteindre un niveau suffissant pour vous lancer dans vos première conversation en breton. En faite, vous devriez en être cappable bien avant d\'arriver à la dernière leçon.',
      'Pour vous en vonvaincre, pourquoi ne pas commencer dès maintenant en cliquant ci-dessous pour commencer votre première leçons d\'essais. Une fois convaincu, vous n\'aurrez plus qu\'à vous abonner pour accéder à l\'intégralité des leçons.',
      'Bonne écoute',
    ],
    metadata: {
      averageDuration: '10`',
      creator: '5f9f2714ab73e601aa5d192a', // ObjectId of the creator's account
      languages: {
        source: 'fra',
        target: 'bre',
      },
      podcasts: 91,
      startLevel: 'beginner',
      subscribers: null, // TODO: get a number
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

export default seriesMockup;
