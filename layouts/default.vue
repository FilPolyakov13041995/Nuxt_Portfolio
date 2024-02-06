<template>
    <div>
        <Header />
        <slot/>
        <Footer />
        <div class="fixed inset-0 bg-gradient-to-t to-black from-gray-900 z-[-1]" />
    </div>
</template>

<script setup lang="ts">
const settings = useSettings()
const prismic = usePrismic()

useSeoMeta({
    title: settings.value?.data.site_title,
    description: settings.value?.data.meta_description,
    ogImage: prismic.asImageSrc(settings.value?.data.og_image)
})
</script>