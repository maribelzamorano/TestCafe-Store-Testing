import HomePage from "../page_objects/pages/HomePage";
import ProductPage from "../page_objects/pages/ProductPage";

const homePage = new HomePage()
const productPage = new ProductPage()

fixture `Product Details`
    .page `https://www.demoblaze.com/index.html`
    .beforeEach(async t => {
        await t.setTestSpeed(1)
    })


test('User can click on a product to see product details', async t => {
    await t.click(homePage.productLink)
    
    await t.expect(productPage.productDescriptionMessage.exists).ok()
})