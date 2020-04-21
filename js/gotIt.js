'use strict';

function gotData(data){

  fbData = data.val();

  if(fbData) {
    console.log('received data:');
    console.log(fbData);
    fbDataArray = Object.values(fbData);
  }
  else{
    console.log('nothing in this folder yet');
  }
}

function errData(err){
  console.log("error! did not receive data");
  console.log(err);


}

function createNode(_nodeFolder, _nodeId, _nodeObject){
  firebase.database().ref(_nodeFolder + '/' + _nodeId).set(_nodeObject);
}

function updateNode(_nodeFolder, _nodeId, _updateObject){
  firebase.database().ref(_nodeFolder + '/' + _nodeId).update(_updateObject);

}

function deleteNode(_nodeFolder, _nodeId){
  firebase.database().ref(_nodeFolder + '/' + _nodeId).remove();


}

// createNode(folderName, "test", {text: "hello"});
