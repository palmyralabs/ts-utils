import { Converter, IRange } from '../types';
declare class NumberRangeConverter implements Converter<any, IRange<number>> {
    min: number;
    max: number;
    constructor(min: number, max: number);
    format(data: IRange<number>): any;
    parse(text: any): IRange<number>;
    _parseNumber(t: string): number;
}
export { NumberRangeConverter };
