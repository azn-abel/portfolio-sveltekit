<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>404</h1>

<p>Path <b>/{data.params.path}</b> does not exist.</p>
