
//
document.addEventListener("DOMContentLoaded", () => {
  //give the page a title
  const header = document.createElement("h1");
  header.innerText = `Login Page`;
  document.querySelector("body").appendChild(header);

  const usernameInput = document.createElement("input");
  const passwordInput = document.createElement("input");

  const createUserButton = document.createElement("button");
  const loginButton = document.createElement("button");
  
  loginButton.innerText = 'Login'
  createUserButton.innerText = 'Create User'

  usernameInput.setAttribute('placeholder', 'username')
  passwordInput.setAttribute('placeholder', 'password')
  // passwordInput.setAttribute('type', 'password')

  document.querySelector("body").appendChild(usernameInput)
  document.querySelector("body").appendChild(passwordInput)
  document.querySelector("body").appendChild(createUserButton)
  document.querySelector("body").appendChild(loginButton)

  createUserButton.addEventListener('click', async () => {
    try {
      const body = {
        userName: usernameInput.value,
        password: passwordInput.value
      }
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      // console.log(response)
    } catch(err) {
      console.log(err)
    }
    
  })
  

  loginButton.addEventListener('click', async () => {    
    try {
      const body = {
        userName: usernameInput.value,
        password: passwordInput.value
      }
      const obj = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      }
      console.log(body)
      const response = await fetch('/login', obj)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  })

});