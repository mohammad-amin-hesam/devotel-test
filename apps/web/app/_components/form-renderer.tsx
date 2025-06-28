import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./form-field";
import { Button } from "@repo/shared/components/ui/button";
import { FormResponse } from "@repo/shared/api/forms/types";
import { z } from "zod";
import { Form } from "@repo/shared/components/ui/form";
import { useSubmitForm } from "@repo/shared/api/forms/use-forms";

interface FormRendererProps {
  schema: z.ZodType<any>;
  formDefinition: FormResponse;
}

export function FormRenderer({
  schema,
  formDefinition,
}: FormRendererProps) {
  const { mutate: submitForm, isPending } = useSubmitForm();
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit = (data: any) => {
    submitForm(
      {
        ...data,
        insurance_type: formDefinition.title,
      },
      {
        onSuccess: () => {
          methods.reset();
        },
      }
    );
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        {formDefinition?.fields?.map((field) => {
          return <FormField key={field.id} field={field} />;
        })}
        <div className="flex items-center justify-end">
          <Button
            type="submit"
            loading={isPending}
            className="w-full lg:w-auto"
          >
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
}
