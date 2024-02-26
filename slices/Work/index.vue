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
  getSliceComponentProps<Content.WorkSlice>([
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
    <div class="py-10 font-mono" data-aos="fade-right">
      <h3
        class="tracking-wide text-center md:text-left text-2xl md:text-4xl text-slate-100"
      >
        {{ slice.primary.heading }}
      </h3>
    </div>
  </Bounded>
</template>
