async function getMessage() {
  const response = await fetch("http://localhost:8080/message");

  const message = await response.json();

  const appDiv = document.getElementById("app");
  appDiv.textContent = message;
}

getMessage();
