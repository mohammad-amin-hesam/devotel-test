import Api from "..";
import { FormResponseList, SubmissionsResponse } from "./types";

export const fetchFormsKey = "fetch-forms";
export const fetchSubmissionsKey = "fetch-submissions";

export async function fetchForms(): Promise<FormResponseList> {
  const api = new Api();

  return (await api.get<FormResponseList>("/insurance/forms")).data;
}

export async function fetchSubmissions(): Promise<SubmissionsResponse> {
  const api = new Api();

  return (
    await api.get<SubmissionsResponse>("/insurance/forms/submissions")
  ).data;
}
