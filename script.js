const loginForm =
document.getElementById("loginForm");

const registerForm =
document.getElementById("registerForm");

const resetForm =
document.getElementById("resetForm");

/* LOGIN */

if(loginForm){

  loginForm.addEventListener(
  "submit",

  function(e){

    e.preventDefault();

    alert("Đăng nhập thành công!");

  });

}

/* REGISTER */

if(registerForm){

  registerForm.addEventListener(
  "submit",

  function(e){

    e.preventDefault();

    const inputs =
    registerForm.querySelectorAll("input");

    const password = inputs[1].value;

    const confirmPassword =
    inputs[2].value;

    if(password !== confirmPassword){

      alert("Mật khẩu không khớp!");

      return;

    }

    alert("Đăng ký thành công!");

  });

}

/* RESET PASSWORD */

if(resetForm){

  resetForm.addEventListener(
  "submit",

  function(e){

    e.preventDefault();

    alert("Đã gửi email khôi phục mật khẩu!");

  });

}