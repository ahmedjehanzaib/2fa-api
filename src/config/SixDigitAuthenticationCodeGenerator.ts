import cryptoRandomString from 'crypto-random-string';

export const generateCode = () => cryptoRandomString({ length: 6, type: 'numeric'});