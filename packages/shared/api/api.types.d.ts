import {
  GraphQLClientRequestHeaders,
  MaybeLazy,
  RequestConfig,
  RequestDocument,
} from "graphql-request/build/esm/types";

export type GQLParams = {
  accessToken?: string;
  baseUrl?: string;
};

export type RequestHeaders = MaybeLazy<HeadersInit> &
  Record<string, any>;

export type GQLRequestConfig = Omit<RequestConfig, "headers"> & {
  headers?: RequestHeaders;
};

export interface RequestParams {
  document: RequestDocument;
  requestHeaders?: GraphQLClientRequestHeaders;
  url?: string;
  variables?: Record<string, any>;
}
