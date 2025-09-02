import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getDatabase, ref, set }
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCiLh2qyz_z3AYRafRRiGHJQdEPYIMRYAk",
    authDomain: "library-management-cc7dd.firebaseapp.com",
    databaseURL: "https://library-management-cc7dd-default-rtdb.firebaseio.com",
    projectId: "library-management-cc7dd",
    storageBucket: "library-management-cc7dd.firebasestorage.app",
    messagingSenderId: "393274759659",
    appId: "1:393274759659:web:260174e3b3aa4d888fe1ae",
    measurementId: "G-ZW0V646QZ3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// ✅ Signup
window.signup = function () {
    const name = document.getElementById("signupName").value;
    const mobile = document.getElementById("signupMobile").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, "users/" + user.uid), {
                name: name,
                mobile: mobile,
                email: email
            });
            alert("Signup Successful ✅");
            window.location.href = "dashboard.html"; // redirect works now
        })
        .catch((error) => {
            alert(error.message);
        });
};

// ✅ Login
window.login = function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful 🎉");
            window.location.href = "dashboard.html"; // redirect works now
        })
        .catch((error) => {
            alert(error.message);
        });
};
