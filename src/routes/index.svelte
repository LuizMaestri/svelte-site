<script>
	import { _ } from 'svelte-i18n';
    import Icon from 'fa-svelte';
    import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 1em auto;
		width: 80%;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	:global(.icon) {
        height: 3rem !important;
		width: 3rem !important;
		/* cursor: pointer; */
		transition: color .5s ease
	}
	
	:global(.icon):hover {
        color: rgb(198, 51, 25);
    }

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{$_('page.home.title')}</title>
</svelte:head>

<div class="row">
	<span class="col-md-3">
		<figure>
			<img alt={$_('page.home.img.me')} src='me.jpg'>
			<figcaption>HIGH FIVE!</figcaption>
		</figure>
	</span>
	<span class="col-md">
		<div class="row">
			<span class="col">
				<h1>{$_('page.home.text.title')}</h1>
				<p>
					{$_('page.home.text.description')}
				</p>
			</span>
		</div>
		<div class="row">
			<span class="col text-center">
				<h3>
					<strong>{$_('page.home.text.contact')}</strong>
				</h3>
			</span>
		</div>
		<div class="row">
			<span class="col">
				<a href="https://www.linkedin.com/in/luizmaestri/" target="_blank">
					<Icon class="icon float-right" icon={faLinkedin}/>
				</a>
			</span>
			<span class="col">
				<a href="https://github.com/LuizMaestri" target="_blank">
					<Icon class="icon" icon={faGithub}/>
				</a>
			</span>
		</div>
	</span>
</div>
