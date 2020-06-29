const findLowCase = (password) => {
  return /[a-z]/.test(password);
}

const findUpperCase = (password) => {
  return /[A-Z]/.test(password);
}

const findRegex = (password) => {
  return /[!@#$%^&*()-+]/.test(password);
}

const validatePassword = (password) =>{

if (password.length < 6) {
  return 6 - password.length
};

let errorCount = 0 ;
if (!password.match(/\d+/g) && !password.match(/\d+/g).length) {
  errorCount += 1; 
}
if(!findLowCase(password)){
  errorCount += 1; 
}
if(!findUpperCase(password)){
  errorCount += 1; 
}

if(!findRegex(password)){
  errorCount += 1; 
}


return errorCount;

};

console.log(validatePassword("B22237"));
 