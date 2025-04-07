const passwordValidation = (password) => {
  if (password.length < 6) {
    return {
      isValid: false,
      message: "password should be more than 6 character",
    };
  }
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: ["password must have 1 lower case"] };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: ["password must have 1 upper case"] };
  }
  if (!/\d/.test(password)) {
    return { isValid: false, message: ["password must have 1 digit"] };
  } else {
    return {
      isValid: true,
    };
  }
};

export default passwordValidation;
