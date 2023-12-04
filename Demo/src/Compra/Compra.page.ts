import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    productOne:`#quantity_0`,
    productTwo:`#quantity_1`,
    productThree:`#quantity_2`,
    productFour:`#quantity_3`,
    bntPay:`#js-go-to-pay`
}

@PageContext({
    path: '/cart', 
    wrapper: `body`, //Padre  o nodo principal
})
export class CompraAlkostoPage extends Page {

    async Login() {
        
        function getRandomInt(min: number, max: number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
          }

        await (await $(select.productThree)).click();
        await (await $(select.productThree)).selectByIndex(getRandomInt(1,4));

        await (await $(select.productTwo)).click();
        await (await $(select.productTwo)).selectByIndex(getRandomInt(1,4));

        await (await $(select.productOne)).click();
        await (await $(select.productOne)).selectByIndex(getRandomInt(1,4));

        await (await $(select.bntPay)).click();
        
    }
}
