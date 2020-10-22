export default Vue.component('Contact', {
    template: `
<div class="col-md-4">
    <h2>Contact</h2>
    <form method="POST">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="name">Nom et prénom</label>
                    <Input type="text" name="name" id="name" value="Salut ! Ceci est un test." />
                </div>
            </div>
            <div class="col-md-12">
                <Checkbox name="check" id="check" label="J'ai lu et j'accepte les règles" />
            </div>
        </div>
    </form>
</div>
`,
    name: 'Contact'
})
