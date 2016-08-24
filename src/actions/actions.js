import * as AmbiClient from "ambisafe-client-javascript";
var Ambisafe = AmbiClient.Ambisafe;
var _ethereumjsUtil = require('ethereumjs-util');

let actions = {
    decryptContainer: function(encryptedContainer, password) {
        try {
            var container = JSON.parse(encryptedContainer);
        }catch (err){
            return {
                type: 'DECRYPT_CONTAINER',
                hasError: "Wrong container. Ensure it has valid JSON format"
            }
        }
        var hashed_password = Ambisafe.deriveKey(password, container.salt);
        try {
            var privateKey =  Ambisafe.decrypt(container.data, container.iv, hashed_password).toString('hex');
        } catch (err) {
            return {
                type: 'DECRYPT_CONTAINER',
                hasError: "Wrong password"
            }
        }
        let account = Ambisafe.fromPrivateKey(privateKey, password, container.salt);
        return {
            type: 'DECRYPT_CONTAINER',
            privateKey: privateKey,
            publicKey: account.data.public_key,
            address : '0x' + (0, _ethereumjsUtil.pubToAddress)(new Buffer(account.data.public_key, 'hex'), true).toString('hex')
        }
    }
};

export default actions