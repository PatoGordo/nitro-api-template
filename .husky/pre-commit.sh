#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint-staged && yarn test