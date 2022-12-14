import { createAction, handleActions} from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from '../../lib/api/auth';

const SET_ERROR = 'auth/SET_ERROR';

const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';

const LOGOUT = 'auth/LOGOUT'

const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS';
const CHECK_USERNAME_EXISTS = 'auth/CHECK_USERNAME_EXISTS';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
export const setError = createAction(SET_ERROR);

export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);

export const logout = createAction(LOGOUT, AuthAPI.logout);

export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS,AuthAPI.checkEmailExists);
export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS, AuthAPI.checkUsernameExists);

export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);

const initialState = Map({
    register: Map({
        form: Map({
            email: '',
            username: '',
            password: '',
            passwordConfirm: ''
        }),
        exists: Map({
            email: false,
            password: false
        }),
        error: null
    }),
    login: Map({
        form: Map({
            email: '',
            password: ''
        }),
        error: null
    }),
    result: Map({})
});

export default handleActions({                                                                                           
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    },
    ...pender({
        type: CHECK_EMAIL_EXISTS,
        onSuccess: (state,action) => state.setIn(['register', 'exists','email'],action.payload.data.exists)
    }),
    ...pender({
        type: CHECK_USERNAME_EXISTS,
        onSuccess: (state, action) => state.setIn(['register','exists','username'], action.payload.data.exists)
    }),//register.exists.username ??? action.payload.data.exists ?????? ???????????????????
    ...pender({
        type: LOCAL_LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),///register?????? local_login??? ?????? ?????????
    ...pender({
        type: LOCAL_REGISTER,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    [SET_ERROR]: (state, action) => {
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    }
}, initialState);
//pender:????????? ????????? ????????? ?????? 