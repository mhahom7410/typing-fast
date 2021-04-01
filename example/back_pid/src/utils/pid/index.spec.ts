import { isCorrectThaiPid } from '.';

describe('test isCorrectThaiPid', () => {
    it('should get true, when is good pid', () => {
        expect(isCorrectThaiPid('.................')).toBe(true);
    });

    // write your logic here

    // it('case 2', () => {})

    // it('case 3', () => {})
});
