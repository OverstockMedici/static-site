import isEmail from '../isEmail';

describe('"isEmail" functions accordingly', () => {
    test('"isEmail" returns true', () => {
        expect(isEmail('johndoe@gmail.com')).toBe(true);
    });
    test('"isEmail" returns false when email is incorrect', () => {
        expect(isEmail('jondoe@hi')).toBe(false);
    });
    test('"isEmail" returns false with a random string passed in', () => {
        expect(isEmail('1')).toBe(false);
    });
    test('"isEmail" returns false when random args that rent not strings are passed in', () => {
        expect(isEmail(1)).toBe(false);
        expect(isEmail({})).toBe(false);
        expect(isEmail([['johndoe@gmail.com'], []])).toBe(false);
    });
});
