<template>
  <h2>Home Page</h2>
</template>

<script setup>
const { data } = await useFetch("/api/products");
definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped></style>
