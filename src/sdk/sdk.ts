/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Auth } from "./auth.js";
import { Book } from "./book.js";
import { Library } from "./library.js";
import { User } from "./user.js";

export class BookClub extends ClientSDK {
  private _book?: Book;
  get book(): Book {
    return (this._book ??= new Book(this._options));
  }

  private _auth?: Auth;
  get auth(): Auth {
    return (this._auth ??= new Auth(this._options));
  }

  private _user?: User;
  get user(): User {
    return (this._user ??= new User(this._options));
  }

  private _library?: Library;
  get library(): Library {
    return (this._library ??= new Library(this._options));
  }
}
