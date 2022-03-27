import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    //创建仓库
const state = {
    user: {
        name: ''
    }
}
const getters = {
        getUser(state) {
            return state.user;
        }
    }
    //设置值  唯一可以修改state的值
const mutations = {
        updata(state, user) {
            state.user = user;
        }
    }
    //异步执行mutations
const actions = {
    asyncUpdataUser(context, user) {
        context.commit('updata', user)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})