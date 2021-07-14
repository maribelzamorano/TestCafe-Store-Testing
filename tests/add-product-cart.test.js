import HomePage from "../page_objects/pages/HomePage";
import ProductPage from "../page_objects/pages/ProductPage";
import Navbar from "../page_objects/components/Navbar";
import CartPage from "../page_objects/pages/CartPage";

const homePage = new HomePage()
const productPage = new ProductPage()
const navbar = new Navbar()
const cartPage = new CartPage()

fixture `Add product to Cart`
    .page `https://www.demoblaze.com/index.html`
    .beforeEach(async t => {
        await t.setTestSpeed(1)
    })

test('User can add a product to the cart', async t => {
    await t.setNativeDialogHandler(() => true)
    await t.click(homePage.productLink)
    productPage.addProductToCart()
    await t.click(navbar.linkToCart)

    await t.expect(cartPage.productsInCart.innerText).contains('Samsung galaxy s6')
})