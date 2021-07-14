import { Selector, t } from "testcafe";

class ProductPage{
    constructor(){
        this.productDescriptionMessage = Selector('#more-information')
        this.addToCartButton = Selector('a').withText('Add to cart')
    }

    async addProductToCart(){
        await t
            .click(this.addToCartButton)
    }
}

export default ProductPage