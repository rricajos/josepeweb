<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	let subnav, navicon, sunicon;
	onMount(() => {
		subnav = document.querySelector('.subnav');
		sunicon = document.querySelector('#nav-icon2');
		navicon = document.querySelector('#nav-icon3');
		navicon.classList.toggle('open');

		subnav.classList.toggle('active');
	});

	let lightTheme = false;
	function toggleTheme() {
		lightTheme = !lightTheme;
	}
</script>

<nav>
	<div class="contcenter">
		<a href="{base}/index.html"><h1>Giuseppe Sierra</h1></a>

		<div class="nav-widgets-cont">
			<div>
				<button on:click={sunicon.classList.toggle('moon')} style="position: relative;">
					<div class="sun-cont">
						<div id="nav-icon2" class="sun moon"></div>
					</div>
				</button>
			</div>

			<button
				id="nav-icon3"
				class="open"
				on:click={() => {
					navicon.classList.toggle('open');
					subnav.classList.toggle('active');
				}}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

		<div class="subnav active">
			<a class="subnav-button" id="subnav-button-products" href="{base}/products">Productos</a>
			<a class="subnav-button" id="subnav-button-services" href="{base}/products">Servicios</a>
			<a class="subnav-button" id="subnav-button-contact" href="{base}/products">Contacto</a>
		</div>
	</div>
</nav>

<style>
	.nav-widgets-cont {
		display: flex;
		align-items: center;
	}
	.sun {
		position: absolute;
		top: 45%;
		left: 45%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}

	.moon {
		border-radius: 50%;
		width: 15rem;
		height: 15rem;
		margin: 1rem;

		box-shadow: 3.5rem 3rem 0 0 #fff77e;
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
		padding-left: 2rem;
		z-index: 100;
	}
	a {
		font-size: 1.5em;
		text-decoration: none;
		color: light-dark(var(--light-color), var(--dark-color));
	}
	.subnav {
		padding: 1rem;
		border-radius: 0 0% 100% 0%;
	}
	.subnav-button {
		padding: 0.5rem;
	}
	nav > .contcenter {
		height: 20vh;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	nav,
	footer {
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
		#subnav-button-products::before {
			content: '📦 ';
			padding-left: 1rem;
		}
		#subnav-button-services::before {
			content: '👽 ';
			padding-left: 1rem;
		}
		#subnav-button-contact::before {
			content: '📞 ';
			padding-left: 1rem;
		}
		.subnav {
			display: flex;
			flex-flow: column;

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

		.subnav.active {
			right: 0;
		}

		#nav-icon3 {
			display: block !important;
		}
	}

	/* Icon 3 */
	#nav-icon3 {
		display: none;
		width: 48px;
		height: 48px;
		position: relative;
		margin-right: 2rem;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 9px;
		width: 100%;
		background-color: light-dark(var(--dark-bg), var(--light-bg));
		border-radius: 9px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}

	#nav-icon3 span:nth-child(1) {
		top: 0px;
	}

	#nav-icon3 span:nth-child(2),
	#nav-icon3 span:nth-child(3) {
		top: 18px;
	}

	#nav-icon3 span:nth-child(4) {
		top: 36px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 18px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#nav-icon3.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	#nav-icon3.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
</style>
