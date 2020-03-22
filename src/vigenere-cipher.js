const   CODE_CHAR_A = 65,
        ALPHABET_LENGTH = 26,
        CRYPT_FIT_REGEXP = /[A-Za-z]/;

class VigenereCipheringMachine {
    constructor (directCoder = true) {
        this.direct = directCoder
    }

    charFromCode(code) {
        return String.fromCharCode(code + CODE_CHAR_A);
    }

    codeFromChar(char) {
        return char.toUpperCase().charCodeAt(char) - CODE_CHAR_A;
    }

    encrypt(string = '', key = '') {
        if (string === '' || key === '') {
            throw 'Error';
        }

        let keyCount = 0,
            keyLength = key.length,
            encryptString = '';

        const encryptChar = (cryptChar) => {
            if (CRYPT_FIT_REGEXP.test(cryptChar)) {
                encryptString += this.charFromCode((this.codeFromChar(cryptChar) + this.codeFromChar(key[ keyCount++ % keyLength ])) % ALPHABET_LENGTH);
            } else {
                encryptString += cryptChar;
            }
        }
       
        if (this.direct) {
            for (let i = 0, length = string.length; i < length; i++) {
                let cryptChar = string[i];
                encryptChar(cryptChar);
            }
        } else {
            for (let i = string.length - 1; i >= 0; i--) {
                let cryptChar = string[i];
                encryptChar(cryptChar);
            }
        }

        return encryptString;
    }

    decrypt(string = '', key = '') {
        let keyCount = 0,
            keyLength = key.length,
            decryptString = '';

        if (string === '' || key === '') {
            throw 'Error';
        }

        const decryptChar = (cryptChar) => {
            if (CRYPT_FIT_REGEXP.test(cryptChar)) {
                decryptString += this.charFromCode((26 + this.codeFromChar(cryptChar) - this.codeFromChar(key[ keyCount++ % keyLength ])) % ALPHABET_LENGTH);
            } else {
                decryptString += cryptChar;
            }
        }

        if (this.direct) {
            for (let i = 0, length = string.length; i < length; i++) {
                let cryptChar = string[i];
                decryptChar(cryptChar);
            }
        } else {
            for (let i = string.length - 1; i >= 0 ; i--) {
                let cryptChar = string[i];
                decryptChar(cryptChar);
            }
        }

        return decryptString;
    }
}

module.exports = VigenereCipheringMachine;