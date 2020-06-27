import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import AdminRoutes from '../pages/Admins/routes';
import WebRoutes from '../pages/Web/routes';
const router = new VueRouter({
	mode: 'history',
	routes: [...AdminRoutes, ...WebRoutes],
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (localStorage.getItem('jwt') == null) {
			next({
				path: '/login',
				params: { nextUrl: to.fullPath },
			});
		} else {
			const user = JSON.parse(localStorage.getItem('user'));
			if (to.matched.some((record) => record.meta.is_admin)) {
				if (user.is_admin == 1) {
					next();
				} else {
					next({ name: 'dashboard' });
				}
			} else {
				next();
			}
		}
	} else if (to.matched.some((record) => record.meta.guest)) {
		if (localStorage.getItem('jwt') == null) {
			next();
		} else {
			next({ name: 'dashboard' });
		}
	} else {
		next();
	}
});

export default router;
