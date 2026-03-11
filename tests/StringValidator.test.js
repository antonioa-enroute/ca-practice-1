const StringValidator = require('../src/utils/StringValidator');

describe('StringValidator', () => {
    let validator;

    beforeAll(() => {
        validator = new StringValidator();
    });

    test('validateEmail should return true for valid email', () => {
        expect(validator.validateEmail('test@example.com')).toBe(true);
    });

    test('validateEmail should return false for invalid email', () => {
        expect(validator.validateEmail('invalid-email')).toBe(false);
    });

    test('validateZipCode should return true for valid zip code', () => {
        expect(validator.validateZipCode('12345')).toBe(true);
    });

    test('validateZipCode should return false for invalid zip code', () => {
        expect(validator.validateZipCode('1234')).toBe(false);
    });

    test('validatePassword should return true for valid password', () => {
        expect(validator.validatePassword('Password1')).toBe(true);
    });

    test('validatePassword should return false for invalid password', () => {
        expect(validator.validatePassword('password')).toBe(false);
    });

    test('validatePhoneNumberWithCountryCode should return true for valid phone number with country code', () => {
        expect(validator.validatePhoneNumberWithCountryCode('+1 1234567890')).toBe(true);
    });

    test('validatePhoneNumberWithCountryCode should return false for invalid phone number with country code', () => {
        expect(validator.validatePhoneNumberWithCountryCode('+1 12345')).toBe(false);
    });
});