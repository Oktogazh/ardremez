const seriesState = ({
  namespaced: true,
  state: {
    series: [
      {
        _id: '@IHsM2F6xNmZOD5',
        object: 'series',
        averageDuration: '10`',
        contact: 'emgav@eienn.bzh',
        creator: '5f9f2714ab73e601aa5d192a', // TODO: ObjectId of the creator's account
        description: [ // An array of strings, one str is a <p>
          'Cette série est la première et pour l\'instant la seule accessible sur le site. Elle se concentre sur le dialecte de Basse-Cornouaille (en vert sur la carte) mais vous pourrez également profiter d\'une prononciation plus standarde si vous souhaitez maîtriser un autre dialecte par la suite.',
          'Si vous parvenez à suivre un rythme d\'une leçon par jour, vous devriez pouvoir terminer cette serie d\'ici trois mois, et aurez un niveau suffisant pour vous lancer dans vos premières conversations en breton. En fait, vous devriez en être capable bien avant d\'arriver à la dernière leçon.',
          'Pour vous en convaincre, pourquoi ne pas commencer dès maintenant en cliquant ci-dessous et attaquer les sept premières leçons d\'essais. Une fois convaincus, vous n\'aurez plus qu\'à vous abonner pour accéder à l\'intégralité des leçons.',
          'Bonne écoute',
        ],
        freeTrial: 7,
        images: [
          {
            path: 'img/kartenn.png',
            legend: 'Trugarez da Seongwoo Kang evit ar gartenn.',
            link: '',
          },
        ],
        languages: {
          source: 'fra',
          target: 'bre',
        },
        length: 91,
        openCardOnPodcastEnd: 1,
        podcasts: 91,
        productId: 'prod_IHsM2F6xNmZOD5',
        subscribers: null, // TODO: get a number here
        title: 'Le breton en trois mois',
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
