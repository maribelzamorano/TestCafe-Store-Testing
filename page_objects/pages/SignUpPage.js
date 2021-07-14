import { Selector, t } from "testcafe";

class SignUpPage{
    constructor(){
        this.usernameInput = Selector('#sign-username')
        this.passwordInput = Selector('#sign-password')
        this.signUpButton = Selector('.btn-primary').withText('Sign up')
    }

    async singUpToApp(username, password){
        await t
            .typeText(this.usernameInput, username, { paste: true, replace: true})
            .typeText(this.passwordInput, password, { paste: true, replace: true})
    }
}

export default SignUpPage