import { DataConsumer, DataTransformer, KeyedData } from "./types";

class ObjectTransformer<I, R> implements DataTransformer<KeyedData<I>, R> {
    consumer: DataConsumer<I, R>;

    constructor(consumer: DataConsumer<I, R>) {
        this.consumer = consumer;
    }

    transform(keyedData: KeyedData<I>) {
        this.consumer.initialize();
        if (keyedData) {
            var index: number = 0;
            for (var key in keyedData) {
                const data = keyedData[key];
                this.consumer.processRow(data, index, key);
                index++;
            }
        }
        return this.consumer.getResult();
    };
}

function getObjectTransformer<I, R>(c: DataConsumer<I, R>) {
    return new ObjectTransformer<I, R>(c);
}

export { getObjectTransformer }