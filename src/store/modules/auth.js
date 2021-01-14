import authApi from '@/api/auth'

const state = {
    isSubmitting: false
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true;
    },
    registerSuccess(state) {
        state.isSubmitting = false;
    },
    registerFailed(state) {
        state.isSubmitting = false;
    }
}

const actions = {
    register(context, credentials) {
        return new Promise(resolve => {
            context.commit('registerStart');
            authApi
                .register(credentials)
                .then(response => {
                    console.log('response', response.data.user);
                    context.commit('registerSuccess',response.data.user);
                    resolve(response.data.user);
                })
                .catch(reject => {
                    console.log('reject', reject.response.data.errors);
                    context.commit('registerFailed', reject.response.data.errors);
                })

        })

    }
}

export default {
    state,
    mutations,
    actions
}