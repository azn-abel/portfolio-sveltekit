<script lang="ts">
  import type { PageData } from "./$types";
  import Project from "./Project.svelte";

  export let data: PageData;
</script>

<h1>Projects 💻</h1>

{#each data.projects as project}
  <Project {...project} />
{/each}
