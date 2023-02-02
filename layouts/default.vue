<template>
  <i-layout>
    <i-layout-header>
      <i-nav size="sm">
        <i-nav-item to="/">Home</i-nav-item>
        <i-nav-item to="/about">About</i-nav-item>
      </i-nav>
    </i-layout-header>

    <i-layout vertical>
      <i-layout-aside class="_background:gray-50"> Left Aside </i-layout-aside>
      <i-layout-content>
        <slot />
      </i-layout-content>
    </i-layout>
    <i-layout-footer class="_position:fixed-bottom _background:primary">
      Footer
    </i-layout-footer>
  </i-layout>
</template>

<style style="scss" scoped>
.layout-aside {
  width: 100px;
}

a.router-link-exact-active {
  color: darkorange;
}
</style>
