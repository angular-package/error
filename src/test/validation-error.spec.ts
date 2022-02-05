// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { ValidationError } from '../lib/validation-error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] ValidationError', () => {
  let errorMessage: string;
  let fix: string;
  let id: string;
  let problem: string;
  let template: string;
  let value: any;
  let validationError: ValidationError<string>;

  // Prepare the values.
  fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  id = '427';
  problem = 'The value must be a string type.';
  template = `Problem(VE{id}): {problem}\nFix: {fix}`;
  value = Symbol(123);

  beforeEach(() => {
    // Prepare the values.
    fix = 'Provide string type value. Read more: https://duckduckgo.com/';
    id = '427';
    problem = 'The value must be a string type.';
    template = `Problem(VE{id}): {problem}\nFix: {fix}`;
    value = Symbol(123);
    validationError = new ValidationError(problem, fix, id, template);
  });

  testing

    /**
     * Accessors.
     */
    .describe(`accessors`, () => {
      testing

        /**
         * ValidationError.prototype.fix
         */
        .it(`ValidationError.prototype.fix`, () => expect(validationError.fix).toEqual(fix))

        /**
         * ValidationError.prototype.id
         */
        .it(`ValidationError.prototype.id`, () => expect(validationError.id).toEqual(id))

        /**
         * ValidationError.prototype.problem
         */
        .it(`ValidationError.prototype.problem`, () => expect(validationError.problem).toEqual(problem))

        /**
         * ValidationError.prototype.template
         */
        .it(`ValidationError.prototype.template`, () => expect(validationError.template).toEqual(template));
      // .it(`[Symbol.toStringTag]`, () => {});
    })

    /**
     * Static methods.
     */
    .describe(`Static methods`, () => {
      testing
        /**
         * ValidationError.define()
         */
        .it(`ValidationError.define()`, () => {
          const e = ValidationError.define(problem, fix, id, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem}\nFix: ${fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
        })

        /**
         * ValidationError.isValidationError()
         */
        .it(`ValidationError.isValidationError()`, () => {
          expect(validationError.id).toEqual(id);
        });
    })

    /**
     * Constructor.
     */
    .describe(`constructor()`, () => {
      testing
        .it(`(problem, fix, id)`, () => {
          const e = new ValidationError(problem, fix, id);
          expect(e.message).toEqual(`Problem${id}: ${e.problem} => Fix: ${e.fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
        })
        .it(`(problem, fix, id, template)`, () => {
          const e = new ValidationError(problem, fix, id, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem}\nFix: ${fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
        })
        .it(`(problem, fix)`, () => {
          const e = new ValidationError(problem, fix);
          expect(e.message).toEqual(`Problem: ${e.problem} => Fix: ${e.fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
        });
    });
});
