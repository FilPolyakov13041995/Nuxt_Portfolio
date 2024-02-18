<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref } from 'vue'
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


const slide = ref('style')
const lorem = ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.')

</script>

<template>
  <Bounded
    class="!py-4 md:!py-6 lg:!py-8"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="py-10 font-mono">
      <h3
        class="tracking-wide text-center md:text-left text-2xl md:text-4xl text-slate-100"
      >
        {{ slice.primary.heading }}
      </h3>
    </div>
  </Bounded>
</template>
