<script>
  import Certification from "./Certification.svelte";
  import SkillGroup from "./SkillGroup.svelte";

  import certifications from "$lib/certifications.json";
  import skills from "$lib/skills.json";
</script>

<h1>Hey, I'm Abel 😎</h1>
<i>
  This website is still in the works - feel free to visit
  <a href="https://azn-abel.github.io">azn-abel.github.io</a>
  for a complete site!
</i>
<p>
  I'm currently an undergrad student at NC State University, where I study
  computer science with a focus on <b
    >full-stack development, DevOps, and platform engineering</b
  >. Outside of school, I work as an intern at
  <a href="https://renci.org">RENCI</a>, where I create and deploy software that
  improves developer productivity within the organization. On the side, I'm
  learning Go and SvelteKit to keep my skills sharp.
</p>
<h2>Notable Skills 💻</h2>
<ul>
  {#each skills as skill}
    <SkillGroup {...skill} />
  {/each}
</ul>
<h2>Certifications 📜</h2>
<div class="cert-container">
  {#each certifications as certification}
    <Certification {...certification} />
  {/each}
</div>

<svelte:head>
  <title>abellu.online</title>
  <meta name="description" content="Hey I'm Abel 😎" />
</svelte:head>

<style>
  .cert-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    height: fit-content;
  }
</style>
