
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth, creatuserwithEmailandpassword, signinwithEmailandpassword} from"https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"
import{getfiresto , setdoc , doc} from"https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxPXqwvXSTI0rySMUTxStiB7tKyzuIUzE",
    authDomain: "biblio-shia.firebaseapp.com",
    projectId: "biblio-shia",
    storageBucket: "biblio-shia.appspot.com",
    messagingSenderId: "77609083581",
    appId: "1:77609083581:web:1aab8f23637e65c37dcdd4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const signup=document.getElementById('submitSignup')
signup.addeventListeer('click',(eent)=>{
  event.preventDefault();
  const email=document.getElementById('signupEmail').value;
  const password=document.getElementById('signupPassword').value;
  const firstname=document.getElementById('name').value;
  const lastname=document.getElementById('lastname').value;
  const user={
    email,
    password,
    displayName:`${firstname} ${lastname}`
  }
  creatuserwithEmailandpassword(app,user.email,user.password)
  .then((userCredential) => {
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
 const auth=getAuth();
 const user=auth.currentUser;
 if(user){
  console.log(user)
 }
 const db=getFirestore();
 const booksCollection=db.collection('books');
 booksCollection.add({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  description: 'The Great Gatsby is a 1925 novel by F. Scott Fitzgerald, published in 1925 by Doubleday.'
 })
 const docRef=booksCollection.doc('test');
 setdoc(docRef,{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  description: 'The Great Gatsby is a 1925 novel by F. Scott Fitzgerald, published in 1925 by Doubleday.'
 })
 db.collection('books').onSnapshot((snapshot) => {
  console.log('Current data: ', snapshot.docs.map(doc => doc.data()));
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New book: ', change.doc.data());
    }
    if (change.type ==='modified') {
      console.log('Modified book: ', change.doc.data());
    }
  });
 signinwithEmailandpassword(auth,user.email,user.password)
 .then((userCredential) => {
})
 .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  document.getElementById('signupForm').reset();
  alert('Inscription réussie')
  window.location.href='index.html'
  creatuserwithEmailandpassword(auth,user.email,user.password)
  .then((userCredential.user;
    const userdata={
      uid:userCredential.user.uid,
      email:userCredential.user.email,
      displayName:userCredential.user.displayName,
      photoURL:userCredential.user.photoURL
    };
  ) => {
})