import { BiConsumer, BiFunction, IFunction, TriConsumer } from './functional';

type InputType = string | number | Date;
declare const getValueByKey: BiFunction<string, any, InputType>;
declare const setValueByKey: TriConsumer<string, any, InputType>;
declare const getValueAccessor: (key: string) => IFunction<any, any>;
declare const getValueSetter: (key: string) => BiConsumer<any, any>;
export { getValueByKey, setValueByKey, getValueAccessor, getValueSetter };
