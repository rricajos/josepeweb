<script>
	import { onMount } from 'svelte';
	let subnav, navicon, openMenu;
	onMount(() => {
		subnav = document.querySelector('.subnav');
		navicon = document.querySelector('#nav-icon3');
		navicon.classList.toggle('open'), subnav.classList.toggle('active');
	});
</script>

<nav>
	<div class="contcenter">
		<h1>Giuseppe Sierra</h1>
		<button
			id="nav-icon3"
			class="open"
			on:click={() => {
				navicon.classList.toggle('open'), subnav.classList.toggle('active');
			}}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
		<!-- <button class="hamburguer" on:click={subnav.classList.toggle('not-active')}>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</button> -->
		<div class="subnav active">
			<a class="subnav-button" id="subnav-button-products" href="/">Productos</a>
			<a class="subnav-button" id="subnav-button-services" href="/">Servicios</a>
			<a class="subnav-button" id="subnav-button-contact" href="/">Contacto</a>
		</div>
	</div>
</nav>

<slot></slot>
<footer>
	<div class="contcenter">
		<a href="/">License</a>
		<a href="/">Condition</a>
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

	.contcenter {
		max-width: 920px;
		width: 100%;
		margin: 0 auto;
	}
	nav {
		background-color: blueviolet;
	}
	nav > .contcenter {
		height: 20vh;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		font-size: 1.5em;
		padding-left: 2rem;
		z-index: 100;
	}
	a {
		font-size: 1.5em;
		text-decoration: none;
		color: antiquewhite;
	}
	.subnav {
		padding: 1rem;
		border-radius: 0 0% 100% 0%;
	}
	.subnav-button {
		padding: 0.5rem;
	}

	footer {
		height: 1024px;
	}
	nav,
	footer {
		color: antiquewhite;
		text-shadow: 0px 0px 0.5rem black;

		width: 100%;
	}



	@media only screen and (max-width: 730px) {
		h1::after {
			text-wrap: wrap;

			color: burlywood;
		}
	
		nav {
			position: fixed;
		}
		nav > .contcenter {
			align-items: center;
			overflow: hidden;
			height: 7em;
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

			top: 6.9em;
			text-align: left;
			z-index: 10;
			background-color: blueviolet;
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
		display: none	;
		width: 60px;
		height: 45px;
		position: relative;
		margin-right:2rem;
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
		background-color: antiquewhite;
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

	#nav-icon3.open > span:nth-child(1) {
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
