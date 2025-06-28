"use client";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function serialize(obj: Record<string, any>) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && !!obj[p]) {
      str.push(
        encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])
      );
    }
  return str.join("&");
}

export const buildQueryString = (obj: any) => {
  const queryString = Object.keys(obj)
    .filter(
      (key) =>
        obj[key] !== "" && obj[key] !== undefined && obj[key] !== null
    )
    .map(
      (key: string) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
    )
    .join("&");

  return queryString;
};

function useGetAllSearchParams() {
  const searchParams = useSearchParams();
  const params: { [anyProp: string]: string } = {};

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return { allSearchParams: params, createQueryString, searchParams };
}

export default useGetAllSearchParams;
