<script lang="ts">
  import type { PageData } from "./$types";

  import blogData from "$lib/blogs.json";

  interface Blog {
    title: string;
    date: string;
    description: string;
    content: string;
  }

  type BlogMap = Record<string, Blog>;

  const blogs: BlogMap = blogData;

  export let data: PageData;
</script>

<h1>Blog ✍🏻</h1>

<svelte:head>
  <title>abellu.online | Blog</title>
  <meta name="description" content="Abel Lu's super cool blog!" />
</svelte:head>

{#each Object.keys(blogs) as key}
  <h3>
    <a href={"/blog/" + key}>{blogs[key]["title"]}</a>
    - {blogs[key]["date"]}
  </h3>
  <p>{blogs[key]["description"]}</p>
{/each}
