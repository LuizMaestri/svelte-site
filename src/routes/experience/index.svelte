<script context="module">
    export async function preload(){
        const { default: experiences } = await import('./jobs.json');
        return {
            experiences: Object.values(experiences)
                .map(
                    ({
                        name,
                        img,
                        shortname
                    }) => ({
                        name,
                        img,
                        shortname
                    })
                )
        };
    }
</script>

<script>
    import Experience from '../../components/Experience.svelte';
	import { _ } from 'svelte-i18n';
    export let experiences;
</script>

<svelte:head>
	<title>{$_('page.experience.title')}</title>
</svelte:head>

<div class="row">
    {#each experiences as experience}
        <!-- <a href={experience.url} class="col-md-4"> -->
            <Experience { ...experience } />
        <!-- </a> -->
    {/each}
</div>