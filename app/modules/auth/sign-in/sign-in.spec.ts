import { inMemoryDB } from "../../../database/in-memory-db";
import { User } from "../../../domain/entities/User";
import { AppResult } from "../../../domain/types/app-result";
import { InMemoryAuthRepository } from "../../../repositories/implementations/in-memory/in-memory.repository";
import { SignInUseCase } from "./sign-in.usecase";

describe("Testing the Sign In UseCase", () => {
  const repository = new InMemoryAuthRepository();

  const userData = { email: "test@test.com", password: "12345678" };

  // Setup
  inMemoryDB.users.push(new User({ ...userData, name: "Test" }));

  it("Should to Sign In successfully and return the user data", async () => {
    const sut = new SignInUseCase(repository);

    const result = await sut.execute(userData);

    expect(result.token).toBeTruthy();
    expect(result.user.email).toEqual(userData.email);
    expect(result.user.email).toEqual(inMemoryDB.users[0].email);
  });

  it("Should to Return an error because email went wrong", async () => {
    const sut = new SignInUseCase(repository);

    try {
      const result = await sut.execute({
        email: "test@whatever.com",
        password: "12345678",
      });

      expect(result).toBeFalsy();
    } catch (error) {
      expect((error as AppResult).message).toBeTruthy();
    }
  });

  it("Should to Return an error because password went wrong", async () => {
    const sut = new SignInUseCase(repository);

    try {
      const result = await sut.execute({
        email: "test@test.com",
        password: "1234567",
      });

      expect(result).toBeFalsy();
    } catch (error) {
      expect((error as AppResult).message).toBeTruthy();
    }
  });

  it("Should to pass because password is hidden", async () => {
    const sut = new SignInUseCase(repository);

    const result = await sut.execute({
      email: "test@test.com",
      password: "12345678",
    });

    expect(result.user.password).toBe("protected-data");
  });
});
