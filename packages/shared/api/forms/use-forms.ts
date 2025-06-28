"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchForms,
  fetchFormsKey,
  fetchSubmissions,
  fetchSubmissionsKey,
} from "./forms-api";
import Api from "..";

export function useForms() {
  return useQuery({
    queryKey: [fetchFormsKey],
    queryFn: fetchForms,
    retry: false,
  });
}

export function useSubmissions() {
  return useQuery({
    queryKey: [fetchSubmissionsKey],
    queryFn: fetchSubmissions,
    retry: false,
  });
}

interface DynamicOptionConfig {
  dependsOn: string;
  endpoint: string;
  method: "GET" | "POST";
}

export function useDynamicOptions(
  dynamicOptions?: DynamicOptionConfig
) {
  const { control } = useFormContext();
  const dependsValue = useWatch({
    control,
    name: dynamicOptions?.dependsOn || "",
  });

  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (!dynamicOptions || !dependsValue) return;

    const fetchOptions = async () => {
      try {
        const res = await new Api().get<{ states: string[] }>(
          dynamicOptions.endpoint?.slice(
            4,
            dynamicOptions.endpoint.length
          ),
          {
            country: dependsValue,
          }
        );
        setOptions(res.data?.states);
      } catch (err) {
        console.error("Failed to fetch options", err);
      }
    };

    fetchOptions();
  }, [dynamicOptions, dependsValue]);

  return options;
}

export function useSubmitForm() {
  return useMutation({
    mutationFn: async (data: any) => {
      await new Api().post("/insurance/forms/submit", data);
    },
  });
}
