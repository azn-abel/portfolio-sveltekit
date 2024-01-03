<script lang="ts">
  import type { LayoutData } from "./$types";
  import Footer from "./Footer.svelte";

  export let data: LayoutData;
</script>

<div class="content">
  <div class="menu-bar">
    <nav>
      <a href="/">abellu.online</a>
    </nav>

    <nav>
      <!-- <a class="buffer" href="/about">About</a> -->
      <a class="buffer" href="/projects">Projects</a>
      <!-- <a class="buffer" href="/blog">Blog</a> -->
      <a href="/resume">Resume</a>
    </nav>
  </div>
  <hr />
  <slot />
  <Footer />
</div>

<style>
  .content {
    width: 800px;
    max-width: calc(100vw - 16px);
    height: fit-content;
    margin: auto;
  }
  .menu-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: lightgray;
  }
  .buffer {
    margin-right: 15px;
  }
</style>
