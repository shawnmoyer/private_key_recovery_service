import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

let initialState = {
    containers : {
        encryptedContainer: '',
        decryptedContainer: {
            privateKey: '',
            publicKey: '',
            address: ''
        },
        showDecryptedContainer: false,
        hasErrors: false,
        errorsMsg: ''
    }
};

export default function configureStore() {
    return finalCreateStore(rootReducer, initialState)
}
