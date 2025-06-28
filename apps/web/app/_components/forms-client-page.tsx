"use client";

import { useForms } from "@repo/shared/api/forms/use-forms";
import FormsTabs from "./form-tabs";

export function FormsClientPage() {
  const { data: forms } = useForms();

  return (
    <div className="mx-auto max-w-5xl p-6">
      <FormsTabs forms={forms || []} />
    </div>
  );
}
