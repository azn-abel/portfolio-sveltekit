<script lang="ts">
  import type { PageData } from "./$types";
  import Job from "./Job.svelte";

  export let data: PageData;
</script>

<h1>Resume 📄</h1>
{#each data.jobs as job}
  <Job {...job} />
{/each}
