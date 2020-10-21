export default Vue.component('Navbar', {
    template: `<nav class="navbar">
    <div class="navbar-left">
    <!--    <ul class="navbar-items">-->
    <!--        <li v-for="item in items" :key="item.message">-->
    <!--            {{ item.message }}-->
    <!--        </li>-->
    <!--    </ul>-->
        <ul class="navbar-items">
            <NavbarItems></NavbarItems>
        </ul>
    </div>
    <NavbarRight></NavbarRight>
</nav>`,
    name: 'Navbar'
})
