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
      .it(`ValidationError.prototype.fix`, () => {
        expect(validationError.fix).toEqual(fix);
      })

      /**
       * ValidationError.prototype.id
       */
      .it(`ValidationError.prototype.id`, () => {
        expect(validationError.id).toEqual(id);
      })

      /**
       * ValidationError.prototype.problem
       */
      .it(`ValidationError.prototype.problem`, () => {
        expect(validationError.problem).toEqual(problem);
      })

      /**
       * ValidationError.prototype.template
       */
      .it(`ValidationError.prototype.template`, () => {
        expect(validationError.template).toEqual(template);
      })
      // .it(`[Symbol.toStringTag]`, () => {});
    })

    /**
     * Static methods.
     */
    .describe(`Static methods`, () => {
      testing
      /**
       * isValidationError()
       */
      .it(`ValidationError.isValidationError()`, () => {
        expect(validationError.id).toEqual(id);
      })

      /**
       * defineMessage()
       */
      .it(`ValidationError.defineMessage`, () => {
        errorMessage = ValidationError.defineMessage`${'problem'}${'fix'}${'id'}${'{problem} {fix} {id}'}`;
        expect(errorMessage).toEqual('problem fix id');
      });
    })

    /**
     * Instance methods.
     */
    .describe(`Instance methods`, () => {
      testing
      /**
       * ValidationError.prototype.setFix()
       */
      .it(`ValidationError.prototype.setFix()`, () => {
        validationError.setFix('my new fix');
        expect(validationError.fix).toEqual('my new fix');
      })

      /**
       * ValidationError.prototype.setId()
       */
      .it(`ValidationError.prototype.setId()`, () => {
        validationError.setId('my new id');
        expect(validationError.id).toEqual('my new id');
      })

      // .it(`ValidationError.prototype.setMessage()`, () => {
      //   validationError.setMessage('my new id');
      //   expect(validationError.id).toEqual('my new id');
      // })

      /**
       * ValidationError.prototype.setProblem()
       */
      .it(`ValidationError.prototype.setProblem()`, () => {
        validationError.setProblem('my new problem');
        expect(validationError.problem).toEqual('my new problem');
      })

      /**
       * ValidationError.prototype.setTemplate()
       */
      .it(`ValidationError.prototype.setTemplate()`, () => {
        validationError.setTemplate('my new template');
        expect(validationError.template).toEqual('my new template');
      })

      /**
       * ValidationError.prototype.throw()
       */
      .it(`ValidationError.prototype.throw()`, () => {
        try {
          validationError.throw();
        } catch (e: any) {
          toBe.instance(e, ValidationError);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
          expect(e.template).toEqual(template);
          expect(e.message).toEqual(ValidationError.defineMessage`${problem}${fix}${id}${template}`);
        }
        try {
          validationError
            .setFix('new FIX')
            .setId('new ID')
            .setProblem('new PROBLEM')
            .setTemplate('{problem}{fix}{id}');
          validationError.throw();
        } catch (e: any) {
          toBe.instance(e, ValidationError);
          expect(e.fix).toEqual('new FIX');
          expect(e.id).toEqual('new ID');
          expect(e.problem).toEqual('new PROBLEM');
          expect(e.template).toEqual('{problem}{fix}{id}');
          expect(e.message).toEqual(ValidationError.defineMessage`${'new PROBLEM'}${'new FIX'}${'new ID'}${'{problem}{fix}{id}'}`);
        }
      })

      /**
       * ValidationError.prototype.updateMessage()
       */
      .it(`ValidationError.prototype.updateMessage()`, () => {
        validationError
        .setFix('new FIX')
        .setId('new ID')
        .setProblem('new PROBLEM')
        .setTemplate('{problem}{fix}{id}')
        .updateMessage();
        expect(validationError.fix).toEqual('new FIX');
        expect(validationError.id).toEqual('new ID');
        expect(validationError.problem).toEqual('new PROBLEM');
        expect(validationError.template).toEqual('{problem}{fix}{id}');
        expect(validationError.message).toEqual(ValidationError.defineMessage`${'new PROBLEM'}${'new FIX'}${'new ID'}${'{problem}{fix}{id}'}`);
      });
    });
});
