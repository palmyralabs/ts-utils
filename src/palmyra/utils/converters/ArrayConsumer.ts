import { DataConsumer } from "./types";

class ArrayConsumer implements DataConsumer<any, any> {
    result = [];

    initialize() { }
    processRow(v: any, idx: number, key?: string) {
        this.result.push(v)
    }
    getResult() {
        return this.result;
    }
}

export { ArrayConsumer }