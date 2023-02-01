import { AppResult } from "../types/app-result";
import { H3Event } from "h3";
import { ZodError } from "zod";
import { $st } from "../../../i18n/$st";

// Handle all errors of the application
export function handleError(
  event: H3Event,
  error: Error | unknown,
  status = 400
) {
  const err = error as AppResult & ZodError;

  event.node.res.statusCode = err.cause ? err.cause : status;

  // Check if error is a ZodError
  if (err?.issues?.length) {
    const formatedErr = err.format();

    const errorText = Object.keys(formatedErr)
      .map((key) =>
        key === "_errors" && formatedErr[key]?.length
          ? `${$st("alerts.untracked_error")}: ${formatedErr._errors[0]}`
          : key !== "_errors" &&
            `${$st("alerts.error_in")} '${key}': ${formatedErr[key]._errors}`
      )
      .filter((i) => i)
      .join("\n");

    return {
      message: errorText,
    };
  }

  return {
    message: err.message,
  };
}
