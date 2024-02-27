<script>
  import Certification from "./Certification.svelte";
  import SkillGroup from "./SkillGroup.svelte";

  import certifications from "$lib/certifications.json";
  import skills from "$lib/skills.json";
</script>

<h1>Hey, I'm Abel Lu 😎</h1>
<p style="color: gray; margin-top: 0">CS undergrad at NC State 🐺</p>


<div class="pfp-container">
  <img src={`/me.jpg`} alt="Abel Lu" style="max-width: 100%; min-height: min(480px, calc(100vw - 2rem))" />
</div>
<div class="cert-container">
  {#each certifications as certification}
    <Certification {...certification} />
  {/each}
</div>

<h2>About Me 📖</h2>

<p>
  I'm currently an undergrad at NC State University, where I study computer
  science with a focus on <b>full-stack development and cloud infrastructure</b>.
</p>
<p>
  Outside of school, I work as a Platform Engineering Intern at <a href="https://renci.org">RENCI</a>,
  where I create and deploy software that improves the developer experience within the
  organization.
</p>
<p>
  In my free time, I'm brushing up on <b>Go</b> and <b>Terraform</b> to keep my skills sharp.
</p>

<h2>Skills 💻</h2>
<ul>
  {#each skills as skill}
    <SkillGroup {...skill} />
  {/each}
</ul>

<h2>Contact Me 📤</h2>
<ul>
  <li>Email: aluprof4@gmail.com</li>
  <li>Phone: +1 269-501-7211</li>
</ul>


<svelte:head>
  <title>abellu.online</title>
  <meta name="description" content="Hey I'm Abel 😎" />
</svelte:head>

<style>
  h1 {
    margin-bottom: 0;
    font-size: 2.5rem;
  }
  .cert-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    height: fit-content;
  }
  .pfp-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 1rem 0;
    background-color: rgb(30, 30, 30);
    /* aspect-ratio: 3/2; */
  }
  @media (max-width: 768px) {
    .pfp-container {
      flex-direction: column;
    }
  }
</style>
