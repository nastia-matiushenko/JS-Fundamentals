function generateRandomEmail() {
  const domains = ['example.com', 'test.com', 'demo.org', 'sample.net'];
  const randomString = Math.random().toString(36).substring(7);
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${randomString}@${domain}`;
}

function generateRandomName() {
  const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia'];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

function generateRandomAge(min = 18, max = 80) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPassword(length = 12) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const allChars = uppercase + lowercase + numbers;
  
  let password = '';
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

function generateUser(overrides = {}) {
  return {
    name: generateRandomName(),
    email: generateRandomEmail(),
    age: generateRandomAge(),
    password: generateRandomPassword(),
    ...overrides
  };
}

function generateMultipleUsers(count, overrides = {}) {
  return Array.from({ length: count }, () => generateUser(overrides));
}

module.exports = {
  generateRandomEmail,
  generateRandomName,
  generateRandomAge,
  generateRandomPassword,
  generateUser,
  generateMultipleUsers
};

