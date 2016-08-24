import * as AmbiClient from "ambisafe-client-javascript";
var Ambisafe = AmbiClient.Ambisafe;

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
        return {
            type: 'DECRYPT_CONTAINER',
            privateKey: privateKey
        }
    }
};

export default actions