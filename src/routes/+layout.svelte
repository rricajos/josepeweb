<script>
	
	import { onMount } from 'svelte';
  let subnav;
	onMount(() => {
    subnav = document.querySelector('.subnav');
    subnav.classList.toggle('active');
	});
</script>

<header>
	<div class="supercontainer">
		<nav>
			<p class="home">Josepe Sierra</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<button class="hamburguer" on:click={subnav.classList.toggle('active')}>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</button>
			<div class="subnav active">
				<a class="subnav-button hover-underline-animation">Productos</a>
				<span>·</span>
				<a class="subnav-button hover-underline-animation">Servicios</a>
				<span>·</span>
				<a class="subnav-button hover-underline-animation">Contacto</a>
			</div>
		</nav>
	</div>
</header>

<style>
	.hamburguer {
		display: none;
	}
	@media only screen and (max-width: 730px) {
		.hamburguer {
			display: block;
			cursor: pointer;
			align-self: center;
      background-color: #1f1f1f;
      border: none;
		}
		.hamburguer .line {
			width: 60px;
			height: 6px;
			background-color: antiquewhite;
			margin: 12px 0;
		}
    .active {
      display: none !important;
      top: -300px !important;
      transition: all 2s ease-in-out !important;
    }
		.subnav {
      z-index: -2;
      
      display: flex;
			flex-flow: column nowrap;
			align-items: center;
      
			box-sizing: border-box;
			padding: 32px;
			background-color: #1f1f1f;
			position: absolute;
      top: 90px;
			left: 0;
			right: 0;
			width: 100vw;
		
   

     
		}

		.subnav-button {
			box-sizing: border-box;
			padding: 16px 0px;
			font-size: 28px;
		}
		.subnav > span {
			display: none;
		}

		nav {
      z-index: 10;
			position: fixed;
			padding: 0px 20px !important;
			background-color: #1f1f1f;
		}
	}

	.home {
		display: inline-block;
		position: relative;
    font-size: 28px;
		padding: 6px;
	}
	.home::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: antiquewhite;
		transform-origin: bottom right;
		transition: transform 0.25s ease-in-out;
		transform: scaleY(1);
		transform-origin: bottom left;
	}

	:global(body) {
		margin: 0px;
		background-color: #232323;
		overflow: hidden;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}

	.supercontainer {
		max-width: 920px;
		width: 100%;
		min-height: 100vh;
		margin: 0 auto;
		background-color: #232323af;
		box-shadow: 0px 0px 10px black;
	}

	header {
		height: 100vh;
		width: 100%;
		background-color: #232323d3;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	header:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-image: url($lib/assets/handvshand.png);
		background-size: cover;
		background-position: center;

		filter: blur(4px);

		z-index: -23;
	}

	nav {
		box-sizing: border-box;
		padding: 0.3em 2em;
		font-size: 23px;
		font-weight: bold;
		color: antiquewhite;
		text-shadow: 0px 0px 10px black;
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		align-items: baseline;
		justify-content: space-between;
	}

	a {
		box-sizing: border-box;
		padding: 6px;
		text-decoration: none;
		color: antiquewhite;
	}

	a:hover {
		cursor: pointer;
	}

	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleY(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: antiquewhite;
		transform-origin: bottom right;
		transition: transform 0.25s ease-in-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleY(1);
		transform-origin: bottom left;
	}
</style>
