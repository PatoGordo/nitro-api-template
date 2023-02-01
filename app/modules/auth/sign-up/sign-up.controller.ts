import { H3Event } from "h3";
import { AppResult } from "../../../domain/types/app-result";
import { handleError } from "../../../domain/handlers/handle-error";
import { SignUpUseCase } from "./sign-up.usecase";
import { z } from "zod";

export class SignUpController {
  constructor(private useCase: SignUpUseCase) {}

  public async execute(event: H3Event): Promise<AppResult> {
    try {
      const request = await readBody(event);

      await this.validations(request);

      const result = await this.useCase.execute(request);

      event.node.res.statusCode = 201;

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
        name: z.string(),
      })
      .strict();

    validation.parse(request);
  }
}
