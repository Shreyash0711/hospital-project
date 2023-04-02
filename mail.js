// const firebaseConfig = {
//     apiKey: "AIzaSyChYHKbq9sTaEVNS6w48McuGe6Qapy0q-A",
//     authDomain: "hosp-945f0.firebaseapp.com",
//     databaseURL: "https://hosp-945f0-default-rtdb.firebaseio.com",
//     projectId: "hosp-945f0",
//     storageBucket: "hosp-945f0.appspot.com",
//     messagingSenderId: "953667088338",
//     appId: "1:953667088338:web:6c89858e47b55ffcbaa20b"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var hospDB = firebase.database().ref('hosp');
// document.getElementById("hosp").addEventListener("submit", submitForm);

// function submitForm(e) {
//     e.preventDefault();

//     var name = getElementVal('name');
//     var pnum = getElementVal('pnum');
//     var email = getElementVal('email');
//     var gen = getElementVal('gen');
//     var issue = getElementVal('issue');
//     var date = getElementVal('date');

//     savemessages(name, pnum, email, gen, issue, date)
//     //enable alert
//     document.getElementById(".alert").style.display = "block"

//     //remove alert
//     setTimeout(() => {
//         document.getElementById(".alert").style.display = "none"
//     }, 3000);

//     //reset form 
//     document.getElementById("ontactForm").reset()
// }



// const savemessages = (name, pnum, email, gen, issue, date) => {
//     var newhosp = hospDB.push();
//     newhosp.set({
//         name: name,
//         pnum: pnum,
//         email: email,
//         gen: gen,
//         issue: issue,
//         ate: date,
//     });
// };


// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// }
const firebaseConfig = {
    apiKey: "AIzaSyAAFNrH7DjUMiah6hOJIoJTADoxReDmc4I",
    authDomain: "contactform-af7cd.firebaseapp.com",
    databaseURL: "https://contactform-af7cd-default-rtdb.firebaseio.com",
    projectId: "contactform-af7cd",
    storageBucket: "contactform-af7cd.appspot.com",
    messagingSenderId: "666484114474",
    appId: "1:666484114474:web:08178a75cacb6e0f44af53"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference for your databse
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var pnum = getElementVal('pnum');
    var email = getElementVal('email');
    var gen = getElementVal('gen');
    var issue = getElementVal('issue');
    var date = getElementVal('date');

    saveMessages(name, pnum, email, gen, issue, date);

    //enable alert
    document.getElementById(".alert").style.display = "block"

    //remove alert
    setTimeout(() => {
        document.getElementById(".alert").style.display = "none"
    }, 3000);

    //reset form 
    document.getElementById("ontactForm").reset()

}

const saveMessages = (name, pnum, email, gen, issue, date) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        pnum: pnum,
        email: email,
        gen: gen,
        issue: issue,
        date: date,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}