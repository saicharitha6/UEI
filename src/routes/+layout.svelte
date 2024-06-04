<script>
  // @ts-nocheck
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<div class="app">
  <Header />
  <main>
    <!-- Content of your main section -->
    <slot />
  </main>
  <Footer />
</div>

<!-- <style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    /* box-sizing: border-box; */
  }
</style> -->
