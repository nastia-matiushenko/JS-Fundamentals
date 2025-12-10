const userFixtures = {
  validUser: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    password: 'SecurePass123'
  },
  
  invalidUser: {
    name: '',
    email: 'invalid-email',
    age: -5,
    password: 'weak'
  },
  
  adminUser: {
    name: 'Admin User',
    email: 'admin@example.com',
    age: 35,
    password: 'AdminPass123',
    role: 'admin'
  },
  
  youngUser: {
    name: 'Young User',
    email: 'young@example.com',
    age: 15,
    password: 'YoungPass123'
  }
};

const formFixtures = {
  validForm: {
    email: 'test@example.com',
    password: 'StrongPass123',
    age: 25
  },
  
  invalidForm: {
    email: 'not-an-email',
    password: 'weak',
    age: 'not-a-number'
  }
};

module.exports = {
  userFixtures,
  formFixtures
};

