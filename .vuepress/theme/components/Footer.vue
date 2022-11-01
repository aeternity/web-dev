<template>
    <footer id="footer" class="section section--fancy">
        <div class="section-content section-content--fancy">
            <h2>&aelig;ternity newsletter</h2>
            <p>Sign up for the latest content and updates.</p>
            <form
                action="https://aeternity.us15.list-manage.com/subscribe/post?u=83a504836fa768f10619d053c&id=c2d8c3ba71"
                method="post" target="_blank" class="subscribe">
                <label><input type="email" name="EMAIL" placeholder="your.email@example.com"></label>
                <button type="submit" name="subscribe" class="button button--wide">Subscribe</button>
            </form>
        </div>
        <div class="footer-links">
            <ul class="footer-icons">
                <li class="footer-icon"><a href="https://github.com/aeternity">
                    <img src="../../../img/Footer_Github.svg" alt=""><span>GitHub</span></a>
                </li>
                <li class="footer-icon"><a href="https://forum.aeternity.com">
                    <img src="../../../img/Footer_Forum.svg" alt=""><span>Forum</span></a>
                </li>
                <li class="footer-icon"><a href="https://blog.aeternity.com">
                    <img src="../../../img/Footer_Medium.svg" alt=""><span>Medium</span></a>
                </li>
            </ul>
            <img src="../../../img/aeternity-logo-white-stacked.svg" alt="" class="footer-logo">
            <ul class="footer-icons">
                <li class="footer-icon"><a href="https://telegram.me/aeternity">
                    <img src="../../../img/Footer_Telegram.svg" alt=""><span>Telegram</span></a>
                </li>
                <li class="footer-icon"><a href="https://www.facebook.com/aeternityproject/">
                    <img src="../../../img/Footer_Facebook.svg" alt=""><span>Facebook</span></a>
                </li>
                <li class="footer-icon"><a href="https://twitter.com/aeternity">
                    <img src="../../../img/Footer_Twitter.svg" alt=""><span>Twitter</span></a>
                </li>
            </ul>
        </div>
        <div class="legal">
            <a href="https://github.com/aeternity/web-dev" target="_blank">
                <img src="../../../img/Footer_Github.svg" alt="">
                Edit this website
            </a>
            <a href="https://raw.githubusercontent.com/keypair/white-paper/master/aeternity-whitepaper.pdf" target="_blank">
                Whitepaper
            </a>
            <a @click.prevent="resetCookies()" href="#">Cookies</a>
            <a href="./cookies-policy.html">Legal imprint</a>
             <a @click.prevent="resetCookies()" href="#">Verification</a>
            <a href="https://etherscan.io/address/0xb22d1f1006aa02ee755e794d9c93dbec4b0bc8ae">Verification</a>
        </div>
    </footer>
</template>
<script>
    import EventBus from '@theme/plugins/EventBus';

    export default {
        methods: {
            resetCookies() {
                EventBus.$emit('optReset', true);
            },
        },
    };
</script>
