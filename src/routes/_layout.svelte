<script context="module">
  import { isLoading, waitLocale } from 'svelte-i18n';
  export const preload = async () => waitLocale();
</script>

<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		padding: 1em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>