let firebase = require('firebase') 

var firebaseConfig = {
    apiKey: "AIzaSyBgfR4WY21wp9OGnPjnhSsRdLeIKcOSBrA",
    authDomain: "photopolis-830ef.firebaseapp.com",
    databaseURL: "https://photopolis-830ef.firebaseio.com",
    projectId: "photopolis-830ef",
    storageBucket: "",
    messagingSenderId: "257541748524",
    appId: "1:257541748524:web:94297cdfc6982efb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase