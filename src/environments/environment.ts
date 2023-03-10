// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'asambleavirtualdb',
    appId: '1:341527512731:web:39502c01f2b4e4b7cde83e',
    databaseURL: 'https://asambleavirtualdb.firebaseio.com',
    storageBucket: 'asambleavirtualdb.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBrcmXvbTIbjBcgfoVO0hsEr6VdSnb_L0Y',
    authDomain: 'asambleavirtualdb.firebaseapp.com',
    messagingSenderId: '341527512731',
    measurementId: 'G-G9VMKMHH6Z',
  },
  production: false,
  backend: 'http://localhost:5000/asambleavirtualdb/us-central1/',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
