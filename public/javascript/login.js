async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

// async function logout() {
//   const response = await fetch('/api/users/logout', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' }
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// }


// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.form-input').addEventListener('submit', loginFormHandler);
document.getElementById('signUpInstead').addEventListener('click', async () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "";
  console.log("Hello World - I need to sign up");

});

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.getElementById('loginInstead').addEventListener('click', async () => {
  document.getElementById("login-form").style.display = "";
  document.getElementById("signup-form").style.display = "none";

  console.log("Hello World - I'd rather log on");

});