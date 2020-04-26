<script context="module">
	export async function preload({ params, query }) {
		const { default: jobs} = await import('./jobs.json');
		return { job: jobs[params.slug] };
	}
</script>

<script>
	import { _ } from 'svelte-i18n';
	export let job;
	const jobKey = `page.experience.jobs.${job.shortname}.`;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.col-md-6 {
		border-left: 1px solid rgb(198, 51, 25);
	}

	hr {
		border: .5px solid rgb(198, 51, 25);
	}

	img {
		width: 100%
	}

</style>

<svelte:head>
	<title>{job.name}</title>
</svelte:head>

<h1>{job.name}</h1>

<div class='content'>
	<div class="row">
		<div class="col-md-3 text-center">
			<img src={job.img} alt={job.name}>
		</div>
		<div class="col-md">
			<div class="row">
				{#each job.experience as experience}
					<div class="col-md-6">
						<h3>
							{$_(`${jobKey}${experience}.job`)}
							<span style="font-size: 50%">
								({$_(`${jobKey}${experience}.start`)} - {$_(`${jobKey}${experience}.end`)})
							</span>
						</h3>
						<br/>
						<strong>{$_('page.experience.text.responsibilities')}</strong>
						<ul>
							{@html $_(`${jobKey}${experience}.description`)}
						</ul>
						<hr/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
