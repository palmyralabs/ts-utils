import { ArrayData, DataConsumer, DataTransformer } from "./types";

class ArrayTransformer<I, R> implements DataTransformer<ArrayData<I>, R> {
    consumer: DataConsumer<I, R>;

    constructor(consumer: DataConsumer<I, R>) {
        this.consumer = consumer;
    }

    transform(t: I[]) {
        this.consumer.initialize();
        if (t) {
            t.forEach((data: I, index: number) => {
                this.consumer.processRow(data, index);
            });
        }
        return this.consumer.getResult();
    };
}

function getArrayTransformer<I, R>(c: DataConsumer<I, R>) {
    return new ArrayTransformer<I, R>(c);
}

export { getArrayTransformer }