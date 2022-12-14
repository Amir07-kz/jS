const getIntersectionUnion = require('./index');

describe('c.4.2 getIntersectionUnion', () => {
    it('c.4.2.1 not empty', () => {
        const resultOne = {
            intersection: [ 5, 8 ],
            union: [ 5, 6, 8, 9, 3, 4 ],
        };

        const resultTwo = {
            intersection: [ 10, 42 ],
            union: [ 1, 10, 25, 31, 42, 20, 32 ],
        };

        const first = getIntersectionUnion([ 5, 6, 6, 6, 8, 9 ], [ 3, 3, 4, 4, 5, 5, 8 ]);

        expect([...first.intersection].sort()).toEqual([...resultOne.intersection].sort());
        expect([...first.union].sort()).toEqual([...resultOne.union].sort());

        const second = getIntersectionUnion([ 1, 10, 25, 31, 42 ], [ 10, 20, 32, 42 ]);

        expect([...second.intersection].sort()).toEqual([...resultTwo.intersection].sort());
        expect([...second.union].sort()).toEqual([...resultTwo.union].sort());
    });
    it('c.4.2.2 empty', () => {
        const resultThree = {
            intersection: [],
            union: [],
        };
        expect(getIntersectionUnion([], [])).toEqual(resultThree);
    });
});
