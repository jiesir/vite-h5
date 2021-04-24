import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export function createProgressGuard(router) {
  // NProgress.inc(0.1);
  // NProgress.configure({ easing: 'ease', speed: 200, showSpinner: false });
  // close spinner
  NProgress.configure({ showSpinner: false }) 

  router.beforeEach(async (to) => {
    NProgress.start();
    return true;
  });
  router.afterEach(async (to) => {
    NProgress.done();
    // console.clear();
    return true;
  });
}
