/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LoginRequestBody = {
  email: string;
  password: string;
};

/**
 * User logged in
 */
export type LoginResponseBody = {
  token: string;
};

/** @internal */
export const LoginRequestBody$inboundSchema: z.ZodType<
  LoginRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  password: z.string(),
});

/** @internal */
export type LoginRequestBody$Outbound = {
  email: string;
  password: string;
};

/** @internal */
export const LoginRequestBody$outboundSchema: z.ZodType<
  LoginRequestBody$Outbound,
  z.ZodTypeDef,
  LoginRequestBody
> = z.object({
  email: z.string(),
  password: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginRequestBody$ {
  /** @deprecated use `LoginRequestBody$inboundSchema` instead. */
  export const inboundSchema = LoginRequestBody$inboundSchema;
  /** @deprecated use `LoginRequestBody$outboundSchema` instead. */
  export const outboundSchema = LoginRequestBody$outboundSchema;
  /** @deprecated use `LoginRequestBody$Outbound` instead. */
  export type Outbound = LoginRequestBody$Outbound;
}

/** @internal */
export const LoginResponseBody$inboundSchema: z.ZodType<
  LoginResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
});

/** @internal */
export type LoginResponseBody$Outbound = {
  token: string;
};

/** @internal */
export const LoginResponseBody$outboundSchema: z.ZodType<
  LoginResponseBody$Outbound,
  z.ZodTypeDef,
  LoginResponseBody
> = z.object({
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginResponseBody$ {
  /** @deprecated use `LoginResponseBody$inboundSchema` instead. */
  export const inboundSchema = LoginResponseBody$inboundSchema;
  /** @deprecated use `LoginResponseBody$outboundSchema` instead. */
  export const outboundSchema = LoginResponseBody$outboundSchema;
  /** @deprecated use `LoginResponseBody$Outbound` instead. */
  export type Outbound = LoginResponseBody$Outbound;
}
