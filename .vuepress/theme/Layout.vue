<template>
    <div>
        <Navigation/>
        <main>
            <Content/>
            <Footer/>
        </main>
    </div>
</template>
<style lang="css">
    @import './styles/main.css';
</style>
<script>
    import Navigation from '@theme/components/Navigation.vue'
    import Footer from '@theme/components/Footer.vue'

    export default {
        name: 'Layout',
        components: {
            Navigation,
            Footer
        },
    }
</script>
