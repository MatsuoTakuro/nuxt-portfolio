<template>
    <div>
        <div>
        <h1>Blog</h1>
        <p>Sharing my everyday life as an engineer.</p>
        <div v-for="singleData in data" :key="singleData.id">
            <div>
                <h3>{{ singleData.title }}</h3>
                <p>{{ singleData.excerpt }}</p>
                <p>{{ singleData.meta.date }}</p>
            </div>
            <div>
                <nuxt-img src="singleData.meta.image" alt="blog-image" format="webp" />
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useAsyncData("blogQuery", () =>
    queryCollection("blog").all()
)
</script>
