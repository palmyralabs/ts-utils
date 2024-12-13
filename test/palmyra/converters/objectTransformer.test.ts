import { expect, test } from 'vitest';
import { getObjectTransformer, ObjectConsumer } from '../../../src/main';


test('ObjectTransformer, simple', () => {
    const t = getObjectTransformer(new ObjectConsumer())
    const data = { first: { ykey: 'welcome' }, second: { ykey: 'world' } };
    const expected = [{ key: 'first', ykey: 'welcome' }, { key: 'second', ykey: 'world' }];
    const actual = t.transform(data);
    expect(actual).toEqual(expected);
})


test('ObjectTransformer, emptyData', () => {
    const t = getObjectTransformer(new ObjectConsumer())
    const data = {};
    const expected = [];
    const actual = t.transform(data);
    expect(actual).toEqual(expected);
})

test('ObjectTransformer, undefined', () => {
    const t = getObjectTransformer(new ObjectConsumer())
    const data = undefined;
    const expected = [];
    const actual = t.transform(data);
    expect(actual).toEqual(expected);
})