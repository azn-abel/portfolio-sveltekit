<script>
  import Certification from './Certification.svelte';

  import certifications from '$lib/certifications.json'
</script>

<h1>Hey, I'm Abel 🐳</h1>
<i>
  This website is still in the works, but feel free to visit
  <a href="https://azn-abel.github.io">azn-abel.github.io</a>
  for now!
</i>
<p>
  I'm currently an undergrad student at NC State University, where I study computer science
  with a focus on <b>full-stack development, DevOps, and platform engineering</b>. Outside of school,
  I work as an intern at <a href="https://renci.org">RENCI</a>, where I create and deploy software
  that improves developer productivity within the organization. On the side, I'm learning Go and SvelteKit
  to keep my skills sharp.
</p>
<h2>Notable Skills</h2>
<ul>
  <li>
    Programming Languages:
    <ul>
      <li>
        Python, Go, JavaScript/TypeScript, Java, SQL, C
      </li>
    </ul>
  </li>
  <li>
    Frontend:
    <ul>
      <li>HTML, CSS, JavaScript/TypeScript, React, Redux, Svelte, htmx</li>
    </ul>
  </li>
  <li>
    Backend:
    <ul>
      <li>
        Flask, net/http, Spring Boot, Express.js
      </li>
    </ul>
  </li>
  <li>
    Telemetry:
    <ul>
      <li>
        Prometheus, Grafana, Jaeger
      </li>
    </ul>
  </li>
  <li>
    Databases:
    <ul>
      <li>
        PostgreSQL, Redis, Elasticsearch
      </li>
    </ul>
  </li>
  <li>
    Containers/Cloud:
    <ul>
      <li>
        Docker, Podman, Kubernetes, AWS (foundational)
      </li>
    </ul>
  </li>
</ul>
<h2>Certifications</h2>
<div class="cert-container">
  {#each certifications as certification}
    <Certification {...certification}/>
  {/each}
</div>
<style>
  .cert-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    height: fit-content
  }
</style>


