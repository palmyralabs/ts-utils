type IConsumer<T> = (d: T) => void;
type BiConsumer<T, U> = (d: T, u: U) => void;
type TriConsumer<T, U, V> = (d: T, u: U, v: V) => void;

type IFunction<T, R> = (d: T) => R;
type BiFunction<T, U, R> = (d: T, u: U) => R;
type TriFunction<T, U, V, R> = (d: T, u: U, v: V) => R;

type IPredicate<T> = (d: T) => boolean;
type BiPredicate<T, U> = (d: T, u: U) => boolean;
type TriPredicate<T, U, V> = (d: T, u: U, v: V) => boolean;

type Supplier<T> = () => T;

export type { IConsumer, BiConsumer, TriConsumer, IFunction, BiFunction, TriFunction }
export type { IPredicate, BiPredicate, TriPredicate, Supplier };