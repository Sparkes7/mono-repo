async function getMessage() {
  const response = await fetch(
    "https://mono-repo-server-pz0d.onrender.com/message"
  );

  const message = await response.json();

  const appDiv = document.getElementById("app");
  appDiv.textContent = message;
}

getMessage();
