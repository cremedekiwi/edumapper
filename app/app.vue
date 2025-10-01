<template>
  <header class="h-[60px] flex items-center ">
    <img src="assets/img/logo.png" class="h-[28px] pl-[12px]" />
  </header>
  <main class="h-screen flex flex-col items-center bg-beige/100">
    <section class="mt-[24px] pl-[16px] h-[144px] w-[343px] text-white flex flex-col justify-center bg-linear-to-r from-orange to-purple rounded-2xl">
      <span class="text-[20px] font-bold">Lycée Gaston Berger</span>
      <div class="text-[14px] flex gap-[4px]">
        <span>Lille</span>
        <span>Lycée Public</span>
      </div>
      <button class="bg-white text-black py-[8px] w-[87px] rounded-[1000px] mt-[16px]">Modifier</button>
    </section>
    <section class="w-[343px] h-[62px] bg-white flex items-center justify-between px-[16px] rounded-2xl mt-[16px]">
      <span>Classe</span>
      <span class="text-gris text-[14px]">À compléter</span>
    </section>
    <section class="w-[343px] h-[62px] bg-white flex items-center justify-between px-[16px] rounded-2xl mt-[16px]">
      <span>Spécialités</span>
      <span class="text-gris text-[14px]">À compléter</span>
    </section>
    <section class="w-[343px] h-[62px] bg-white flex items-center justify-between px-[16px] rounded-2xl mt-[16px]">
      <span>Notes</span>
      <span class="text-gris text-[14px]">À compléter</span>
    </section>
    <button class="bg-white text-gris py-[16px] w-[124px] rounded-[1000px] mt-[16px]">Confirmer</button>
  </main>
</template>

<script>
  console.log("hello")
</script>
