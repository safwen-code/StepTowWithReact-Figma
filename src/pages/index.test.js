import {sum} from './Home'

test('la resutat ', () => {
    const result = sum(3,7)
    expect(result).toBe(21)
})
