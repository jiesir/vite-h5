import { createApp } from 'vue';
import { setupLoader } from '@/utils/loader';
import { setupConsole } from '@/utils/console';
import router, { setupRouter } from '@/utils/router';
import { setupStore } from '@/utils/store';
// import { setupComponent } from '@/utils/component';
import Entry from './App.vue';
import "@/styles/index.less";

const app = createApp(Entry);

// loader
setupLoader(app);
// console
setupConsole();
// router
setupRouter(app);
// store
setupStore(app);
// component
// setupComponent(app);

router.isReady().then(() => {
    app.mount('#app');
});

export default app;