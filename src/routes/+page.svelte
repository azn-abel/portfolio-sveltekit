<script>
  import Certification from "./Certification.svelte";
  import SkillGroup from "./SkillGroup.svelte";

  import certifications from "$lib/certifications.json";
  import skills from "$lib/skills.json";
</script>

<h1>Hey, I'm Abel Lu 😎</h1>
<p>
  I'm currently an undergrad at NC State University, where I study computer
  science with a focus on <b>full-stack development, DevOps, and cloud infrastructure</b>.
</p>
<p>
  Outside of school, I work as a Platform Engineering Intern at <a href="https://renci.org">RENCI</a>,
  where I create and deploy software that improves the developer experience within the
  organization.
</p>
<p>
  In my free time, I'm brushing up on <b>Go</b> and <b>Terraform</b> to keep my skills sharp.
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
