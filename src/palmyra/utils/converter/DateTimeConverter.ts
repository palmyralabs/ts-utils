import dayjs from "dayjs";

import { Converter } from "../types";


class DateTimeConverter implements Converter<string, Date> {
    pattern: string

    constructor(pattern: string) {

    }

    format(data: Date): string {
        if (data) {
            return dayjs(data)
                .format(this.pattern)
        }        
    }

    parse(text: any): Date {
        if (text) {
            if (text instanceof Date)
                return text;

            const timestamp = Number(text);
            if (!isNaN(timestamp) && timestamp.toString() === text.toString()) {
                return new Date(timestamp);
            }

            return dayjs(text, this.pattern).toDate()
        }
        return text;
    };
}

export { DateTimeConverter }
