/**
 * The `ValidationError` object to throw an error with a solution to the described problem.
 */
export class ValidationError<Id extends string = ''> extends Error {
  /**
   * A template of the error message of `string` type with the replaceable `{problem}`, `{fix}` and optional `{id}` words.
   * By default, it's set to `Problem{id}: {problem} => Fix: {fix}`. It can be set directly or by the `setTemplate()`.
   */
  public static template = `Problem{id}: {problem} => Fix: {fix}`;

  //#region public instance accessors.
  /**
   * The get `accessor` obtains a possible solution to the described problem by returning the `#fix` property of a specified object.
   * @returns The return value is the fix of a `string` type.
   * @angularpackage
   */
  public get fix(): string {
    return this.#fix;
  }

  /**
   * The `get` accessor gets the `id` by returning the `#id` property of a specified object.
   * @returns The return value is the id of the generic type variable `Id`.
   * @angularpackage
   */
  public get id(): Id {
    return this.#id;
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
   * The `get` accessor gets the template by returning the `#template` property of a specified object.
   * @returns The return value is the template of a `string` type.
   * @angularpackage
   */
  public get template(): string {
    return this.#template;
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'ValidationError'` for an instance of
   * `ValidationError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'ValidationError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'ValidationError';
  }
  //#endregion public instance accessors.

  //#region instance public properties.
  /**
   * Error name of a `string` type that is being thrown. By default, it's `ValidationError`.
   */
  public name = ValidationError.name;
  //#endregion instance public properties.

  //#region private instance properties.
  /**
   * A privately stored possible solution to the described problem of a `string` type.
   */
  #fix: string;

  /**
   * A privately stored unique identification to the described problem of generic type variable `Id`.
   */
  #id: Id = '' as Id;

  /**
   * A privately stored validation problem of a `string` type.
   */
  #problem: string;

  /**
   * A string-type privately stored template of the error message that contains replaceable `{fix}`, `{problem}` and optional `{id}` words.
   */
  #template: string;
  //#endregion private instance properties.

  //#region public static methods.
  /**
   * Checks whether the value of any type is an instance of `ValidationError`.
   * @param value The value of any type to check against the `ValidationError` instance.
   * @returns The return value is a `boolean` type indicating whether the given `value` is an instance of `ValidationError`.
   */
  public static isValidationError(value: any): value is ValidationError {
    return typeof value === 'object' && value instanceof this;
  }

  /**
   * The static "tag" method builds from the given `values` the validation error message of a string type on the template.
   * @param templateStringsArray -
   * @param values A rest parameter of expressions in order the `problem`, `fix`, `id` and `template`.
   * @returns The return value is the validation error message of a `string` type created from the expressions given in the `values`.
   * @angularpackage
   */
  public static defineMessage(
    templateStringsArray: TemplateStringsArray,
    ...values: any[]
  ): string {
    let problem: string, fix: string, id: string, template: string;
    [problem, fix, id, template] = values;
    return template
      .replace('{problem}', problem)
      .replace('{fix}', fix)
      .replace('{id}', id);
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates a `ValidationError` instance that represents validation problem with solution and optional unique identification.
   * @param problem Description of the validation problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of validation error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    template = ValidationError.template
  ) {
    super(ValidationError.defineMessage`${problem}${fix}${id}${template}`);
    this.#fix = fix;
    this.#problem = problem;
    this.#id = id as Id;
    this.#template = template;
  }
  //#endregion constructor.

  //#region instance public methods.
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

  /**
   * Sets the unique identification to the described problem.
   * @param id Unique identification of a string type of described problem.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setId<CustomId extends Id>(id: CustomId): this {
    this.#id = id;
    return this;
  }

  /**
   * Sets the validation error message of a `string` type from the provided `message` of the `ErrorMessage` interface.
   * @param message An object of an `ErrorMessage` interface to build the message of a `string` type. The value is checked against
   * the proper `object`.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setMessage<CustomId extends Id>(
    problem: string,
    fix: string,
    id?: CustomId
  ): this {
    this.message = ValidationError.defineMessage`${problem}${fix}${id}${
      this.#template
    }`;
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
   * @param template A message template of `string` type with replaceable `{problem}`, `{fix}` and optional `{id}` words.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setTemplate(template: string): this {
    this.#template = template;
    return this;
  }

  /**
   * Throws an error of `ValidationError` with the message built from the stored `fix`, `problem`, and optional `id` on the stored
   * `template`.
   * @angularpackage
   */
  public throw(): void {
    throw new ValidationError(
      this.#problem,
      this.#fix,
      this.#id,
      this.#template
    );
  }

  /**
   * Updates the message with a stored `fix`, `problem`, and optional `id` on the stored `template`.
   * @angularpackage
   */
  public updateMessage(): void {
    this.message = ValidationError.defineMessage`${this.#problem}${this.#fix}${
      this.#id
    }${this.#template}`;
  }
  //#endregion instance public methods.
}
