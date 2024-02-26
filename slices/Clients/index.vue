<script setup lang="ts">
import { type Content } from "@prismicio/client";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init();
})

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ClientsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    class="!py-4 md:!py-6 lg:!py-8 overflow-x-hidden"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="py-20 font-mono" data-aos="fade-left">
      <div class="mb-20">
        <h3 class="tracking-wide text-2xl md:text-4xl text-center md:text-left text-slate-100">{{
          slice.primary.heading
        }}</h3>
      </div>
      <div class="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-4">
        <div v-for="item in slice.items" :key="item.icon ?? ''">
          <div v-if="item.icon">
            <IconClients :name="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>
