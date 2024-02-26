<script setup lang="ts">
import { type Content } from "@prismicio/client";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init();
})

defineProps(
  getSliceComponentProps<Content.AboutMeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { client } = usePrismic();
const { data: about } = useAsyncData("about", () =>
  client.getByUID("page", "about")
);
</script>

<template>
  <Bounded
    class="overflow-x-hidden"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div data-aos="fade-right" class="text-white py-7 md:w-2/3">
      <PrismicRichText
        :field="slice.primary.project_title"
        class="font-semibold leading-6 tracking-wider text-center md:text-left pb-4 text-2xl"
      />
      <p class="font-light text-xl md:text-3xl">
        {{ slice.primary.description }}
      </p>
    </div>
    <div data-aos="fade-left" class="flex justify-center md:justify-start gap-6">
      <div
        class="w-full h-auto sm:w-72 sm:h-96"
        v-for="(item, index) in slice.items"
        :key="index ?? ''"
      >
        <PrismicImage
          v-if="index < 3"
          :field="item.images"
          class="w-full h-full rounded-xl"
        />
      </div>
    </div>
  </Bounded>
</template>
