<script lang="ts">
  import { onMount } from "svelte";

  let image: any;

  export let name: string;
  export let image_url: string;
  export let cert_url: string;

  onMount(async () => {
		image = (await import(`../lib/certifications/${image_url}.png`)).default;
	});
</script>

<a href={cert_url} target="_blank" rel="noreferrer">
  <div class="cert">
    <img src={image} alt={name} style="width: 136px" />
  </div>
</a>

<style>
  .cert {
    width: 136px;
    height: 136px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    margin: 0.2rem;
    transition: 0.5s;
  }
  /* p {
    color: white;
  } */
  a:hover {
    color: white;
    transform: scale(1.05);
  }
</style>
