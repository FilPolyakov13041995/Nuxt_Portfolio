<template>
  <Bounded as="header" class="!py-4 md:!py-6 lg:!py-8">
    <div class="flex gap-4 items-center justify-between flex-col sm:flex-row">
      <Logo />
      <nav>
        <ul class="flex">
          <li
            v-for="(item, index) in settings?.data.navigation"
            :key="item.label ?? ''"
          >
            <PrismicLink
              :field="item.link"
              :class="{ 'mr-8': index !== settings.data.navigation.length - 1 }"
            >
              {{ item.label.toUpperCase() }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>

<script setup lang="ts">
const settings = useSettings();
</script>
