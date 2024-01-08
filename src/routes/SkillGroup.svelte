<script lang="ts">
  export let category: string;
  export let skills: string;
</script>

<li style="color: white;">
  {category}
  <ul>
    <li>
      {skills}
    </li>
  </ul>
</li>
