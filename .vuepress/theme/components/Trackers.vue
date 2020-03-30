<template>
    <div v-if="optIn">
        <!-- Start of HubSpot Embed Code -->
        <script type="text/javascript" id="hs-script-loader" async defer src="https://js.hs-scripts.com/7061179.js"></script>
        <!-- End of HubSpot Embed Code -->
    </div>
</template>
<script>
    export default {
        props: {
            'optIn': { type: Boolean, default: false },
        }
    }
</script>
