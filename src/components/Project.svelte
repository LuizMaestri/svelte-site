<script>
    import Icon from 'fa-svelte';
    import { faHtml5, faJava, faJsSquare, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
    import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
    import GitHub from './GitHub.svelte';
    import { _ } from 'svelte-i18n';
    export let name;
    export let language;
    export let description;
    export let url;
    let icon;
    switch (language) {
        case 'HTML':
            icon = faHtml5;
            break;
        case 'Java':
            icon = faJava;
            break;
        case 'JavaScript':
            icon = faJsSquare;
            break;
        case 'PHP':
            icon = faPhp;
            break;
        case 'Python':
            icon = faPython;
            break;
        default:
            icon = faQuestionCircle;
            break;
    }
</script>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin-bottom: 30px;
        height: 180px;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card > header {
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
    }
    .card > main {
        padding: 5%;
        text-overflow: ellipsis;
    }
    .card > footer {
        padding: 0 45%;
        position: absolute;
        bottom: 10px;
    }

    .card > footer :global(.icon) {
        height: 3rem;
        width: 3rem;
    }
</style>

<a class="col-md-4" aria-label={$_('page.texts.github')} target="_blank" href={url}>
    <div class="card">
        <GitHub/>
        <header>{ name }</header>
        <main>
            { !!description ? description :  $_('page.texts.no_description')}
        </main>
        <footer>
            <Icon class="icon" { icon }/>
        </footer>
    </div>
</a>