//DB url:https://console.firebase.google.com/u/0/project/messageinbox-2a642/database/messageinbox-2a642/data;


'use strict';

let nodeData;
let fbData;
// let errData;
let fbDataArray;
let database;
let folderName = 'messages';

function setup() {
  noCanvas();

  let config = {
    apiKey: "AIzaSyCe3Wvf80L38tMAshrY5UPo21GiAAKf2YI",
    authDomain: "messageinbox-3c878.firebaseapp.com",
    databaseURL: "https://messageinbox-3c878.firebaseio.com",
    projectId: "messageinbox-3c878",
    storageBucket: "messageinbox-3c878.appspot.com",
    messagingSenderId: "517264911668",
    appId: "1:517264911668:web:2ee40a7408cea187610961"

  }

  firebase.initializeApp(config);

  database = firebase.database();

  let ref = database.ref(folderName);

  ref.on('value', gotData, errData);


}

function draw() {

}
