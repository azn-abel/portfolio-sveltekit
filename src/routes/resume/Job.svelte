<script lang="ts">
  import { onMount } from 'svelte';

  let image: any;

  export let company: string;
  export let jobTitle: string;
  export let year: string;
  export let bullets: Array<string>;
  export let image_url: string;
  export let url: string;

  onMount(async () => {
		image = (await import(`../../lib/experience/${image_url}.jpg`)).default;
	});


</script>
<details>
  <summary>
    <div class="job-container">
      <a class="image-region" href={url}>
        <img class="image-region" src={image} alt="">
      </a>
      
      <div class="text-region">
        <b>{company}</b>
        <p>{jobTitle} • {year}</p>
      </div>
    </div>
    <b class="icon"></b>
  </summary>
  <ul>
    {#each bullets as bullet}
    <li>{bullet}</li>
    {/each}
  </ul>
</details>


<style>
  details {
    user-select: none;
    background-color: rgb(30, 30, 30);
    margin-bottom: 1rem;
    border-radius: 1rem;
  }
  summary {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    background-color: rgb(40, 40, 40);
    border-radius: 1rem;
    user-select: none;
  }
  summary:hover {
    cursor: pointer;
    & .icon {
      color: gray;
    }
  }
  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    width: 2rem;
    user-select: none;
  }
  details[open] .icon::before {
    content: "-";
  }
  details:not([open]) .icon::before {
    content: "+";
  }
  .job-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
    width: fit-content;
    pointer-events: none;
  }
  .image-region {
    width: 100px;
    height: 100px;
    margin-right: 1rem;
    object-fit: contain;
    border-radius: 10px;
  }
  .text-region {
    margin-left: 1rem;
    align-items: center;
  }
  ul {
    margin: 1rem;
    padding-bottom: 1rem;
  }
  p {
    margin: 0;
  } 
</style>
