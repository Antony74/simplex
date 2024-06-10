import { Add } from "ts-arithmetic";

type _TupleOf<T, N extends number, R extends T[]> = R['length'] extends N
    ? R
    : _TupleOf<T, N, [T, ...R]>;

type Tuple<T, N extends number> = _TupleOf<T, N, []>;

type NumberTuple<N extends number> = Tuple<number, N>;

type Simplex<D extends number> = Tuple<NumberTuple<D>, Add<D, 1>>;

type Triangle = Simplex<2>;
type Tetrahedron = Simplex<3>;

const myTriangle: Triangle = [
    [0, 0],
    [3, 0],
    [0, 4],
];

const myTetrahedron: Tetrahedron = [
    [0, 0, 0],
    [2, 0, 0],
    [0, 0, 2],
    [0, 2, 0],
];
