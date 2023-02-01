import { H3Event } from "h3";
import { AppResult } from "../../../domain/types/app-result";
import { $st } from "../../../../i18n/$st";
import { z } from "zod";
import { ResetPasswordUseCase } from "./reset-password.usecase";
import { handleError } from "../../../domain/handlers/handle-error";

export class ResetPasswordController {
  constructor(private useCase: ResetPasswordUseCase) {}

  public async execute(event: H3Event): Promise<AppResult> {
    try {
      const request = await readBody(event);

      await this.validations(request);

      await this.useCase.execute(request);

      event.node.res.statusCode = 201;

      return {
        result: {
          message: $st(
            "auth.reset-password.your_password_has_been_successfully_reseted"
          ),
        },
      };
    } catch (error) {
      return handleError(event, error);
    }
  }

  private async validations(request: unknown) {
    const validation = z
      .object({
        token: z.string(),
        password: z.string().min(8).max(64),
      })
      .strict();

    validation.parse(request);
  }
}
