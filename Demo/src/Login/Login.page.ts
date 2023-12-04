import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    username :`#js-login-email`,
    bntContinue:`#js-login-continue`,
    bntUserAndPass:`li[id='js-loginEmailPass'] div[class='login-options__option--description']`,
    password :`#j_password`,
    bntLogin :`button[class='button-primary js-login-email-password']`,
    bntSignin:`(//a)[12]`,
}

@PageContext({
    path: '/', 
    wrapper: `body`, //Padre  o nodo principal
})
export class LoginAlkostoPage extends Page {

    async Login() {
        await (await $(select.bntSignin)).click();

        await (await $(select.username)).addValue('hidatin809@frandin.com');

        await (await $(select.bntContinue)).click();
        
        await (await $(select.bntUserAndPass)).click();

        await (await $(select.password)).addValue('CONtra1234.');
  
        await (await $(select.bntLogin)).click();
    }
}
