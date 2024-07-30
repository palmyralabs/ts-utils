import { Converter } from "../types";

class NoopConverter implements Converter<any, any> {

    format = (data: any): any => {
        return data
    };

    parse = (text: any): any => {
        return text;
    };
}

const noopConverter = new NoopConverter();

export { noopConverter }