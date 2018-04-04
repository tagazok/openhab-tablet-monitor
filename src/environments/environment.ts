// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBu8CaJKMVX58Az_rWAGt4IhmLOzyv39-4",
    authDomain: "offline-demo-4b2ee.firebaseapp.com",
    databaseURL: "https://offline-demo-4b2ee.firebaseio.com",
    projectId: "offline-demo-4b2ee",
    storageBucket: "offline-demo-4b2ee.appspot.com",
    messagingSenderId: "33272280323"
  },
  app: {
    openHabUrl: 'http://192.168.1.25:8080',
    layout: '/assets/layout.json'
  }
};
