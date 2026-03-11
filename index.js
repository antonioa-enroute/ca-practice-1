const StringValidator = require('./src/utils/StringValidator');

const validator = new StringValidator();

const userData = {
    email: 'johndoes@example.com',
    zipCode: '12345',
    password: 'Password1',
    phoneNumber: '+1 1234567890'
}

console.log('Email valid:', validator.validateEmail(userData.email));
console.log('Zip Code valid:', validator.validateZipCode(userData.zipCode));
console.log('Password valid:', validator.validatePassword(userData.password));
console.log('Phone Number with Country Code valid:', validator.validatePhoneNumberWithCountryCode(userData.phoneNumber));