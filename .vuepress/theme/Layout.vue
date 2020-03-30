<template>
    <div>
        <Navigation :scroll="scrollTop"/>
        <main>
            <div class="announcement">
                <Content slot-key="announcement"/>
            </div>
            <Content/>
            <Footer/>
        </main>
        <aside>
            <Content slot-key="aside"/>
        </aside>
        <Trackers :optIn="optIn"/>
        <CookieConsent :show="!consentAnswered"/>
    </div>
</template>
<style lang="css">
    @import './styles/main.css';
</style>
<script>
    import CookieConsent from '@theme/components/CookieConsent.vue';
    import Footer from '@theme/components/Footer.vue';
    import Navigation from '@theme/components/Navigation.vue';
    import Trackers from '@theme/components/Trackers.vue';
    import EventBus from '@theme/plugins/EventBus';
    import Cookies from 'js-cookie';

    export default {
        name: 'Layout',
        components: {
            Navigation,
            Footer,
            CookieConsent,
            Trackers,
        },
        data() {
            return {
                scrollTop: 0,
                consentAnswered: null,
                optIn: null,
            };
        },
        methods: {
            onScroll(target) {
                this.scrollTop = target.scrollTop;
            },
            initScroll() {
                let htmlEl = document.querySelector('html');
                let mainEl = htmlEl.querySelector('main');
                window.addEventListener('scroll', () => this.onScroll(htmlEl));
                mainEl.addEventListener('scroll', () => this.onScroll(mainEl));
            },
            initCards($el) {
                $el.querySelectorAll('.cards > ul')
                    .forEach(el => {
                        el.style.cssText = `--total: '${el.childElementCount}'`;
                    });
            },
            initRibbon($el) {
                $el.querySelectorAll('.ribbon > ul > li')
                    .forEach(el => {
                        el.addEventListener('mousedown', function () {
                            [...this.parentNode.children].forEach((child) => child.classList.remove('active'));
                            this.classList.add('active');
                        });
                        el.addEventListener('hover', function () {
                            [...this.parentNode.children].forEach((child) => child.classList.remove('active'));
                            this.classList.add('active');
                        })
                    });
            },
            resetCookies() {
                Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));
            },
            onOptIn() {
                this.$gtag.optIn();
            },
            onOptOut() {
                // clean all cookies
                this.resetCookies();
                this.$gtag.optOut();
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.initScroll();
                this.initCards(document);
                this.initRibbon(document);
            });
        },
        created() {
            this.optIn = Cookies.get('opt_in') === '1';
            this.consentAnswered = typeof Cookies.get('opt_in') !== 'undefined';
            EventBus.$on('optIn', (value) => {
                this.optIn = value;
                this.consentAnswered = true;

                if (value) {
                    this.onOptIn();
                    Cookies.set('opt_in', '1');

                    return;
                }
                this.onOptOut();
                Cookies.set('opt_in', '0');
            });
            EventBus.$on('optReset', (value) => {
                this.resetCookies();
                this.optIn = false;
                this.consentAnswered = false;
            });
        },
    }
</script>
