export default [
	{
		path: '/admin/login',
		name: 'login',
		component: () => import(/* webpackChunkName: login" */ './login.vue'),
		layout: 'admin-login',
	},
	{
		path: '/admin',
		name: 'admin',
		component: () =>
			import(
				/* webpackChunkName: helloWorld" */ '../../components/HelloWorld.vue'
			),
		meta: {
			adminAuth: true,
		},
		redirect: {
			name: 'dashboard',
		},
		children: [
			{
				path: 'dashboard',
				name: 'dashboard',
				component: () =>
					import(/* webpackChunkName: dashboard" */ './dashborad.vue'),
			},
			{
				path: 'home',
				name: 'home',
				component: () =>
					import(/* webpackChunkName: dashboard" */ '../Web/home.vue'),
			},
		],
	},
];
