import CartPage from "../page_objects/pages/CartPage";
import HomePage from "../page_objects/pages/HomePage";
import Navbar from "../page_objects/components/Navbar";
import ProductPage from "../page_objects/pages/ProductPage";


const navbar = new Navbar()
const cartPage = new CartPage()
const homePage = new HomePage()
const productPage = new ProductPage()


fixture `Place order test`
    .page `https://www.demoblaze.com/index.html`
    .beforeEach(async t => {
        await t.setTestSpeed(1)
    })

test('User can place a new order', async t => {
    await t.setNativeDialogHandler(() => true)
    await t.click(homePage.productLink)
    productPage.addProductToCart()
    await t.click(navbar.linkToCart)
    cartPage.placeOrder('Maribel Zamorano', 'Mexico', 'Hermosillo', '0138083033109130', 'July', '2024')

    await t.expect(cartPage.orderPlacedMessage.innerText).contains('Thank you for your purchase!')
})