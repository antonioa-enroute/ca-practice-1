class StringValidator {
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateZipCode(zipCode) {
        const zipRegex = /^\d{5}$/;
        return zipRegex.test(zipCode);
    }

    validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    validatePhoneNumberWithCountryCode(phoneNumber) {
        const phoneRegex = /^\+\d{1,3}\s?\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }
}

module.exports = StringValidator;