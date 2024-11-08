/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListBooksRequest = {
  limit?: number | undefined;
  offset?: number | null | undefined;
};

export type ListBooksResponse = {
  result: components.PaginatedBookResponse;
};

/** @internal */
export const ListBooksRequest$inboundSchema: z.ZodType<
  ListBooksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(10),
  offset: z.nullable(z.number().int().default(0)),
});

/** @internal */
export type ListBooksRequest$Outbound = {
  limit: number;
  offset: number | null;
};

/** @internal */
export const ListBooksRequest$outboundSchema: z.ZodType<
  ListBooksRequest$Outbound,
  z.ZodTypeDef,
  ListBooksRequest
> = z.object({
  limit: z.number().int().default(10),
  offset: z.nullable(z.number().int().default(0)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBooksRequest$ {
  /** @deprecated use `ListBooksRequest$inboundSchema` instead. */
  export const inboundSchema = ListBooksRequest$inboundSchema;
  /** @deprecated use `ListBooksRequest$outboundSchema` instead. */
  export const outboundSchema = ListBooksRequest$outboundSchema;
  /** @deprecated use `ListBooksRequest$Outbound` instead. */
  export type Outbound = ListBooksRequest$Outbound;
}

/** @internal */
export const ListBooksResponse$inboundSchema: z.ZodType<
  ListBooksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.PaginatedBookResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListBooksResponse$Outbound = {
  Result: components.PaginatedBookResponse$Outbound;
};

/** @internal */
export const ListBooksResponse$outboundSchema: z.ZodType<
  ListBooksResponse$Outbound,
  z.ZodTypeDef,
  ListBooksResponse
> = z.object({
  result: components.PaginatedBookResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBooksResponse$ {
  /** @deprecated use `ListBooksResponse$inboundSchema` instead. */
  export const inboundSchema = ListBooksResponse$inboundSchema;
  /** @deprecated use `ListBooksResponse$outboundSchema` instead. */
  export const outboundSchema = ListBooksResponse$outboundSchema;
  /** @deprecated use `ListBooksResponse$Outbound` instead. */
  export type Outbound = ListBooksResponse$Outbound;
}
