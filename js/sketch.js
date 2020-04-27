//DB url:https://console.firebase.google.com/u/0/project/messageinbox-2a642/database/messageinbox-2a642/data;


'use strict';

let nodeData;
let fbData;
// let errData;
let fbDataArray;
let database;
let folderName = 'demo-messages';
let messageInput;
let sendMessageBtn;
let receiveMessageBtn;
let receiveMessage;
let receiveDiv, sendDiv;
let sendAgainBtn;

function setup() {
  noCanvas();

  // messageInput = select("#messageInput");
  messageInput = document.querySelector("#messageInput");
  sendMessageBtn = document.querySelector("#sendMessageBtn");
  receiveMessageBtn = document.querySelector("#receiveMessageBtn");
  receiveMessage = document.querySelector("#receiveMessage");
  receiveDiv = document.querySelector("#receiveDiv");
  sendDiv = document.querySelector("#sendDiv");
  sendAgainBtn = document.querySelector("#sendAgainBtn");


  sendMessageBtn.addEventListener('click', sendMessage);
  receiveMessageBtn.addEventListener('click', receivedMessage);
  sendAgainBtn.addEventListener('click', sendAgain);

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

function sendMessage() {

  if (messageInput.value) {
    let timestamp = Date.now();

    nodeData = {
      messageText: messageInput.value,
      timestamp: timestamp,
      received: false,
    }


    // console.log('send message');
    createNode(folderName, timestamp, nodeData);
    messageInput.value = '' //zero out text area
    receiveDiv.style.display = 'block';
    sendDiv.style.display = 'none';
  } else {
    alert("type message first");

  }



}

function receivedMessage() {

  for (let i = 0; i < fbDataArray.length; i++) {
    if(fbDataArray[i].received === false){
    console.log("receiveMessage:");
    console.log(fbDataArray[i].messageText);
    // createP(nodeData.messageText);
    receiveMessage.innerHTML = fbDataArray[i].messageText;
    updateNode(folderName, fbDataArray[i].timestamp, {received: true});
    receiveMessageBtn.style.display = 'none';
    sendAgainBtn.style.display = 'block';

    break;
  }
  else{
      console.log("no more messages");

  }
}


}

function sendAgain(){
  receiveDiv.style.display = 'none';
  sendDiv.style.display = 'block';

}
