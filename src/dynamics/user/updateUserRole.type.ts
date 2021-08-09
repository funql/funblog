import FastestValidator from "https://cdn.pika.dev/fastest-validator@^1.8.0";
import { RUser, userSelectable } from "../../schemas/mod.ts";
/**
 * this is a validator for create user, using fastest validator
 * the result is a boolean
 * this validate the input Object,
 * has two parts {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */

const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        strict: true,
        props: {
          _id: { type: "string" },
          role: { type: "enum", values: ["Admin", "Normal", "Editor"] },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(1),
      },
    },
  },
};

export const checkUpdateUserRole = v.compile(schema);

export interface updateUserRoleDetails {
  set: {
    _id: string;
    role: string;
  };
  get: RUser;
}
