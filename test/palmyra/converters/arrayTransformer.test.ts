import { expect, test } from 'vitest';
import { ArrayConsumer, getArrayTransformer } from '../../../src/main';


test('ArrayTransformer, withData', () => {
    const t = getArrayTransformer(new ArrayConsumer())
    const data = [{key:'welcome'}, {key:'world'}]
    const actual = t.transform(data);
    expect(actual).toEqual(data);    
})


test('ArrayTransformer, emptyData', () => {
    const t = getArrayTransformer(new ArrayConsumer())
    const data = []
    const actual = t.transform(data);
    expect(actual).toEqual(data);    
})

test('ArrayTransformer, emptyData', () => {
    const t = getArrayTransformer(new ArrayConsumer())
    const data = undefined;
    const actual = t.transform(data);
    expect(actual).toEqual([]);    
})
