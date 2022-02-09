import { Error } from './error.class';
import { RangeError } from './range-error.class';
import { TypeError } from './type-error.class';
import { ValidationError } from './validation-error.class';
/**
 * The `Errors` object represents the errors of the type, range, type, validation and simply error with multiple identification numbers.
 * It holds properties and use them to define new error or throw it.
 */
export class Errors<Id extends string> {
  //#region public instance accessors.
  /**
   *
   */
  public get define(): {
    error: typeof errors.defineError;
    rangeError: typeof errors.defineRangeError;
    typeError: typeof errors.defineTypeError;
    validationError: typeof errors.defineValidationError;
  } {
    const errors = this;
    return Object.freeze({
      error: <DefineId extends Id>(id: DefineId): Error<DefineId> =>
        errors.defineError(id),
      rangeError: <DefineId extends Id>(
        id: DefineId,
        min?: number,
        max?: number
      ): RangeError<DefineId> => errors.defineRangeError(id, min, max),
      typeError: <DefineId extends Id>(
        id: DefineId,
        type?: string
      ): TypeError<DefineId> => errors.defineTypeError(id, type),
      validationError: <DefineId extends Id>(
        id: DefineId
      ): ValidationError<DefineId> => errors.defineValidationError(id),
    });
  }

  /**
   * The get `accessor` obtains a possible solution to the described problem by returning the `#fix` property of a specified object.
   * @returns The return value is the fix of a `string` type.
   * @angularpackage
   */
  public get fix(): string {
    return this.#fix;
  }

  /**
   * The `get` accessor obtains the maximum range of number type if set, otherwise undefined.
   * @returns The return value is the maximum range of a number type or undefined.
   * @angularpackage
   */
  public get max(): number | undefined {
    return this.#max;
  }

  /**
   * The `get` accessor obtains the minimum range of number type if set, otherwise undefined.
   * @returns The return value is the minimum range of a number type or undefined.
   * @angularpackage
   */
  public get min(): number | undefined {
    return this.#min;
  }

  /**
   * The `get` accessor gets the problem by returning the `#problem` property of a specified object.
   * @returns The return value is the problem of a `string` type.
   * @angularpackage
   */
  public get problem(): string {
    return this.#problem;
  }

  /**
   * The `get` accessor obtains the maximum and maximum range in the form of an object.
   * @returns The return value is an object that consists of the minimum and maximum range.
   * @angularpackage
   */
  public get range(): { min?: number; max?: number } {
    return {
      min: this.#min,
      max: this.#max,
    };
  }

  /**
   * The `get` accessor gets the template of the error message by returning the `#template` property of a specified object.
   * @returns The return value is the template of a `string` type.
   * @angularpackage
   */
  public get template(): string | undefined {
    return this.#template;
  }

  /**
   * 
   */
  public get throw(): {
    error: typeof t.throwError;
    rangeError: typeof t.throwRangeError;
    typeError: typeof t.throwTypeError;
    validationError: typeof t.throwValidationError;
  } {
    const t = this;
    return {
      error: <ThrowId extends Id>(id: ThrowId): void => t.throwError(id),
      rangeError: <ThrowId extends Id>(
        id: ThrowId,
        min?: number,
        max?: number
      ): void => t.throwRangeError(id, min, max),
      typeError: <ThrowId extends Id>(id: ThrowId, type?: string): void =>
        t.throwTypeError(id, type),
      validationError: <ThrowId extends Id>(id: ThrowId): void =>
        t.throwValidationError(id),
    };
  }

  /**
   * The `get` accessor obtains the type of a `string` that causes an error to be thrown(or not thrown) if set, otherwise returns
   * `undefined`.
   * @returns The return value is the type of a `string` type.
   * @angularpackage
   */
  public get type(): string | undefined {
    return this.#type;
  }
  //#endregion public instance accessors.

  //#region private instance properties.
  /**
   * The collection of unique allowed identification numbers of generic type variable `Id`.
   */
  #allowedId?: Set<Id>;

  /**
   * A privately stored possible solution to the described problem of a `string` type.
   */
  #fix = '';

  /**
   * Private property of the maximum range of a `number` type that causes an error to be thrown(or not thrown).
   */
  #max?: number;

  /**
   * Private property of the minimum range of a `number` type that causes an error to be thrown(or not thrown).
   */
  #min?: number;

  /**
   * A privately stored problem of a `string` type.
   */
  #problem = '';

  /**
   * A string-type privately stored template of the error message that contains replaceable required `{fix}`, `{problem}` and optional
   * `{id}`, `{max}`, `{min}`, `{type}` tags.
   */
  #template?: string;

  /**
   * Private string-type property of the type that causes an error to be thrown(or not thrown).
   */
  #type?: string;
  //#endregion private instance properties.

  //#region constructor.
  /**
   *
   * @param problem
   * @param fix
   * @param allowedId
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    allowedId: Id[],
    additional?: { max?: number; min?: number; type?: string },
    template?: string,
  ) {
    Array.isArray(allowedId) && (this.#allowedId = new Set(allowedId));
    this.#fix = fix;
    this.#problem = problem;
    this.#max = additional?.max;
    this.#min = additional?.min;
    this.#template = template;
    this.#type = additional?.type;
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   *
   * @param id
   * @returns
   * @angularpackage
   */
  public defineError<DefineId extends Id>(id: DefineId, template = this.#template): Error<DefineId> {
    return (
      this.isAllowedId(id),
      new Error(this.#problem, this.#fix, id, template)
    );
  }

  /**
   *
   * @param id
   * @returns
   * @angularpackage
   */
  public defineRangeError<DefineId extends Id>(
    id: DefineId,
    min: number | undefined = this.#min,
    max: number | undefined = this.#max,
    template = this.#template
  ): RangeError<DefineId> {
    return (
      this.isAllowedId(id),
      new RangeError(this.#problem, this.#fix, id, min, max, template)
    );
  }

  /**
   *
   * @param id
   * @returns
   * @angularpackage
   */
  public defineTypeError<DefineId extends Id>(
    id: DefineId,
    type: string | undefined = this.#type,
    template = this.#template
  ): TypeError<DefineId> {
    return (
      this.isAllowedId(id),
      new TypeError(this.#problem, this.#fix, id, type, template)
    );
  }

  /**
   *
   * @param id
   * @returns
   * @angularpackage
   */
  public defineValidationError<DefineId extends Id>(
    id: DefineId,
    template = this.#template
  ): ValidationError<DefineId> {
    return (
      this.isAllowedId(id),
      new ValidationError(this.#problem, this.#fix, id, template)
    );
  }

  /**
   * Sets the fix a possible solution to the described problem.
   * @param fix A possible solution to the described problem of a `string` type.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setFix(fix: string): this {
    this.#fix = fix;
    return this;
  }

  public setMax(max?: number): this {
    this.#max = max;
    return this;
  }

  public setMin(min?: number): this {
    this.#min = min;
    return this;
  }

  /**
   * Sets description problem of a validation.
   * @param problem Description of validation problem of a `string` type.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setProblem(problem: string): this {
    this.#problem = problem;
    return this;
  }

  /**
   * Sets the template of validation error message.
   * @param template A message template of `string` type with replaceable `{problem}`, `{fix}` and optional `{id}` tags.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setTemplate(template?: string): this {
    this.#template = template;
    return this;
  }

  /**
   * 
   * @param type 
   * @returns 
   * @angularpackage
   */
  public setType(type?: string): this {
    this.#type = type;
    return this;
  }

  /**
   *
   * @param id
   * @angularpackage
   */
  public throwError<ThrowId extends Id>(
    id: ThrowId,
    template = this.#template
  ): void {
    throw (
      (this.isAllowedId(id), new Error(this.#problem, this.#fix, id, template))
    );
  }

  /**
   *
   * @param id
   * @angularpackage
   */
  public throwRangeError<ThrowId extends Id>(
    id: ThrowId,
    min: number | undefined = this.#min,
    max: number | undefined = this.#max,
    template = this.#template
  ): void {
    throw (
      (this.isAllowedId(id),
      new RangeError(this.#problem, this.#fix, id, min, max, template))
    );
  }

  /**
   *
   * @param id
   * @angularpackage
   */
  public throwTypeError<ThrowId extends Id>(
    id: ThrowId,
    type: string | undefined = this.#type,
    template = this.#template
  ): void {
    throw (
      (this.isAllowedId(id),
      new TypeError(this.#problem, this.#fix, type, id, template))
    );
  }

  /**
   * Throws an error of `ValidationError` with the message built from the stored `fix`, `problem`, and optional `id` on the stored
   * `template`.
   * @param id
   * @angularpackage
   */
  public throwValidationError<ThrowId extends Id>(id: ThrowId, template = this.#template): void {
    throw (
      (this.isAllowedId(id),
      new ValidationError(this.#problem, this.#fix, id, template))
    );
  }
  //#endregion instance public methods.

  //#region instance private methods.
  /**
   *
   * @param id
   * @angularpackage
   */
  private isAllowedId<CheckId extends Id>(id: CheckId): void {
    if (this.#allowedId && this.#allowedId.has(id) === false) {
      throw new RangeError(
        `The provided identification ${id} is not allowed.`,
        `Set allowed id: ${id} in the allowedId parameter of the constructor.`
      );
    }
  }
  //#endregion instance private methods.
}
