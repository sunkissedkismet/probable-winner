<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogout = () => {
  router.push("/"); // Redirect to login
};
</script>

<template>
  <div
    class="h-screen overflow-hidden lg:overflow-auto bg-[#FCE7C7] dark:bg-[#4CA1AF] text-[#4CA1AF] dark:text-[#A8E1FC]"
  >
    <!-- Header -->
    <header
      class="flex justify-between items-center p-4 border-b border-[#FECF8F] dark:border-[#A8E1FC] bg-[#FFF7F0] dark:bg-[#4CA1AF] shadow-md"
    >
      <h1 class="text-2xl font-bold text-[#4CA1AF] dark:text-[#A8E1FC]">
        BlueHaven
      </h1>
      <button
        @click="handleLogout"
        class="px-4 py-2 text-sm font-medium text-white bg-[#4CA1AF] dark:bg-[#A8E1FC] rounded-lg hover:bg-[#A8E1FC] dark:hover:bg-[#FECF8F] transition"
      >
        Logout
      </button>
    </header>

    <!-- Main Content (Wireframe) -->
    <main class="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- Mock Panel 1 -->
      <div
        class="h-40 bg-[#FFF7F0] dark:bg-[#4CA1AF] border border-[#FECF8F] dark:border-[#A8E1FC] rounded-lg flex items-center justify-center"
      >
        <span class="text-[#4CA1AF] dark:text-[#A8E1FC]">Panel 1</span>
      </div>

      <!-- Mock Panel 2 -->
      <div
        class="h-40 bg-[#FFF7F0] dark:bg-[#4CA1AF] border border-[#FECF8F] dark:border-[#A8E1FC] rounded-lg flex items-center justify-center"
      >
        <span class="text-[#4CA1AF] dark:text-[#A8E1FC]">Panel 2</span>
      </div>

      <!-- Mock Panel 3 -->
      <div
        class="h-40 bg-[#FFF7F0] dark:bg-[#4CA1AF] border border-[#FECF8F] dark:border-[#A8E1FC] rounded-lg flex items-center justify-center"
      >
        <span class="text-[#4CA1AF] dark:text-[#A8E1FC]">Panel 3</span>
      </div>

      <!-- Mock Panel 4 -->
      <div
        class="h-40 bg-[#FFF7F0] dark:bg-[#4CA1AF] border border-[#FECF8F] dark:border-[#A8E1FC] rounded-lg flex items-center justify-center"
      >
        <span class="text-[#4CA1AF] dark:text-[#A8E1FC]">Panel 4</span>
      </div>

      <!-- Mock Panel 5 -->
      <div
        class="h-40 bg-[#FFF7F0] dark:bg-[#4CA1AF] border border-[#FECF8F] dark:border-[#A8E1FC] rounded-lg flex items-center justify-center"
      >
        <span class="text-[#4CA1AF] dark:text-[#A8E1FC]">Panel 5</span>
      </div>

      <!-- Mock Panel 6 -->
      <div
        class="h-40 bg-[#FFF7F0] dark:bg-[#4CA1AF] border border-[#FECF8F] dark:border-[#A8E1FC] rounded-lg flex items-center justify-center"
      >
        <span class="text-[#4CA1AF] dark:text-[#A8E1FC]">Panel 6</span>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Ensure no scroll on large screens, but allow on smaller screens */
@media (min-width: 1280px) {
  .h-screen {
    overflow: hidden;
  }
}

@media (max-width: 1279px) {
  .h-screen {
    overflow-y: auto;
  }
}

/* Responsive Grid Behavior */
@media (max-width: 640px) {
  main {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  main {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
