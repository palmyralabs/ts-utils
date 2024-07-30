import { Converter, IRange } from "../types";


class NumberRangeConverter implements Converter<any, IRange<number>> {
    min = 0;
    max = 100

    constructor(min:number, max:number) {
        this.min = min || this.min;
        this.max = max || this.max;
    }

    format(data: IRange<number>): any {
        if (data) {
            return data.from + '...' + data.to;
        }
    };

    parse(text: any): IRange<number> {
        var from: number, to: number;
        if (text && typeof text == 'string') {
            const dts = text.split('...');
            from = this._parseNumber(dts[0]);
            to = this._parseNumber(dts[1]);
        }
        return {from, to};
    };

    _parseNumber(t: string): number {
        if (t)
            return Number.parseInt(t);
    }
}

export { NumberRangeConverter }