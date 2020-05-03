<script context="module">
	export async function preload(){
		try {
			const res = await this.fetch('https://api.github.com/users/LuizMaestri/repos');
			const data = await res.json();
			const projects = data.map(
				({
					name,
					language,
					description,
					html_url: url
				}) => ({
					name,
					language,
					description,
					url
				})
			);
			return { projects };
		} catch (error) {
			console.error(error);
			return { projects: [] };
		}
	}
</script>
<script>
	import Project from '../components/Project.svelte';
	import { _ } from 'svelte-i18n';
    import Icon from 'fa-svelte';
    import { faHtml5, faJava, faJsSquare, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
    import { faQuestionCircle, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

	export let projects;

	let languages = [
		'HTML',
		'Java',
		'JavaScript',
		'PHP',
		'Python'
	]
	let selected = 'all';
	$: filtered = 
		selected === 'all' ? 
			projects : projects.filter(({ language }) => language === selected);

	function getIcon(language){
		switch (language) {
			case 'HTML': return faHtml5;
			case 'Java': return faJava;
			case 'JavaScript': return faJsSquare;
			case 'PHP': return faPhp;
			case 'Python': return faPython;
			default: return faQuestionCircle;
    	}
	}
</script>

<style>
	ul {
		margin: auto;
		padding: 0;
		margin-bottom: 10px;
		width: max-content;
	}
	@media screen and (max-width: 768px) {			
		ul {
			width: min-content;
		}
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		font-weight: 500;
		display: block;
		float: left;
		margin-right: 20px;
		width: 130px;
		cursor: pointer;
	}

	li:hover {
		color: #C63319;
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
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	div {
		margin: auto;
		text-align: center;
	}
</style>

<svelte:head>
	<title>{$_('page.projects.title')}</title>
</svelte:head>


<h1>{$_('page.projects.text.title')}</h1>
<ul>
	<li class:selected={selected === 'all'} on:click={() => selected = 'all'}>
		<Icon icon={faLaptopCode}/> {$_('page.projects.text.all')}
	</li>
	{#each languages as language}
		<li class:selected={selected === language} on:click={() => selected = language}>
			<Icon icon={getIcon(language)}/> {language}
		</li>
	{/each}
</ul>

<div class="row">
	{#each filtered as project (project.name)}
		<Project { ...project }/>
	{/each}
</div>
