export default Vue.component('NavbarRight', {
    template: `<div class="navbar-right">
    <div class="social-networks">
        <ul>
            <SocialNetworks></SocialNetworks>
        </ul>
    </div>
    <button :click="changeTheme" title="Changer le thème" aria-label="Changer le thème">
        <Icon icon="moon" />
    </button>
</div>`,
    name: 'NavbarRight'
})
