<script lang="ts">
    export let name: string
    export let image_url: string
    export let cert_url: string
</script>

<a href={cert_url} target="_blank" rel="noreferrer">
    <div class="cert">
        <img src={image_url} alt="CKAD" style="width: 256px"/>
        <p>{name}</p>
    </div>
</a>

<style>
  .cert {
    width: 256px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 16px;
    border-radius: 8px;
    margin: 16px;
    transition: 0.5s
  }
  a:hover {
    transform: scale(1.05);
  }
</style>

