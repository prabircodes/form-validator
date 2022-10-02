const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

//error message function
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

//Check required function
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '')
      showError(input, `${getFildName(input)} is required`)
    else {
      showSuccess(input)
    }
  })
}

// get filed name function
function getFildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// success message function
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//Check for valid email
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // return re.test(String(email).toLowerCase())
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

//check required
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFildName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFildName(input)} must be less than ${max} characters`
    )
  } else {
    showSuccess(input)
  }
}

//check password match
function checkPasswordsMatch(input, input1) {
  if (input.value !== input1.value) {
    showError(input1, 'Password do not match')
  }
}

//Event listener
form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([userName, email, password, confirmPassword])
  checkLength(userName, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, confirmPassword)
})
