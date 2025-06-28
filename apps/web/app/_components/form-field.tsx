import { useFormContext, useWatch } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField as ShadcnFormField,
} from "@repo/shared/components/ui/form";
import { Input } from "@repo/shared/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@repo/shared/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@repo/shared/components/ui/radio-group";
import { Checkbox } from "@repo/shared/components/ui/checkbox";
import { Label } from "@repo/shared/components/ui/label";
import { FormField as FormFieldType } from "@repo/shared/api/forms/types";
import { useDynamicOptions } from "@repo/shared/api/forms/use-forms";

interface FormFieldProps {
  field: FormFieldType;
}

export function FormField({ field }: FormFieldProps) {
  const { control, setValue } = useFormContext();
  const watchValue = useWatch({
    control,
    name: field.visibility?.dependsOn || "",
  });
  const dynamicOptions = useDynamicOptions(field.dynamicOptions);
  const finalOptions = field.dynamicOptions
    ? dynamicOptions
    : field.options;

  if (field.visibility && watchValue !== field.visibility.value)
    return null;

  switch (field.type) {
    case "text":
    case "date":
    case "number":
      return (
        <ShadcnFormField
          control={control}
          name={field.id}
          render={({ field: rhfField }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input
                  {...rhfField}
                  type={field.type}
                  value={rhfField.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "select":
      return (
        <ShadcnFormField
          control={control}
          name={field.id}
          render={({ field: rhfField }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Select
                  value={rhfField.value}
                  onValueChange={rhfField.onChange}
                  disabled={!finalOptions?.length}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a value" />
                  </SelectTrigger>
                  <SelectContent>
                    {finalOptions?.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "radio":
      return (
        <ShadcnFormField
          control={control}
          name={field.id}
          render={({ field: rhfField }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <RadioGroup
                  value={rhfField.value}
                  onValueChange={rhfField.onChange}
                >
                  {field.options?.map((opt) => (
                    <div
                      key={opt}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={opt}
                        id={`${field.id}-${opt}`}
                      />
                      <Label htmlFor={`${field.id}-${opt}`}>
                        {opt}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "checkbox":
      return (
        <FormItem>
          <FormLabel>{field.label}</FormLabel>
          {field.options?.map((opt) => (
            <ShadcnFormField
              key={opt}
              control={control}
              name={field.id}
              render={({ field: rhfField }) => {
                const current: string[] = rhfField.value || [];
                const isChecked = current.includes(opt);
                return (
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...current, opt]
                            : current.filter((item) => item !== opt);
                          setValue(field.id, newValue);
                        }}
                      />
                      <Label>{opt}</Label>
                    </div>
                  </FormControl>
                );
              }}
            />
          ))}
        </FormItem>
      );

    case "group":
      return (
        <div className="space-y-4 rounded-xl border p-4">
          <h4 className="font-semibold">{field.label}</h4>
          {field.fields?.map((subField) => {
            return <FormField key={subField.id} field={subField} />;
          })}
        </div>
      );

    default:
      return null;
  }
}
