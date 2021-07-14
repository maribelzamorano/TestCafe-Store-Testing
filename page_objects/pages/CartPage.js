import { Selector, t } from "testcafe";

class CartPage{
    constructor(){
        this.productsInCart = Selector('#tbodyid')
        this.placeOrderButton = Selector('.btn-success')
        this.nameOrderInput = Selector('#name')
        this.countryOrderInput = Selector('#country')
        this.cityOrderInput = Selector('#city')
        this.cardOrderInput = Selector('#card')
        this.monthOrderInput = Selector('#month')
        this.yearOrderInput = Selector('#year')
        this.purchaseButton = Selector('.btn-primary').withText('Purchase')
        this.cancelButton = Selector('.btn-secondary')
        this.orderPlacedMessage = Selector('.sweet-alert')
    }

    async placeOrder(name, country, city, card, month, year){
        await t.click(this.placeOrderButton)
            .typeText(this.nameOrderInput, name, { paste: true, replace: true})
            .typeText(this.countryOrderInput, country, { paste: true, replace: true})
            .typeText(this.cityOrderInput, city, { paste: true, replace: true})
            .typeText(this.cardOrderInput, card, { paste: true, replace: true})
            .typeText(this.monthOrderInput, month, { paste: true, replace: true})
            .typeText(this.yearOrderInput, year, { paste: true, replace: true})
            .click(this.purchaseButton)
    }
}

export default CartPage