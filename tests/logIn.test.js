import Navbar from "../page_objects/components/Navbar";
import LogInPage from "../page_objects/pages/LogInPage"

const logInPage = new LogInPage()
const navbar = new Navbar()

fixture `Log In test`
    .page `https://www.demoblaze.com/index.html`
        .beforeEach(async t => {
            await t.setTestSpeed(1)
        })

test('User can log in to the website', async t =>{
    await t.click(navbar.linkToLogIn)
    logInPage.loginToApp('username', 'password')

    await t.expect(logInPage.logOutButton.exists).ok()
})