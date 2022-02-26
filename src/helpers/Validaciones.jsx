const regExpTexto = /^[A-Za-z\s?]+$/;
const regExpEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regExpTelefono = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
const regExpTextoEsp=/^[\w\W ]+$/;

export const validateTexto = (field) => {
    if (regExpTexto.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };

  export const validateTextoEsp = (field) => {
    if (regExpTextoEsp.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };

  export const validateEmail = (field) => {
    if (regExpEmail.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };

  export const validateTelefono = (field) => {
    if (regExpTelefono.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };