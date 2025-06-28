import { z } from "zod";
import { FormField } from "@repo/shared/api/forms/types";

export function makeZodSchema(fields: FormField[]): z.ZodObject<any> {
  let schemaShape: Record<string, any> = {};

  fields.forEach((field) => {
    if (field.type === "group" && field.fields) {
      const groupSchema = makeZodSchema(field.fields);
      schemaShape = { ...schemaShape, ...groupSchema.shape };
    } else {
      let baseSchema: any;

      switch (field.type) {
        case "text":
        case "date":
          baseSchema = z.string();
          if (field.required) {
            baseSchema = baseSchema.nonempty(
              "This field is required"
            );
          }
          if (field.validation?.pattern)
            baseSchema = baseSchema.regex(
              new RegExp(field.validation.pattern)
            );
          break;

        case "number":
          baseSchema = z.number();
          if (field.required) baseSchema = baseSchema;
          if (field.validation?.min !== undefined)
            baseSchema = baseSchema.min(field.validation.min);
          if (field.validation?.max !== undefined)
            baseSchema = baseSchema.max(field.validation.max);
          break;

        case "select":
        case "radio":
          baseSchema = z.string();
          if (field.required) {
            baseSchema = baseSchema
              .min(1)
              .nonempty("This field is required");
          }
          break;

        case "checkbox":
          baseSchema = z.array(z.string());
          if (field.required) {
            baseSchema = baseSchema
              .min(1)
              .nonempty("This field is required");
          }
          break;

        default:
          baseSchema = z.any();
      }

      schemaShape[field.id] = baseSchema;
    }
  });

  return z.object(schemaShape);
}
