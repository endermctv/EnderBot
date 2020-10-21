export default Vue.component('Checkbox', {
    props: ['name', 'id', 'checked'],
    template: `<input type="checkbox" :name="name" :id="id" checked />`,
    name: 'Checkbox'
})