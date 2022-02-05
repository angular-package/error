// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { typeOf } from '@angular-package/type';
// Class.
import { TypeError } from '../lib/type-error.class';

const et = new TypeError('problem', 'fix', 'string');

/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] TypeError', () => {
  let fix: string;
  let id: string;
  let problem: string;
  let template: string;
  let expectedType: string;
  let typeError: TypeError<string>;

  // Prepare the values.
  fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  id = '427';
  problem = 'The value must be a string type.';
  template = `Problem(VE{id}): {problem} {type}\nFix: {fix}`;
  expectedType = 'Symbol';

  beforeEach(() => {
    // Prepare the values.
    fix = 'Provide string type value. Read more: https://duckduckgo.com/';
    id = '427';
    problem = 'The value must be a string type.';
    template = `Problem(VE{id}): {problem} {type}\nFix: {fix}`;
    expectedType = 'Symbol';
    typeError = new TypeError(problem, fix, expectedType, id, template);
  });

  testing

    /**
     * Static properties.
     */
    .describe(`Static properties`, () => {
      testing
        .it(`TypeError.template`, () => {
          expect(TypeError.template).toEqual(`Problem{id}: {problem} must be of {type} => Fix: {fix}`);
          TypeError.template = `{problem} => Fix: {fix} of {id}`;
          expect(TypeError.template).toEqual(`{problem} => Fix: {fix} of {id}`);
          TypeError.template = `Problem{id}: {problem} must be of {type} => Fix: {fix}`;
      });
    })

    /**
     * Instance accessors.
     */
    .describe(`Instance accessors`, () => {
      testing

        /**
         * TypeError.prototype.expectedType
         */
         .it(`TypeError.prototype.expectedType`, () => expect(typeError.expectedType).toEqual(expectedType))

        /**
         * TypeError.prototype.fix
         */
        .it(`TypeError.prototype.fix`, () => expect(typeError.fix).toEqual(fix))

        /**
         * TypeError.prototype.id
         */
        .it(`TypeError.prototype.id`, () => expect(typeError.id).toEqual(id))

        /**
         * TypeError.prototype.name
         */
        .it(`TypeError.prototype.name`, () => expect(typeError.name).toEqual('TypeError'))

        /**
         * TypeError.prototype.problem
         */
        .it(`TypeError.prototype.problem`, () => expect(typeError.problem).toEqual(problem))

        /**
         * TypeError.prototype.template
         */
        .it(`TypeError.prototype.template`, () => expect(typeError.template).toEqual(template))

        /**
         * [Symbol.toStringTag]
         */
        .it(`[Symbol.toStringTag]`, () => {
          expect(typeOf(typeError)).toEqual('typeerror');
          expect(Object.prototype.toString.call(typeError)).toEqual('[object TypeError]');
        });
    })

    /**
     * Static methods.
     */
    .describe(`Static methods`, () => {
      testing

        /**
         * TypeError.define()
         */
        .it(`TypeError.define()`, () => {
          const e = TypeError.define(problem, fix, expectedType, id, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem} ${expectedType}\nFix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.expectedType).toEqual(expectedType);
          expect(e.id).toEqual(id);
          expect(e.template).toEqual(template);
        })

        /**
         * TypeError.isTypeError()
         */
        .it(`TypeError.isTypeError()`, () => {
          expect(TypeError.isTypeError(typeError)).toBeTrue();
          expect(TypeError.isTypeError(typeError, expectedType, id)).toBeTrue();
        });
    })

    /**
     * Constructor.
     */
    .describe(`constructor()`, () => {
      testing
        .it(`(problem, fix)`, () => {
          const e = new TypeError(problem, fix);
          expect(e.message).toEqual(`Problem${''}: ${problem} must be of ${''} => Fix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toBeUndefined();
          expect(e.expectedType).toBeUndefined();
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, type)`, () => {
          const e = new TypeError(problem, fix, expectedType);
          expect(e.message).toEqual(`Problem${''}: ${problem} must be of ${expectedType} => Fix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toBeUndefined();
          expect(e.expectedType).toEqual(expectedType);
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, undefined, id)`, () => {
          const e = new TypeError(problem, fix, undefined, id);
          expect(e.message).toEqual(`Problem${id}: ${problem} must be of ${''} => Fix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.expectedType).toBeUndefined();
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, type, id)`, () => {
          const e = new TypeError(problem, fix, expectedType, id);
          expect(e.message).toEqual(`Problem${id}: ${problem} must be of ${expectedType} => Fix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.expectedType).toEqual(expectedType);
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, type, id, template)`, () => {
          const e = new TypeError(problem, fix, expectedType, id, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem} ${expectedType}\nFix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.expectedType).toEqual(expectedType);
          expect(e.template).toEqual(template);
        });
    });
});
