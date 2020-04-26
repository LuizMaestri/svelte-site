<script>
    export let name;
    export let img;
    export let shortname;
</script>

<style>
	img {
        width: 100%;
        cursor: pointer;
        margin-bottom: 10px;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0px;
        width: 100%;
        cursor: pointer;
        visibility: hidden;
        transition: .5s linear;
        background-color: rgba(198, 51, 25, 0.3);
    }

    .col-md-3:hover .overlay {
        height: 100%;
        visibility: visible;
        color: white;
    }

</style>

<div class="col-md-3 text-center">
    <a rel="prefetch" href="experience/{shortname}">
        <img alt={name} src={img}>
        <div class="overlay">
            <p>
                <b>{name}</b>
            </p>
        </div>
    </a>
</div>