<script lang="ts">
  import type { PageData } from "./$types";
  import Job from "./Job.svelte";

  export let data: PageData;
</script>

<h1>Experience 📄</h1>
{#each data.jobs as job}
  <Job {...job} />
{/each}

<svelte:head>
  <title>abellu.online | Experience</title>
  <meta name="description" content="Abel Lu's super cool employment history!" />
</svelte:head>
