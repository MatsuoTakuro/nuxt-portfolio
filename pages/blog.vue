<template>
    <div>
        <div>
        <h1>Blog</h1>
        <p>Sharing my everyday life as an engineer.</p>
        <div v-for="singleData in data" :key="singleData.id">
            <div>
                <!-- <pre>{{ singleData }}</pre> -->
                <h3>{{ singleData.title }}</h3>
                <p>{{ singleData.description }}</p>
                <p>{{ singleData.date }}</p>
                <NuxtLink :to="singleData.path">Read More</NuxtLink>
            </div>
            <div>
                <nuxt-img :src="singleData.image" alt="blog-image" format="webp" />
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useAsyncData("blogQuery", () =>
    queryCollection("blog")
    .order('date', 'ASC')
    .all()
)
</script>
