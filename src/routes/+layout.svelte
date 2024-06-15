<script>
  // @ts-nocheck
  import "@fontsource/inter"; // Defaults to weight 400
  import "@fontsource/inter/400.css"; // Specify weight
  import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
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
