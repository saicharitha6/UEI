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
