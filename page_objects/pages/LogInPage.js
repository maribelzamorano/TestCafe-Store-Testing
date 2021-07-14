import { Selector, t } from "testcafe";

class LogInPage{
    constructor(){
        this.usernameInput = Selector('#loginusername')
        this.passwordInput = Selector('#loginpassword')
        this.logInButton = Selector('.btn-primary').withText('Log in')
        this.logOutButton = Selector('#logout2')
    }

    async loginToApp(username, password){
        await t
            .typeText(this.usernameInput, username, { paste: true, replace: true})
            .typeText(this.passwordInput, password, { paste: true, replace: true})
            .click(this.logInButton)
    }
}

export default LogInPage