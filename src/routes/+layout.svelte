<script>
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<main>
	<div class="contcenter">
		<slot></slot>
	</div>
</main>

<footer>
	<div class="contcenter">
		<br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
		<i class="fas fa-moon" style="font-size:48px;color:red"></i>
	</div>
</footer>

<style>

	:global(body) {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		margin: 0px;
	}
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:root {
		/* this has to be set to switch between light or dark */
		color-scheme: light dark;

		--light-bg: ghostwhite;
		--light-color: darkslategray;
		--light-code: tomato;

		--dark-bg: darkslategray;
		--dark-color: ghostwhite;
		--dark-code: gold;
	}

	/* code {
		color: light-dark(var(--light-code), var(--dark-code));
	} */

	
	:global(.contcenter) {
		max-width: 920px;
		width: 100%;
		margin: 0 auto;
	}

	
</style>
