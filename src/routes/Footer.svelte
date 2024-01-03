<script lang="ts">
    import socials from '$lib/socials.json'
</script>

<div class="footer">
    <div class="socials-container">
        {#each socials as social}
            <a href={social.url}>
                <img class="social" src={social.image} alt={social.title}>
            </a>
        {/each}
    </div>
    <p>📩 aluprof4@gmail.com &ensp;|&ensp; 📲 +1 269-501-7211</p>
</div>

<style>
    a {
        text-decoration: none;
        transition: 0.5s;
    }
    a:hover .social:hover {
        transform: scale(1.1);
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
        margin: 0;
    }
</style>
