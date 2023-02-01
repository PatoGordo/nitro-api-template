import { H3Event } from "h3";
import { AppResult } from "../../../domain/types/app-result";
import { z } from "zod";
import { SignInUseCase } from "./sign-in.usecase";
import { handleError } from "../../../domain/handlers/handle-error";

export class SignInController {
  constructor(private useCase: SignInUseCase) {}

  public async execute(event: H3Event): Promise<AppResult> {
    try {
      const request = await readBody(event);

      await this.validations(request);

      const result = await this.useCase.execute(request);

      return {
        result,
      };
    } catch (error) {
      return handleError(event, error);
    }
  }

  private async validations(request: unknown) {
    const validation = z
      .object({
        email: z.string().email(),
        password: z.string().min(8).max(64),
      })
      .strict();

    validation.parse(request);
  }
}
