window.onload = pageLoad;

function pageLoad() {
  const form = document.getElementById("myRegister");
  form.onsubmit = validateForm;
}

function validateForm(event) {
  const firstname = document.forms["myRegister"]["firstname"].value;
  const lastname = document.forms["myRegister"]["lastname"].value;
  const gender = document.forms["myRegister"]["gender"].value;
  const birthday = document.forms["myRegister"]["bday"].value;
  const email = document.forms["myRegister"]["email"].value;
  const username = document.forms["myRegister"]["username"].value;
  const password = document.forms["myRegister"]["password"].value;
  const retypePassword = document.forms["myRegister"]["retype_password"].value;

  let errorMsg = "";

  if (firstname === "" || lastname === "" || gender === "" || birthday === "" || email === "" || username === "" || password === "" || retypePassword === "") {
    errorMsg += "กรุณากรอกข้อมูลให้ครบทุกฟิลด์ที่มีเครื่องหมาย *\n";
  }

  if (password !== retypePassword) {
    errorMsg += "รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน\n";
  }

  if (errorMsg !== "") {
    alert(errorMsg);
    document.getElementById("errormsg").innerText = errorMsg;
    event.preventDefault();
    return false;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("ลงทะเบียนสำเร็จ! กำลังไปยังหน้าเข้าสู่ระบบ...");
  window.location.href = "login.html";
  return false;
}
