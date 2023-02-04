import jwt, { JwtPayload } from "jsonwebtoken";
import { H3Event } from "h3";
import { $st } from "../../i18n/$st";
import { prismaClient } from "../database/db-client";
import { User } from "../domain/entities/User";

export async function ensureAuthenticated(
  event: H3Event,
  allowedRoles: number[] = []
): Promise<{
  user?: User;
  error?: object;
  isAdminOrEditor: () => boolean;
  isAdmin: () => boolean;
  isEditor: () => boolean;
  isUser: () => boolean;
  roleIn: (roles: number[]) => boolean;
}> {
  const tokenHeader = event.node.req.headers.authorization;

  if (!tokenHeader) {
    throw new Error(
      $st("ensure-authenticated.you_must_to_be_loggedin_to_make_this_action"),
      {
        cause: 401,
      }
    );
  }

  const token = tokenHeader.split("Bearer ")[1];

  if (!token) {
    throw new Error(
      $st("ensure-authenticated.you_must_to_be_loggedin_to_make_this_action"),
      {
        cause: 401,
      }
    );
  }

  const isSignedIn = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!isSignedIn) {
    throw new Error(
      $st("ensure-authenticated.you_must_to_be_loggedin_to_make_this_action"),
      {
        cause: 401,
      }
    );
  }

  const id = (isSignedIn as JwtPayload).id;

  const user = await prismaClient.user.findFirst({
    where: {
      id,
      status: {
        notIn: [0, 2],
      },
    },
  });

  if (!user) {
    throw new Error(
      $st("ensure-authenticated.probabily_your_user_has_been_deleted"),
      {
        cause: 401,
      }
    );
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    throw new Error(
      $st("ensure-authenticated.you_are_not_allowed_to_do_this_actions"),
      {
        cause: 401,
      }
    );
  }

  function isAdminOrEditor() {
    return [1, 2].includes(user?.role || 3);
  }

  function isAdmin() {
    return [1].includes(user?.role || 3);
  }

  function isEditor() {
    return [2].includes(user?.role || 3);
  }

  function isUser() {
    return [3].includes(user?.role || 3);
  }

  function roleIn(roles: number[]) {
    return roles.includes(user?.role || 3) || false;
  }

  return { user, isAdminOrEditor, isAdmin, isEditor, isUser, roleIn };
}
