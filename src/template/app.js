const onSend = function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  fetch("http://localhost:3000/response?email=" + email).then((response) => {
    if (email) {
      window.location.href = "http://localhost:3000/response";
    }
  });
};
