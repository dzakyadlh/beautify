export function validateName(value) {
  let error;
  if (!value) {
    error = 'Name is required';
  }
  return error;
}

export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email is required';
  } else if (
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    error = 'Please enter a valid email address';
  }
  return error;
}

export function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Password is required';
  } else if (!value.length < 8) {
    error = 'Password must be at least 8 characters';
  }
  return error;
}

export function validateConfirmPassword(value, password) {
  let error;
  if (value != password) {
    error = 'Password is not the same';
  }
  return error;
}
