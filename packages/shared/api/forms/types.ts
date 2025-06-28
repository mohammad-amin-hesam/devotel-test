export type FieldType =
  | "text"
  | "number"
  | "date"
  | "select"
  | "radio"
  | "checkbox"
  | "group";

export interface FieldVisibility {
  dependsOn: string;
  condition: "equals";
  value: string;
}

export interface FieldValidation {
  min?: number;
  max?: number;
  pattern?: string;
}

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[];
  visibility?: FieldVisibility;
  validation?: FieldValidation;
  dynamicOptions?: {
    dependsOn: string;
    endpoint: string;
    method: "GET" | "POST";
  };
  fields?: FormField[];
}

export interface FormResponse {
  formId: string;
  title: string;
  fields: FormField[];
}

export type FormResponseList = FormResponse[];

export interface SubmissionRow {
  id: string;
  "Full Name": string;
  Age: number;
  Gender: string;
  "Insurance Type": string;
  City: string;
}
export interface SubmissionsResponse {
  columns: string[];
  data: SubmissionRow[];
}
