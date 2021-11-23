const seriesState = ({
  namespaced: true,
  state: {
    series: [
      {
        code: '@br42_fr.1',
        title: 'Le breton en trois mois',
        comments: [ // An array of strings, one str is a <p>
          'Cette série est la première et pour l\'instant la seule accessible sur le site. Elle se concentre sur le dialecte de Basse-Cornouaille (en vert sur la carte) mais vous pourrez également profiter d\'une prononciation plus standarde si vous souhaitez maîtriser un autre dialecte par la suite.',
          'Si vous parvennez à suivre un rythme d\'une leçon par jour, vous devriez pouvoir terminer cette serie d\'ici trois mois, et aurrez un niveau suffissant pour vous lancer dans vos premières conversations en breton. En fait, vous devriez en être cappable bien avant d\'arriver à la dernière leçon.',
          'Pour vous en convaincre, pourquoi ne pas commencer dès maintenant en cliquant ci-dessous et attaquer les sept premières leçons d\'essais. Une fois convaincus, vous n\'aurrez plus qu\'à vous abonner pour accéder à l\'intégralité des leçons.',
          'Bonne écoute',
        ],
        images: [
          {
            path: 'img/kartenn.png',
            legend: 'Trugarez da Seongwoo Kang evit ar gartenn.',
            link: '',
          },
        ],
        metadata: {
          averageDuration: '10`',
          creator: '5f9f2714ab73e601aa5d192a', // ObjectId of the creator's account
          freeTrial: 7,
          languages: {
            source: 'fra',
            target: 'bre',
          },
          podcasts: 91,
          startLevel: 'beginner',
          subscribers: null, // TODO: get a number
        },
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

export default seriesState;
