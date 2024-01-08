<script lang="ts">
  import type { PageData } from "./$types";
  import blogData from "$lib/blogs.json";
  import { onMount } from "svelte";
  import "highlight.js/styles/a11y-dark.css";
  import "$lib/blogstyle.css";
  import hljs from "highlight.js";

  onMount(() => {
    hljs.highlightAll();
  });

  export let data: PageData;

  interface Blog {
    title: string;
    date: string;
    description: string;
    content: string;
  }

  type BlogMap = Record<string, Blog>;

  const blogs: BlogMap = blogData;
  const errorBlog: Blog = {
    title: "Blog not found.",
    date: "",
    description: "Description",
    content:
      '<pre><code class="lang-python">def main():\n    print("404 error")</code></pre>',
  };

  $: blog = (blogs[data.params.blog_path] || errorBlog) as Blog;
</script>

<h1>{blog.title}</h1>

<small>Abel Lu - {blog.date}</small>

<p>{@html blog.content}</p>

<svelte:head>
  <title>abellu.online | {blog.title}</title>
  <meta name="description" content={blog.description} />
</svelte:head>
