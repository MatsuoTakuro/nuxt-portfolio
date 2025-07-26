<template>
    <div class="wrapper">
        <div class="container">
            <h1>Contact</h1>
            <p>Feel free to contact me.</p>
            <form :action="`https://formspree.io/f/${formspreeId}`" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required/>
                <label htmlFor="textarea">Your Message</label>
                <textarea name="message" rows="10" id="textarea" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const formspreeId = config.public.FORMSPREE_ID

useHead({
    title: "Contact",
    meta: [
        { name: "description", content: "Contact page description" }
    ],
})
</script>
