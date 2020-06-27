<template>
	<div>
		welcome to the login
	</div>
</template>

<script>
	export default {
		name: 'login',
		beforeCreate() {
			this.nivedan.get('/pankajvashisht-ucreate').then((value) => {
				console.log(value);
			});
		},
	};
</script>
