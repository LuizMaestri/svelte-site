<script>
	import { _,  locale, locales } from 'svelte-i18n';
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background-color: #f6f6f6;
	}

	ul {
		margin: 0;
		padding: 0;
		display: inline-block;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(198, 51, 25);
		display: block;
		bottom: -1px;
	}

	a, .a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	.a {
		cursor: pointer;
	}
	.a:hover{
		color: rgb(198, 51, 25);
	}
</style>

<nav>
	<ul>
		<li><a class:selected={segment === undefined} href=".">{$_('page.home.nav')}</a></li>
		<li><a rel="prefetch" class:selected={segment === 'experience'} href="experience">{$_('page.experience.nav')}</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel="prefetch" class:selected={segment === 'projects'} href="projects">{$_('page.projects.nav')}</a></li>
	</ul>
	<ul class="float-right">
		{#each $locales as item}
			<li>
				<span class="a" class:selected={$locale.includes(item)} href={`#!${item}`} on:click={() => ($locale = item)}>
					{$_('languages.' + item.replace('-', '_'))}
				</span>
			</li>
		{/each}
  </ul>
</nav>
