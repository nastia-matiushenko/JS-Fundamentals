# Testing Practice Project

A simple pet project designed to practice and demonstrate testing skills for junior to middle-level developers.

## Skills Covered

### 1. Applies community recommended practice and methodologies to automated tests
- ✅ **TDD (Test-Driven Development)**: Tests written before/during development
- ✅ **BDD (Behavior-Driven Development)**: Human-readable test descriptions using `it()` and descriptive test names

### 2. Structures tests using framework capabilities
- ✅ **describe()**: Groups related tests together
- ✅ **beforeEach/afterEach**: Setup and teardown before/after each test
- ✅ **beforeAll/afterAll**: One-time setup and cleanup
- ✅ **Scopes**: Different test scopes with setup and teardown
- ✅ **Execution options**: Run specific test groups

### 3. Uses dummy data for testing
- ✅ **Fixtures**: Predefined test data in `tests/fixtures/`
- ✅ **Data generators**: Functions to create fake data dynamically
- ✅ **Dummy API**: Mock API for testing user interface interactions

### 4. Uses matchers for testing expected result
- ✅ **General matchers**: `toBe()`, `toEqual()`, `toThrow()`, `toContain()`, etc.
- ✅ **Custom matchers**: Encapsulated matching code in `tests/helpers/customMatchers.js`

### 5. Uses unit tests techniques
- ✅ **Function unit tests**: Testing pure functions based on input/output
- ✅ **UI component tests**: Testing component behavior and state

### 6. Configures and maintains code coverage reports
- ✅ **Basic configuration**: Jest configured for coverage collection
- ✅ **Coverage thresholds**: Minimum coverage requirements set
- ✅ **Coverage reporters**: Multiple report formats (text, lcov, html, json)

## Project Structure

```
testing-practice/
├── src/
│   ├── utils/           # Utility functions to test
│   │   ├── calculator.js
│   │   ├── validator.js
│   │   └── formatter.js
│   ├── components/      # UI components to test
│   │   ├── Button.js
│   │   └── Input.js
│   └── api/            # Dummy API for testing
│       └── userApi.js
├── tests/
│   ├── unit/           # Unit test files
│   │   ├── calculator.test.js
│   │   ├── validator.test.js
│   │   ├── formatter.test.js
│   │   ├── Button.test.js
│   │   ├── Input.test.js
│   │   └── userApi.test.js
│   ├── fixtures/       # Test data fixtures
│   │   └── users.js
│   └── helpers/        # Test helpers
│       ├── customMatchers.js
│       └── dataGenerators.js
├── jest.config.js      # Jest configuration
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run all tests:**
   ```bash
   npm test
   ```

3. **Run tests with coverage:**
   ```bash
   npm run test:coverage
   ```

4. **Run tests in watch mode:**
   ```bash
   npm run test:watch
   ```

5. **Run specific test groups:**
   ```bash
   npm run test:calculator
   npm run test:validator
   npm run test:formatter
   npm run test:components
   npm run test:api
   ```

## Test Examples

### TDD Example
Tests are written to verify expected behavior before implementation.

### BDD Example
```javascript
it('should return true for valid email addresses', () => {
  // Human-readable test description
});
```

### Using Fixtures
```javascript
const { userFixtures } = require('../fixtures/users');
expect(validateEmail(userFixtures.validUser.email)).toBe(true);
```

### Using Data Generators
```javascript
const { generateUser } = require('../helpers/dataGenerators');
const user = generateUser();
```

### Custom Matchers
```javascript
expect(email).toBeValidEmail();
expect(age).toBeValidAge();
```

### Code Coverage
Coverage reports are generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` in a browser to view detailed coverage.

## Coverage Thresholds

The project is configured with minimum coverage thresholds:
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

Tests will fail if coverage falls below these thresholds.

