import { DataConsumer } from "./types";

class ObjectConsumer implements DataConsumer<any, any> {
    result = [];

    initialize() { }
    processRow(v: any, idx: number, key?: string) {
        this.result.push({...v, key})
    }
    getResult() {
        return this.result;
    }
}

export { ObjectConsumer }