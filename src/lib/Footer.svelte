<script>
  	import { base } from '$app/paths';
</script>

<footer>
	<div class="contcenter">
		<a href="{base}/terms.html"> Información de Contacto</a>
		<a href="{base}/terms.html"> Preguntas Frecuentes</a>
		<a href="{base}/priv.html"> Política de privacidad</a>
		<a href="{base}/terms.html"> Términos y condiciones</a>
	</div>
</footer>

<style>
  /* a {
    text-decoration: none;
    color: light-dark(var(--light-color), var(--dark-color));
    margin: 1rem;
    padding: 1rem;
  } */
  footer {
    background-color: light-dark(var(--light-bg), var(--dark-bg));
		color: light-dark(var(--light-color), var(--dark-color));
  }

  div {
    display: flex;
    flex-flow: row wrap;
  }
</style>
