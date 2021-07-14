import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.productsContainer = Selector('#tbodyid')
        this.contactFormMessagePopup = Selector('div')
        this.aboutUsVideoPopup = Selector('#example-video_html5_api')
        this.logInMessagePopup = Selector('#logInModalLabel')
        this.signInMessagePopup = Selector('#signInModalLabel')
        this.productLink = Selector('a').withExactText('Samsung galaxy s6')
    }
}

export default HomePage