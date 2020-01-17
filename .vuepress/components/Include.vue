<template>
    <Content :page-key="page.key"/>
</template>
<script>
    export default {
        props: ['path'],
        computed: {
            page() {
                return this.$site['pages'].find(page => page.relativePath.indexOf(this.path) === 0);
            }
        }
    }
</script>
