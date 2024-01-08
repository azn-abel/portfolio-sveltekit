<script lang="ts">
  import type { PageData } from "./$types";
  import Project from "./Project.svelte";

  export let data: PageData;
</script>

<h1>Projects 💻</h1>

<svelte:head>
  <title>abellu.online | Projects</title>
  <meta name="description" content="Abel Lu's list of super cool projects!" />
</svelte:head>

{#each data.projects as project}
  <Project {...project} />
{/each}
