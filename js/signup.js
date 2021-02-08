const $signinForm = document.querySelector('.form-signin');

const $inputPseudo      = document.querySelector('#inputPseudo');
const $inputEmail       = document.querySelector('#inputEmail');
const $inputPassword    = document.querySelector('#inputPassword');


$signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = $inputEmail.value;
    const password = $inputPassword.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
        console.log("Signed in"); 
        const user = userCredential.user;
        console.log(user.uid);
    })
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('erreur', errorCode, errorMessage);
    });


});