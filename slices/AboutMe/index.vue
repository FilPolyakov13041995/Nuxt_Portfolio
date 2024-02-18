<script setup lang="ts">
import { ref } from "vue";
import { type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.AboutMeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      class="text-white grid grid-cols-1 md:grid-cols-3 gap-4 items-center mx-auto"
    >
      <div class="col-span-1 row-span-2">
        <PrismicRichText
          :field="slice.primary.project_title"
          class="font-semibold leading-6 tracking-wider text-center md:text-left pb-4 text-2xl"
        />
        <p class="font-light text-xl md:text-3xl">
          {{ slice.primary.description }}
        </p>
      </div>
      <div
        class="w-full h-full"
        v-for="(item, index) in slice.items"
        :key="index ?? ''"
      >
        <PrismicImage
          v-if="index < 4"
          :field="item.images"
          class="w-full h-full rounded-2xl"
        />
      </div>
    </div>
  </Bounded>
</template>
