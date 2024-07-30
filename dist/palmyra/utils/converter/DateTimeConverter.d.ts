import { Converter } from '../types';

declare class DateTimeConverter implements Converter<string, Date> {
    pattern: string;
    constructor(pattern: string);
    format(data: Date): string;
    parse(text: any): Date;
}
export { DateTimeConverter };
