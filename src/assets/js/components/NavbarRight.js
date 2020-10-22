export default Vue.component('NavbarRight', {
    template: `<div class="navbar-right">
    <SocialNetworks />
    <button @click="changeTheme" title="Changer le thème" aria-label="Changer le thème">
        <Icon icon="moon" />
    </button>
</div>`,
    name: 'NavbarRight',
    methods: {
        changeTheme: function(){
            document.querySelector('body').classList.add('dark')
        }
    }
})
