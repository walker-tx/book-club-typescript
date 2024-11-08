/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type AddBookToUserLibraryRequestBody = {
  bookId: number;
};

export type AddBookToUserLibraryRequest = {
  userId: number;
  requestBody: AddBookToUserLibraryRequestBody;
};

/** @internal */
export const AddBookToUserLibraryRequestBody$inboundSchema: z.ZodType<
  AddBookToUserLibraryRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  bookId: z.number(),
});

/** @internal */
export type AddBookToUserLibraryRequestBody$Outbound = {
  bookId: number;
};

/** @internal */
export const AddBookToUserLibraryRequestBody$outboundSchema: z.ZodType<
  AddBookToUserLibraryRequestBody$Outbound,
  z.ZodTypeDef,
  AddBookToUserLibraryRequestBody
> = z.object({
  bookId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBookToUserLibraryRequestBody$ {
  /** @deprecated use `AddBookToUserLibraryRequestBody$inboundSchema` instead. */
  export const inboundSchema = AddBookToUserLibraryRequestBody$inboundSchema;
  /** @deprecated use `AddBookToUserLibraryRequestBody$outboundSchema` instead. */
  export const outboundSchema = AddBookToUserLibraryRequestBody$outboundSchema;
  /** @deprecated use `AddBookToUserLibraryRequestBody$Outbound` instead. */
  export type Outbound = AddBookToUserLibraryRequestBody$Outbound;
}

/** @internal */
export const AddBookToUserLibraryRequest$inboundSchema: z.ZodType<
  AddBookToUserLibraryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  userId: z.number(),
  RequestBody: z.lazy(() => AddBookToUserLibraryRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AddBookToUserLibraryRequest$Outbound = {
  userId: number;
  RequestBody: AddBookToUserLibraryRequestBody$Outbound;
};

/** @internal */
export const AddBookToUserLibraryRequest$outboundSchema: z.ZodType<
  AddBookToUserLibraryRequest$Outbound,
  z.ZodTypeDef,
  AddBookToUserLibraryRequest
> = z.object({
  userId: z.number(),
  requestBody: z.lazy(() => AddBookToUserLibraryRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBookToUserLibraryRequest$ {
  /** @deprecated use `AddBookToUserLibraryRequest$inboundSchema` instead. */
  export const inboundSchema = AddBookToUserLibraryRequest$inboundSchema;
  /** @deprecated use `AddBookToUserLibraryRequest$outboundSchema` instead. */
  export const outboundSchema = AddBookToUserLibraryRequest$outboundSchema;
  /** @deprecated use `AddBookToUserLibraryRequest$Outbound` instead. */
  export type Outbound = AddBookToUserLibraryRequest$Outbound;
}
