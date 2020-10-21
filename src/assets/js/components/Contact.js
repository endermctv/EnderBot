export default Vue.component('Contact', {
    template: `<div class="col-md-4">
    <h2>Contact</h2>
    <form method="POST">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="name">Nom et prénom</label>
                    <input type="text" name="name" id="name" class="form-control" />
                </div>
            </div>
        </div>
    </form>
</div>`,
    name: 'Contact'
})
// new Vue({
//     el: 'contact'
// })
