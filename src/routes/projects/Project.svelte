<script lang="ts">
  export let title: string;
  export let description: string;
  export let url: string;
</script>

<b>{title}</b>
<ul>
  <li>{description}</li>
  <li><a href={url}>{url}</a></li>
</ul>
