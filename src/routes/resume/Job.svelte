<script lang="ts">
  export let company: string;
  export let jobTitle: string;
  export let year: number;
</script>

<b>{company}</b>
<ul>
  <li>{year} - {jobTitle}</li>
</ul>
