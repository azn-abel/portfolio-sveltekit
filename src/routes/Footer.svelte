<script lang="ts">
    import socials from '$lib/socials.json'
    import svelteIcon from '$lib/favicon.png'
    import tsIcon from '$lib/ts.png'
</script>

<div class="footer">
    <div class="socials-container">
        {#each socials as social}
            <a href={social.url}>
                <img class="social" src={social.image} alt={social.title}>
            </a>
        {/each}
    </div>
    <p>Copyright © 2024 Abel Lu</p>
    <p>
        Created with SvelteKit
        <img src={svelteIcon} alt="Svelte Icon">
        and TypeScript
        <img src={tsIcon} alt="TS Icon">
    </p>
</div>

<style>
    img {
        width: 14px
    }
    a {
        text-decoration: none;
        transition: 0.5s;
    }
    a:hover .social:hover {
        transform: scale(1.1);
    }
    .socials-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .social {
        width: 3rem;
        margin: 1rem;
        margin-top: 0;
        transition: 0.3s
    }
    .footer {
        text-align: center;
        margin: 2rem 0;
    }
    p {
        margin: 0.1rem;
    }
</style>
