<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import 'highlight.js/styles/a11y-dark.css';
  import hljs from 'highlight.js'

  onMount(() => {
    hljs.highlightAll()
  })

  export let data: PageData;
</script>

<h1>Blog ✍🏻</h1>
<p>My blog will go here, one day.</p>
<pre>
  <code class="language-python">
    def main():
        print("Hello World!")
  </code>
</pre>

<style>
  code {
    border-radius: 1rem;
  }
</style>
