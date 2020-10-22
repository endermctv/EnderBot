import NavbarItems from './components/NavbarItems.js'
import Contact from './components/Contact.js'
import Icon from './components/Icon.js'
import Navbar from './components/Navbar.js'
import NavbarRight from './components/NavbarRight.js'
import SocialNetworks from './components/SocialNetworks.js'
import Footer from './components/Footer.js'

import Input from './components/Forms/Input.js'
import Checkbox from './components/Forms/Checkbox.js'

twemoji.parse(document.body)

export default {
    components: {
        Navbar,
        NavbarItems,
        NavbarRight,
        Contact,
        Icon,
        SocialNetworks,
        Footer,

        // Formulaires
        Input,
        Checkbox,
    }
}

let root = new Vue({el:'#root'})

// const navbarItems = new Vue({
//     el: 'ul.navbar-items',
//     data: {
//         items: [
//             {message: 'Foo'},
//             {message: 'Bar'}
//         ]
//     }
// })
//
