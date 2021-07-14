import { Selector, t } from "testcafe";

class Navbar{
    constructor(){
        this.linkToHome = Selector('a').withText('Home')
        this.linkToContact = Selector('a').withText('Contact')
        this.linkToAboutUs = Selector('a').withText('About us')
        this.linkToCart = Selector('a').withText('Cart')
        this.linkToLogIn = Selector('#login2')
        this.linkToSignIn = Selector('#signin2')
    }
}

export default Navbar