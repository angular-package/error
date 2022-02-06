import { CommonError } from './common-error.class';
/**
 * The `Error` object is thrown when a runtime error occurs, but with additional identification and a solution to the described problem.
 */
export class Error<Id extends string> extends CommonError<Id> {
  //#region public instance accessors.
  /**
   * Error name of a `string` type, set to `Error` that is being thrown.
   * @returns The return value is the error instance name of string type.
   * @angularpackage
   */
  public get name(): string {
    return 'Error';
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'Error'` for an instance of `Error`. It can be read
   * by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'Error` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'Error';
  }
  //#endregion public instance accessors.

  //#region public static methods.
  /**
   * Defines the `Error` instance with the given required `problem`, `fix` and optional `id` and `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` tags. By default, the value
   * is picked from the static property `template`.
   * @returns The return value is a new instance of the `Error` with the given required `problem`, `fix` and optional `id` and `template`.
   * @angularpackage
   */
  public static define<Id extends string = ''>(
    problem: string,
    fix: string,
    id?: Id,
    template = Error.template
  ): Error<Id> {
    return new this(problem, fix, id, template);
  }

  /**
   * Checks whether the value of any type is an instance of `Error` of any or the given identification.
   * @param value The value of any type to check against the `Error` instance.
   * @param id Optional identification of generic type variable `Id` that the given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the given `value` is an instance of `Error` of any or the given `id`.
   * @angularpackage
   */
  public static isError<Id extends string>(
    value: any,
    id?: Id
  ): value is Error<Id> {
    return super.isError(value, id);
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates the `Error` instance that represents an error with the described problem and its solution, optionally marked with an explicit
   * identification.
   * @param problem Description of the problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{max}`, `{min}` and
   * `{type}` tags. By default, the value is equal to the static property `template`.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    template = Error.template
  ) {
    super(problem, fix, id, template);
  }
  //#endregion constructor.
}
