interface Converter<TEXT, DATA> {
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
}
interface IRange<T> {
    from?: T;
    to?: T;
}
export type { Converter, IRange };
