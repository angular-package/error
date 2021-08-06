// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { MessageBuilder } from '../src/message-builder.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(MessageBuilder.name, () => {
  let messageClassBuilder = new MessageBuilder('class');
  let messageFunctionBuilder = new MessageBuilder('function');
  let messageMethodBuilder = new MessageBuilder('method');

  beforeEach(() => (messageClassBuilder = new MessageBuilder('class')));
  beforeEach(() => (messageFunctionBuilder = new MessageBuilder('function')));
  beforeEach(() => (messageMethodBuilder = new MessageBuilder('method')));

  // Basic testing.
  testing
    .it(`defined`, () =>
      toBe
        .defined(MessageBuilder)
        .defined(messageFunctionBuilder)
        .instance(messageFunctionBuilder, MessageBuilder)
    )
    .toBeClass(MessageBuilder);

  testing.it(`build function`, () => {
    messageFunctionBuilder
      .setFunctionName('guardString')
      .setParam('value', 'string')
      .setReturn('boolean');

    toBe.string(messageFunctionBuilder.get);
    expect(messageFunctionBuilder.get).toEqual('guardString(value: string): boolean');
  });

  testing.it(`build class`, () => {
    messageClassBuilder
      .setClassName('Person.prototype.')
      .setMethodName('setPerson')
      .setParam('value?', 'object')
      .setReturn('object');

    toBe.string(messageClassBuilder.get);
    expect(messageClassBuilder.get).toEqual('Person.prototype.setPerson(value?: object): object');
  });

  testing.it(`build method`, () => {
    messageMethodBuilder
      .setMethodName('setPerson')
      .setParam('value', 'string')
      .setReturn('this');

    console.log(messageMethodBuilder.get);
    toBe.string(messageMethodBuilder.get);
    expect(messageMethodBuilder.get).toEqual('setPerson(value: string): this');
  });
});
