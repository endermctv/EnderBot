export default Vue.component('Icon', {
    props: ['icon'],
    template: `<i :class="'fas fa-' + icon"></i>`,
    name: 'Icon'
})
