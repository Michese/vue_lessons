import authApi from '@/api/auth'
import {setLocalStorage} from "@/helper/localStorage";

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export const registerTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailed: '[auth] registerFailed'
}
const mutations = {
    [registerTypes.registerStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [registerTypes.registerSuccess](state, payload) {
        state.isSubmitting = false;
        state.isLoggedIn = true;
        state.currentUser = payload;
    },
    [registerTypes.registerFailed](state, payload) {
        state.isSubmitting = false;
        state.isLoggedIn = false;
        state.validationErrors = payload;
    }
}

const actions = {
    register(context, credentials) {
        return new Promise(() => {
            context.commit(registerTypes.registerStart);
            authApi
                .register(credentials)
                .then(response => {
                    context.commit(registerTypes.registerSuccess,response.data.user);
                    setLocalStorage('accessToken', response.data.user.token);
                })
                .catch(reject => {
                    context.commit(registerTypes.registerFailed, reject.response.data.errors);
                })

        })

    }
}

export default {
    state,
    mutations,
    actions
}