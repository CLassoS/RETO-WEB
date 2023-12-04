import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    btnIndex: `img[title='Alkosto']`,
    categoryElectrodo: `a[title='Electrodomésticos']`,
    electrodoRefrige:`img[alt='refrigeración']`,
    continueShopping:`.continue-shopping-button__label`,
    productRefrigerator1:`(//button[@id='js-add-cart-7704712465906'])[1]`,
    productRefrigerator2:`(//button[@id='js-add-cart-7704353449921'])[1]`,
    productRefrigerator3:`(//button[@id='js-add-cart-7705191041803'])[1]`,
    productRefrigerator4:`(//button[@id='js-add-cart-7705191041766'])[1]`,
    productRefrigerator5:`(//button[@id='js-add-cart-7704353383652'])[1]`,
    productRefrigerator6:`(//button[@id='js-add-cart-7704353446111'])[1]`,
   
    goCart:`li[id='js-mycart-header'] span[class='icon alk-icon-carrito']`
}

@PageContext({
    path: '/my-account', 
    wrapper: `body`, //Padre  o nodo principal
})
export class AgregarCarritoAlkostoPage extends Page {
    

    async Login() {

        function getRandomInt(min: number, max: number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
            }
        
        let contador = 1;
        let usedNumbers = [];
        
        
        await (await $(select.btnIndex)).click();

        await (await $(select.categoryElectrodo)).click();
       
        await (await $(select.electrodoRefrige)).click();

        while(contador < 4){
            let randomNumber = getRandomInt(1, 7)
            while (usedNumbers.includes(randomNumber)) {
                randomNumber = getRandomInt(1, 7);
            }
            usedNumbers.push(randomNumber);
            switch (randomNumber) {
                case 1:
                    await (await $(select.productRefrigerator1)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 2:
                    await (await $(select.productRefrigerator2)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 3:
                    await (await $(select.productRefrigerator3)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 4:
                    await (await $(select.productRefrigerator4)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 5:
                    await (await $(select.productRefrigerator5)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 6:
                    await (await $(select.productRefrigerator6)).click();
                    await (await $(select.continueShopping)).click();
                    break;
            }
            contador += 1;
        }

        await (await $(select.goCart)).click();
        
    }
}
