export default defineNuxtRouteMiddleware((to, from) => {
  const user = true;
  if (!user) {
    return navigateTo("/about");
  } else {
    abortNavigation();
  }
});
