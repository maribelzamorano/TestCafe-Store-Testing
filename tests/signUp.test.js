import { nanoid } from 'nanoid';
import Navbar from "../page_objects/components/Navbar";
import SignUpPage from "../page_objects/pages/SignUpPage";

const signUpPage = new SignUpPage()
const navbar = new Navbar()

fixture `Sign Up test`
    .page `https://www.demoblaze.com/index.html`
        .beforeEach(async t => {
            await t.setTestSpeed(1)
        })

test('User can sign up to the website', async t =>{
    const randomUserName = 'maribel_' + nanoid();

    await t.setNativeDialogHandler(() => true)
    await t.click(navbar.linkToSignIn)
    signUpPage.singUpToApp(randomUserName, 'password')
    await t.click(signUpPage.signUpButton)
    
    const history = await t.getNativeDialogHistory()

    await t.expect(history[0].text).eql('Sign up successful.')
})