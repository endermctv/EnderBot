export default Vue.component('Input', {
    props: ['type', 'name', 'id'],
    template: `<input :type="type" :name="name" :id="id" class="form-control" />`,
    name: 'Input'
})
