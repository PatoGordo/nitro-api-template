import { H3Event } from "h3";
import { $st } from "../../../i18n/$st";
import { AppResult } from "../../domain/types/app-result";
import { ensureAuthenticated } from "../../middlewares/ensure-authenticated.middleware";
import { handleError } from "../../domain/handlers/handle-error";

export class ProtectedController {
  async execute(event: H3Event): Promise<AppResult> {
    try {
      await ensureAuthenticated(event, [1, 2]);

      return {
        result: {
          message: $st("protected.this_is_a_protected_data_from_the_server"),
        },
      };
    } catch (error) {
      return handleError(event, error);
    }
  }
}
