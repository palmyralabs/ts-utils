import { BiConsumer, BiFunction, IFunction, TriConsumer } from "./functional";
import { hasDot } from "./StringUtil";

type InputType = string | number | Date;

const getValueByKey: BiFunction<string, any, InputType> = (fieldName: string, data: any): InputType => {
    if (data === undefined || data == null) {
        return undefined;
    }

    var index = fieldName.indexOf('.')
    if (index < 0) {
        return data[fieldName];
    }

    var objKey = fieldName.substring(0, index);
    var fieldKey = fieldName.substring(index + 1);

    return getValueByKey(fieldKey, data[objKey]);
}

const setValueByKey: TriConsumer<string, any, InputType>
    = (fieldName: string, data: any, value: InputType): void => {
        var index = fieldName.indexOf('.')
        if (index < 0) {
            data[fieldName] = value;
            return;
        }

        var objKey = fieldName.substring(0, index);
        var fieldKey = fieldName.substring(index + 1);

        if (data[objKey] === undefined || data[objKey] == null) {
            data[objKey] = {};
        }

        return setValueByKey(fieldKey, data[objKey], value);
    }

const getValueAccessor = (key: string): IFunction<any, any> => {
    return hasDot(key) ? (data: any) => (getValueByKey(key, data)) : (data: any) => (data[key]);
}

const getValueSetter = (key: string): BiConsumer<any, any> => {
    return hasDot(key) ? (data: any, value: any) => (setValueByKey(key, data, value)) : (data: any, value: any) => { data[key] = value };
}

export { getValueByKey, setValueByKey, getValueAccessor, getValueSetter }