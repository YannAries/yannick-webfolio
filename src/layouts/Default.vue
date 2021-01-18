<template>
  <div>
    <slot/>
    <footer class="d-flex py-4 justify-content-center text-center text-white">
      <ul>
        <li>
          <span>© {{ new Date().getFullYear() }} Yannick Guion-Firmin</span>
        </li>
        <li>
          <span>Développé avec <a href="https://gridsome.org/" rel="noopener noreferrer" target="_blank">Gridsome</a> et hébergé sur <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a></span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

footer {
  background-color: #396f3a;
}

li {
  list-style: none;
}
</style>