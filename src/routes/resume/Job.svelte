<script lang="ts">
  export let company: string;
  export let jobTitle: string;
  export let year: string;
  export let image_url: string;
  export let url: string;

</script>

<div class="job-container">
  <!-- {#await import(`../../lib/experience/images/${image_url}.jpg`) then { default: src }}
    <img class="image-region" {src} alt={image_url} />
  {/await} -->
  <a class="image-region" href={url}>
    <img class="image-region" src={`/company_logos/${image_url}.jpg`} alt="">
  </a>
  
  <div class="text-region">
    <b>{company}</b>
    <p>{jobTitle} • {year}</p>
  </div>
</div>

<style>
  .job-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
  }
  .image-region {
    width: 100px;
    height: 100px;
    margin-right: 1rem;
    object-fit: contain;
    /* background-color: #231F20; */
    border-radius: 10px;
  }
  .text-region {
    margin-left: 1rem;
    align-items: center;
  }
  p {
    margin: 0;
  } 
</style>
