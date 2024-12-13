/**
 * Array, Object, KeyValue Pipeline.  
 * 
 * The implementation shall make use of data Consumer. 
 */
interface DataTransformer<I, R> {
    transform: (t: I) => R
}

interface DataConsumer<I, T> {
    /**
     * Do resultset Initialization.
     * @param data
     * @returns 
     */
    initialize: () => void,
    /**
     * Process each record row
     * @param v - record data
     * @param x - xKey value
     * @returns 
     */
    processRow: (v: I, idx: number, key?: string) => void,
    /**
     * Returns the processed data
     * @returns chartData
     */
    getResult: () => T
}

type ArrayData<I> = I[];
type KeyedData<I> = Record<string, I>;


export type { DataConsumer, DataTransformer }
export type { ArrayData, KeyedData }