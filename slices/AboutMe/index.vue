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

const slide = ref(1)

</script>




<template>

  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >

  <div
      class="text-white grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center"
    >
      <div>
        <PrismicRichText
          :field="slice.primary.project_title"
          class="font-semibold leading-6 tracking-wider text-center md:text-left pb-4 text-2xl"
        />
        <p class="font-light text-xl md:text-3xl">
          {{ slice.primary.description }}
        </p>
      </div>
      <div class="w-2/3">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-type="flat"
          control-color="white"
          navigation
          arrows
          height="auto"
          class="bg-black first-line:text-white  rounded-2xl"
        >
          <template v-for="(item, index) in slice.items" :key="item.images ?? index" >
            <q-carousel-slide v-if="index < 3" :name="index"  :key="index" class="column no-wrap flex-center p-0">
              <div class="text-center">
                <PrismicImage :field="item.images" class=" w-full" />
              </div>
            </q-carousel-slide>
          </template>
        </q-carousel>
      </div>
      <!-- <div
        class="w-full h-full"
        v-for="(item, index) in slice.items"
        :key="index ?? ''"
      >
        <PrismicImage
          v-if="index < 4"
          :field="item.images"
          class="w-full h-full rounded-2xl"
        />
      </div> -->
    </div>
  </Bounded>
</template>