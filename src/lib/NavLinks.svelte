<script>
	import { base } from '$app/paths';
	export let open;
</script>

<div class:open>
	<a id="products" href="{base}/products">Productos</a>
	<a id="services" href="{base}/products">Servicios</a>
	<a id="contact" href="{base}/products">Contacto</a>
</div>

<style>
	@media only screen and (max-width: 730px) {
		#products::before {
			content: '📦 ';
		
		}
		#services::before {
			content: '👽 ';
	
		}
		#contact::before {
			content: '📞 ';

		}
		div {
			padding: 0 1rem 3rem 1rem;
			display: flex;
			flex-flow: column nowrap;
			border-radius: 0 0% 100% 0%;
			position: absolute;
			padding: 0 0 3rem 1rem;
			right: 100vw;
			width: 100vw;

			top: 4.9em;
			text-align: left;
			z-index: -10;
			background-color: light-dark(var(--light-bg), var(--dark-bg));
			transition: right 0.25s;
		}

		div.open {
			right: 0;
		}

		a {
			padding-left: 1rem;
		}
	}

	a {
		width: fit-content;
		padding: 0.5rem;
		font-size: 1.5em;
		text-decoration: none;
		color: light-dark(var(--light-color), var(--dark-color));
	}
</style>
