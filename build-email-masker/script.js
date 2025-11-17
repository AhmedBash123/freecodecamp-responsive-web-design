let email = "ahmedbash72@gmail.com";

function maskEmail(email) {
  const atIndex = email.indexOf('@');
  
  if (atIndex === -1 || atIndex <= 1) {
    return email; 
  }

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return email; 
  }

  const maskLength = username.length - 2;
  const firstChar = username.slice(0, 1);
  const lastChar = username.slice(-1);
  
  const starMask = '*'.repeat(maskLength);
  const maskedUsername = firstChar + starMask + lastChar;
  
  return maskedUsername + domain;
}

console.log(maskEmail(email));
