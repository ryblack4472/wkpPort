window.onload = loginLoad;

function loginLoad() {
  const form = document.getElementById("myLogin");
  form.onsubmit = checkLogin;

  const errorSpan = document.createElement("span");
  errorSpan.id = "loginError";
  errorSpan.innerText = "";

  const legend = document.querySelector("fieldset legend");
  legend.insertAdjacentElement("afterend", errorSpan);
}

function checkLogin(event) {
  const username = document.getElementById("username").value;
  const password = document.forms["myLogin"]["password"].value;

  const registeredUsername = localStorage.getItem("username");
  const registeredPassword = localStorage.getItem("password");

  if (username === registeredUsername && password === registeredPassword) {
    alert("เข้าสู่ระบบสำเร็จ!");
    return true;
  }
  else {
    document.getElementById("loginError").innerText = "Username หรือ Password ไม่ถูกต้อง กรุณาลองใหม่";
    event.preventDefault();
    return false;
  }
}
