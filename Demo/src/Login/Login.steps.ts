import { Given, Then, When } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { LoginAlkostoPage } from "./Login.page";
import { globalPage } from "./MainPage.page";

export class LoginAlkostoSteps {

    get LoginAlkostoPage() {
        return pageProvider.wait(LoginAlkostoPage);
    }
    get globalPage() {
        return pageProvider.wait(globalPage);
    }
    @Given(/^que estoy en la página de inicio de sesión$/)
    async sesion() {
        await pageProvider.go(LoginAlkostoPage); //
    }
    @When(/^ingreso mi nombre de usuario y contraseña$/)
    async credenciales() {
        await ((await this.LoginAlkostoPage)).Login();  
    }
    @Then(/^debería ser redirigido a la página principal$/)
    async posiciónGlobal() {
        await ((await this.globalPage)).validPosicionGlobal();
    }
}
