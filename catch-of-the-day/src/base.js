import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZI0w2eCCWNopBbdu7WtZwpvX1fxHxNWo",
  authDomain: "catch-of-the-day-chris-seifert.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-chris-seifert.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
