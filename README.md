# Information about the TestCafe testing project of a store website
The page to test is: https://www.demoblaze.com/index.html

## Tests created
- Links in Navigation Bar Component
- Log In function
- Sign Up function
- See Product Detail
- Add a Product to the Cart
- Place an order

### version
The TestCafe version.

```yaml
    version: "1.15.0"
```
### Run TestCafe Tests

Scripts to run the tests

```yaml
    name: Run Tests on Chrome
        with:
            args: "npm run test:chrome"

    name: Run Tests on Chrome Headless
        with:
            args: "npm run test:chrome:headless"

    name: Run Tests on Chrome 5 concurrent browsers
        with:
            args: "npm run test:chrome:5"
        
    name: Run Tests on different browsers Chrome, Firefox
        with:
            args: "npm run test:multilple"
```

## Log In Test

Log In into the page, by passing 2 arguments: username and password.\
    - Click on the Log In link in the Navigation Bar.\
    - Write "username" in the username input box.\
    - Write "password" in the password input box.\
    - Click on Log In Button.\
    - Check if Log Out Button exists to confirm the log in action.

## Sign Up Test

Sign Up to the page, by passing 2 arguments: username and password.\
    - Click on the Sign Up link in the Navigation Bar.\
    - Write "username" in the username input box by using a random text with the NANOID library.\
    - Write "password" in the password input box.\
    - Click on Sign Up Button.\
    - Check if the Native Dialog Box contains the text "Sign up successful.".

## Navigation Bar Links Tests

Contains 6 tests to check if all links in the Navigation Bar Component work.\
    - Click on Home Link\
        - Check if Products Container exist.\
    - Click on Contact Link\
        - Check if contact form pop up appears.\
    - Click on About Us Link\
        - Check if About Us pop up Video appears.\
    - Click on Cart Link\
        - Check if Place Order button exists.\
    - Click on Log In Link\
        - Check on Log In form appears.\
    - Click on Sign Up Link\
        - Check if Sign Up form appears.

## Product Details Test

Click on a Product to see Prodct Details.\
    - Click on a Product within the Home Page.\
    - Check if Product Description exists.

## Add Product to Cart

Add a product to the Cart.\
    - Click on a Product.\
    - Click on Add Product Button.\
    - Go to Cart.\
    - Check if Product was added to the Cart List.

## Place an Order

Add a product to the Cart.\
    - Click on a Product.\
    - Click on Add Product Button.\
    - Go to Cart.\
    - Click on Place Order Button.\
    - Fill order form with content.\
    - Click on Purchase Button.\
    - Check if Success Message appears.
