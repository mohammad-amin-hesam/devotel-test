import { Metadata } from "next";
import { FormsClientPage } from "./_components/forms-client-page";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import {
  fetchFormsKey,
  fetchForms,
} from "@repo/shared/api/forms/forms-api";

export const metadata: Metadata = {
  title: "Devotel | Dynamic forms",
  description: "a page to fetch and show a dynamic form",
};

export default async function Page() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: [fetchFormsKey],
      queryFn: fetchForms,
    });
  } catch (err) {}

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FormsClientPage />
    </HydrationBoundary>
  );
}
