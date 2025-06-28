import { Suspense } from "react";
import { SubmissionsClientPage } from "../_components/submissions-client-page";

export default function SubmissionsPage() {
  return (
    <Suspense>
      <SubmissionsClientPage />
    </Suspense>
  );
}
