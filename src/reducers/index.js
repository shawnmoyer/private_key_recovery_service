import { combineReducers } from 'redux'


let containerReducer = function(containers = {}, action) {
    switch (action.type) {
        case 'DECRYPT_CONTAINER':
            if(action.hasError){
                return {
                    encryptedContainer: containers.encryptedContainer,
                    decryptedContainer: {
                        privateKey: '',
                        publicKey: '',
                        address: ''
                    },
                    showDecryptedContainer: false,
                    hasErrors: true,
                    errorsMsg: action.hasError
                }
            }
            return{
                encryptedContainer: containers.encryptedContainer,
                decryptedContainer: {
                    privateKey: action.privateKey,
                    publicKey: action.publicKey,
                    address: action.address
                },
                showDecryptedContainer: true,
                hasErrors: false,
                errorsMsg: ''
            };
        default:
            return containers;
    }
};

const rootReducer = combineReducers({
    containers: containerReducer
});

export default rootReducer