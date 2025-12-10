const userApi = require("../../src/api/userApi");
const { userFixtures } = require("../fixtures/users");
const { generateUser } = require("../helpers/dataGenerators");

describe("User API - Dummy API for Testing", () => {
  beforeEach(() => {
    userApi.resetUsers();
  });

  describe("createUser", () => {
    test("should create a new user", async () => {
      const userData = userFixtures.validUser;
      const user = await userApi.createUser(userData);

      expect(user).toHaveProperty("id");
      expect(user.name).toBe(userData.name);
      expect(user.email).toBe(userData.email);
    });

    test("should create user with generated data", async () => {
      const generatedUser = generateUser();
      const user = await userApi.createUser(generatedUser);

      expect(user.id).toBeDefined();
      expect(user.name).toBe(generatedUser.name);
    });
  });

  describe("getUserById", () => {
    test("should retrieve user by ID", async () => {
      const createdUser = await userApi.createUser(userFixtures.validUser);
      const retrievedUser = await userApi.getUserById(createdUser.id);

      expect(retrievedUser).toEqual(createdUser);
    });
  });
});
