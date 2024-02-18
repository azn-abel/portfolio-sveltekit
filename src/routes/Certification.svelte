<script lang="ts">
  export let name: string;
  export let image_url: string;
  export let cert_url: string;
</script>

<a href={cert_url} target="_blank" rel="noreferrer">
  <div class="cert">
    <img src={image_url} alt="CKAD" style="width: 160px" />
  </div>
</a>

<style>
  .cert {
    width: 160px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    /* padding: 16px;
    border-radius: 8px; */
    margin: 16px;
    transition: 0.5s;
  }
  p {
    color: white;
  }
  a:hover {
    color: white;
    transform: scale(1.05);
  }
</style>
