import { Given, Then, When } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { CompraAlkostoPage } from "./Compra.page";
import { globalPage } from "./PaymentMainPage.page";

export class CompraAlkostoSteps {

    get CompraAlkostoPage() {
        return pageProvider.wait(CompraAlkostoPage);
    }
    get globalPage() {
        return pageProvider.wait(globalPage);
    }
    @Given(/^que estoy en la seccion de Carrito$/)
    async sesion() {
        await pageProvider.go(CompraAlkostoPage); //
    }
    @When(/^agrego la cantidad de productos$/)
    async credenciales() {
        await ((await this.CompraAlkostoPage)).Login();  
    }
    @Then(/^deberia ser redirigido a la seccion de pago$/)
    async posiciónGlobal() {
        await ((await this.globalPage)).validPosicionGlobal();
    }
}
