import { expect, test } from 'vitest';
import { getValueAccessor } from '../../../src/main';


test('getValueAccessor_ simple key_found', () => {
    const accessor = getValueAccessor('key');
    const actual = accessor({ key: 'hello world' });
    const expected = 'hello world'
    expect(actual).toEqual(expected);
})

test('getValueAccessor_ simple key_not_found', () => {
    const accessor = getValueAccessor('keys');
    const actual = accessor({ key: 'hello world' });
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ simple key_emptydata', () => {
    const accessor = getValueAccessor('key');
    const actual = accessor({});
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ simple key_nulldata', () => {
    const accessor = getValueAccessor('key');
    const actual = accessor(null);
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ simple key_undefined_data', () => {
    const accessor = getValueAccessor('key');
    const actual = accessor(null);
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ multi level key_found', () => {
    const accessor = getValueAccessor('key.parent');
    const actual = accessor({ key: { parent: 'hello world' } });
    const expected = 'hello world'
    expect(actual).toEqual(expected);
})

test('getValueAccessor_ multi level key_not_found_00', () => {
    const accessor = getValueAccessor('keys.parent');
    const actual = accessor({ key: { parent: 'hello world' } });
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ multi level key_not_found_01', () => {
    const accessor = getValueAccessor('key.child');
    const actual = accessor({ key: { parent: 'hello world' } });    
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ multi level null data', () => {
    const accessor = getValueAccessor('key.parent');
    const actual = accessor(null);
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ multi level undefined data', () => {
    const accessor = getValueAccessor('key.parent');
    const actual = accessor(undefined);
    expect(actual).toBeUndefined();
})

test('getValueAccessor_ multi level empty data', () => {
    const accessor = getValueAccessor('key.parent');
    const actual = accessor({});
    expect(actual).toBeUndefined();
})