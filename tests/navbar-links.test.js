import { Selector, t } from "testcafe";
import Navbar from "../page_objects/components/Navbar";
import CartPage from "../page_objects/pages/CartPage";
import HomePage from "../page_objects/pages/HomePage";

const navbar = new Navbar()
const cartPage = new CartPage()
const homePage = new HomePage()

fixture `Home link test`
    .page `https://www.demoblaze.com/index.html`
    .beforeEach(async t => {
        await t.setTestSpeed(1)
    })

test('User can click on home link in navbar', async t => {
    await t.click(navbar.linkToHome)

    await t.expect(homePage.productsContainer.exists).ok()
})

test('User can click on contact link in navbar', async t => {
    await t.click(navbar.linkToContact)
    
    await t.expect(homePage.contactFormMessagePopup.innerText).contains('New message')
})

test('User can click on About us link in navbar', async t => {    
    await t.click(navbar.linkToAboutUs)
    
    await t.expect(homePage.aboutUsVideoPopup.exists).ok
})

test('User can click on Cart link in navbar', async t => {
    await t.click(navbar.linkToCart)
    
    await t.expect(cartPage.placeOrderButton.exists).ok
})

test('User can click on Log In link in navbar', async t => {    
    await t.click(navbar.linkToLogIn)
    
    await t.expect(homePage.logInMessagePopup.innerText).contains('Log in')
})

test('User can click on Sign In link in navbar', async t => {    
    await t.click(navbar.linkToSignIn)
    
    await t.expect(homePage.signInMessagePopup.innerText).contains('Sign up')
})