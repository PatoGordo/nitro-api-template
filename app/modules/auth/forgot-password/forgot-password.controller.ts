import { H3Event } from "h3";
import { AppResult } from "../../../domain/types/app-result";
import { $st } from "../../../../i18n/$st";
import { ForgotPasswordUseCase } from "./forgot-password.usecase";
import { handleError } from "../../../domain/handlers/handle-error";
import { z } from "zod";

export class ForgotPasswordController {
  constructor(private useCase: ForgotPasswordUseCase) {}

  public async execute(event: H3Event): Promise<AppResult> {
    try {
      const request = await readBody(event);

      await this.validations(request);

      await this.useCase.execute(request);

      return {
        result: {
          message: $st(
            "auth.forgot-password.an_email_with_a_reset_link_was_sent_to_your_mail"
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
        email: z.string().email(),
      })
      .strict();

    validation.parse(request);
  }
}
