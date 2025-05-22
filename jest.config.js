export default {
<<<<<<< HEAD
  testEnvironment: 'node',
  transform: {},
};
=======
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "node",
};


//configuração necessária pois o jest entende por padrão o common js e não o ES6 modules, assim ele trasnforma  e aceita
>>>>>>> 0b0cbafb5e6d5ccfb42ec77b4e06044939900d96
