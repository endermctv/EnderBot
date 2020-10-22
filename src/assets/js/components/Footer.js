export default Vue.component('Footer', {
    template: `
<footer>
    <p>{{ copyright }}</p>
    <div class="row">
        <Contact />
    </div>
</footer>
`,
    name: 'Footer'
})
