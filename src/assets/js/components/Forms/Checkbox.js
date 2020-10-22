export default Vue.component('Checkbox', {
    props: ['name', 'id', 'label', 'checked'],
    template: `
<div class="form-group">
    <input type="checkbox" :name="name" :id="id" />
    <label :for="id">{{ label }}</label>
</div>
`,
    name: 'Checkbox'
})
