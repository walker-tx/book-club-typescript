/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bookCreate } from "../funcs/bookCreate.js";
import { bookDelete } from "../funcs/bookDelete.js";
import { bookGet } from "../funcs/bookGet.js";
import { bookList } from "../funcs/bookList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Book extends ClientSDK {
  /**
   * List all books
   */
  async list(
    security: operations.ListBooksSecurity,
    request: operations.ListBooksRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListBooksResponse, { offset: number }>> {
    return unwrapResultIterator(bookList(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Create a book
   */
  async create(
    security: operations.CreateBookSecurity,
    request: operations.CreateBookRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(bookCreate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get a book by ID
   */
  async get(
    security: operations.GetBookSecurity,
    request: operations.GetBookRequest,
    options?: RequestOptions,
  ): Promise<components.Book> {
    return unwrapAsync(bookGet(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Delete a book
   */
  async delete(
    security: operations.DeleteBookSecurity,
    request: operations.DeleteBookRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(bookDelete(
      this,
      security,
      request,
      options,
    ));
  }
}
