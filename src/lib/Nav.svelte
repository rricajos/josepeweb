<script>
	import { base } from '$app/paths';
	import NavLinks from '$lib/NavLinks.svelte';
	import NavIcon from '$lib/NavIcon.svelte';

	let open = false;
	const toggle = () => {
		open = !open;
	};
</script>

<nav>
	<div class="contcenter">
		<a href="{base}/"><h1>Giuseppe Sierra</h1></a>

		<button on:click={toggle}>
			<NavIcon {open} />
		</button>

		<NavLinks {open} />
	</div>
</nav>

<style>
  a {
    text-decoration: none;
		color: light-dark(var(--light-color), var(--dark-color));
  }
  button {
    background-color: transparent;
    border: none;
  }
	nav {
		background-color: light-dark(var(--light-bg), var(--dark-bg));
		color: light-dark(var(--light-color), var(--dark-color));
	}
	h1 {
		font-size: 1.5em;
	
		z-index: 100;
	}

	nav > .contcenter {
    padding: 1rem;
		height: 20vh;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	nav {
		text-shadow: 0px 0px 0.5rem black;
		width: 100%;
	}

	@media only screen and (max-width: 730px) {
		h1 {
			font-size: 1.5rem;
		}

		nav {
			position: fixed;
		}
		nav > .contcenter {
			align-items: center;
			overflow: hidden;
			height: 5em;
		}
	}
</style>
