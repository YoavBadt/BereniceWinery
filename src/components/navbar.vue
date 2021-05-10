<template>
     <header class="h-12">
    <Wrapper class="flex items-center justify-between flex-row">
      <g-link to="/" class="logotext text-1xl">{{ $static.metadata.siteName }}</g-link>

      <nav class="text-xs flex gap-x-6 text-gray-600 uppercase">
        <g-link class="nav__link " to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/wines/">Wines</g-link>
        <g-link class="nav__link" to="/suits/">Suits</g-link>
        <g-link class="nav__link" to="/events/">Events</g-link>
        <!-- <g-link class="nav__link" to="/reviews/">Reviews</g-link> -->
        <g-link class="nav__link" to="/contact/">Contact</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
      </nav>
    </Wrapper>  

    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style>

.logotext{
    font-family: 'Vollkorn SC';
    font-weight: 900;
}
nav{
    font-family: "work sans"
}
.active--exact { /* Active Nav Link */
  @apply text-gray-900;
}
</style>