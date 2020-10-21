Vue.component('container', {
  template: '<span>Le bot est en ligne</span>'
})

Vue.component('navbar', {
  template: `<nav class="navbar navbar-dark">
    <ul class="navbar-items">
      <navbar-links></navbar-links>
    </ul>
    <navbar-right></navbar-right>
  </nav>`
})

Vue.component('navbar-links', {
  template: `<li class="navbar-item">
    <a href="/">Accueil</a>
</li>`
})

Vue.component('navbar-right', {
  template: `<button v-on:click="changeTheme"><i class="fas fa-moon"></i></button>`
})

Vue.component('footer-page', {
  template: `<footer>
    <p class="text-align-center">&copy; EnderBot, ${new Date().getFullYear()}. Tous droits réservés.</p>
</footer>`
})

var content = new Vue({
  el: '#content'
})
var navbar = new Vue({
  el: 'navbar'
})
var navbarRight = new Vue({
  methods: {
    changeTheme: function(){
      document.querySelector('body').classList.add('dark')
    }
  }
})
var footer = new Vue({
  el: 'footer-page'
})
