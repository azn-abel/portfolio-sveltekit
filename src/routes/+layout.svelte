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
      <a class="buffer" href="/blog">Blog</a>
      <a href="/resume">Experience</a>
    </nav>
  </div>
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
    height: 2rem;
    border-bottom: 1px solid darkgray;
  }
  a {
    text-decoration: none;
    color: white;
    transition: 0.25s;
  }
  a:hover {
    color: gray;
  }
  .buffer {
    margin-right: 15px;
  }
</style>
