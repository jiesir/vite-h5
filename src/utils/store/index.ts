import type { App } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
    state: { userInfo: { name: '张三', age: 30 }, history: [] },
    mutations: {
        updateUserInfo(state, updateArg) {
            state.userInfo = updateArg;
        }
    }
});

export function setupStore(app: App<Element>) {
    app.use(store);
}
export default store;
