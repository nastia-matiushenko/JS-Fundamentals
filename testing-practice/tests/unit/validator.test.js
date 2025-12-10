const {
  validateEmail,
  validateAge,
  validateForm,
} = require("../../src/utils/validator");
const { userFixtures, formFixtures } = require("../fixtures/users");
const {
  generateRandomEmail,
  generateUser,
} = require("../helpers/dataGenerators");
require("../helpers/customMatchers");

describe("Validator - Email Validation", () => {
  let validEmails;
  let invalidEmails;

  beforeAll(() => {
    validEmails = ["test@example.com", "user.name@domain.co.uk"];
    invalidEmails = ["not-an-email", "@example.com"];
  });

  describe("validateEmail function", () => {
    it("should return true for valid email addresses", () => {
      validEmails.forEach((email) => {
        expect(validateEmail(email)).toBe(true);
      });
    });

    it("should validate email from fixture data", () => {
      expect(validateEmail(userFixtures.validUser.email)).toBe(true);
      expect(validateEmail(userFixtures.invalidUser.email)).toBe(false);
    });

    it("should validate generated email addresses", () => {
      const generatedEmail = generateRandomEmail();
      expect(validateEmail(generatedEmail)).toBe(true);
      expect(generatedEmail).toBeValidEmail();
    });
  });

  describe("validateAge function", () => {
    it("should validate age using custom matcher", () => {
      expect(25).toBeValidAge();
      expect(-5).not.toBeValidAge();
    });

    it("should validate age from fixture data", () => {
      expect(validateAge(userFixtures.validUser.age)).toBe(true);
    });
  });

  describe("validateForm function", () => {
    let formData;

    beforeEach(() => {
      formData = { ...formFixtures.validForm };
    });

    it("should return isValid true for valid form data", () => {
      const result = validateForm(formData);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it("should validate form with generated user data", () => {
      const generatedUser = generateUser();
      const formData = {
        email: generatedUser.email,
        password: generatedUser.password,
        age: generatedUser.age,
      };
      const result = validateForm(formData);
      expect(result.isValid).toBe(true);
    });
  });
});
