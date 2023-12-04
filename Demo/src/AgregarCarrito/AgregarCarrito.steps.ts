import { Given, Then, When } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { AgregarCarritoAlkostoPage } from "./AgregarCarrito.page";
import { globalPage } from "./ProductsMainPage.page";

export class AgregarCarritoAlkostoSteps {

    get AgregarCarritoAlkostoPage() {
        return pageProvider.wait(AgregarCarritoAlkostoPage);
    }
    get globalPage() {
        return pageProvider.wait(globalPage);
    }
    @Given(/^que estoy en la página de inicio$/)
    async sesion() {
        await pageProvider.go(AgregarCarritoAlkostoPage); //
    }
    @When(/^ingreso a refrigeracion en la categoria electrodomesticos$/)
    async credenciales() {
        await ((await this.AgregarCarritoAlkostoPage)).Login();  
    }
    @Then(/^deberia ser redirigido a la seccion del carrito$/)
    async posiciónGlobal() {
        await ((await this.globalPage)).validPosicionGlobal();
    }
}
