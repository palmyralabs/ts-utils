import { Converter, IRange } from '../types';

declare class DateTimeRangeConverter implements Converter<any, IRange<Date>> {
    pattern: string;
    constructor(pattern: string);
    format(data: IRange<Date>): any;
    _formatDate(d: Date): string;
    parse(text: any): IRange<Date>;
    _parseDate(t: string): Date;
}
export { DateTimeRangeConverter };
