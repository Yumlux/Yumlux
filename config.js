const firebaseConfig = {
    apiKey: "AIzaSyARfzaeVA2bgqNtt_nMjMaBO07vj_EnxAw",
    authDomain: "yumlux.firebaseapp.com",
    databaseURL: "https://yumlux-default-rtdb.firebaseio.com",
    projectId: "yumlux",
    storageBucket: "yumlux.appspot.com",
    messagingSenderId: "775456350397",
    appId: "1:775456350397:web:5409b9d42956bfcc4657d4"
};

firebase.initializeApp(firebaseConfig);

var ContactFormDB = firebase.database().ref("ContactForm")

document.getElementById("contactForm").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    var message = getElementVal('message');
    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');

    saveMsg(message, name, email, subject);

    document.getElementById("contactForm").reset()
}

const saveMsg = (message, name, email, subject) => {
    var newContactForm = ContactFormDB.push();

    newContactForm.set({
        message: message,
        name: name,
        email: email,
        subject: subject,

    })

};

const getElementVal = (id) => {
    return document.getElementById(id).value
};