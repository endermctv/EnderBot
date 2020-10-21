import NavbarItems from './components/NavbarItems.js'
import Contact from './components/Contact.js'
import Icon from './components/Icon.js'
import Navbar from './components/Navbar.js'
import Checkbox from './components/Checkbox.js'
import NavbarRight from './components/NavbarRight.js'
import SocialNetworks from './components/SocialNetworks.js'
//import FooterPage from './components/Footer.js';

twemoji.parse(document.body)

export default {
    components: {
        Navbar,
        NavbarItems,
        NavbarRight,
        Contact,
        Icon,
        Checkbox,
        SocialNetworks,
        //FooterPage
    }
}

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
