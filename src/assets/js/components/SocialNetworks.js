export default Vue.component('SocialNetworks', {
    template: `<SocialNetwork name="GitHub" link="https://github.com/endermctv/EnderBot" />
<SocialNetwork name="Discord" link="https://discord.gg/3BmKsX2" />`,
    name: 'SocialNetworks'
})

Vue.component('SocialNetwork', {
    props: ['name', 'link'],
    template: `<li class="social-network">
    <a :href="link" target="_blank" :title="name">
        <Icon :icon="name.toLowerCase()" />
    </a>
</li>`
})
