<script>
	export let open;
</script>

<button class:open>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</button>

<style>
	@media only screen and (max-width: 730px) {
		button {
			display: block !important;
		}
	}

	button {
		display: none;
		width: 48px;
		height: 48px;
		position: relative;

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

	button span {
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

	button span:nth-child(1) {
		top: 0px;
	}

	button span:nth-child(2),
	button span:nth-child(3) {
		top: 18px;
	}

	button span:nth-child(4) {
		top: 36px;
	}

	button.open span:nth-child(1) {
		top: 18px;
		width: 0%;
		left: 50%;
	}

	button.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	button.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	button.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
</style>
