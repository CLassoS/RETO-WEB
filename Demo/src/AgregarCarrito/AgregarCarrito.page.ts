import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    btnIndex: `img[title='Alkosto']`,
    categoryElectrodo: `a[title='Electrodomésticos']`,
    electrodoRefrige:`img[alt='refrigeración']`,
    continueShopping:`.continue-shopping-button__label`,
    productRefrigerator1:`#js-add-cart-7704712465906`,
    productRefrigerator2:`#js-add-cart-7704353449921`,
    productRefrigerator3:`#js-add-cart-7705191041803`,
    productRefrigerator4:`#js-add-cart-7704353446234`,
    productRefrigerator5:`#js-add-cart-7704353383652`,
    productRefrigerator6:`#js-add-cart-7705191041766`,
   
    goCart:`#js-mycart-header`
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
                    await (await $(select.productRefrigerator1)).scrollIntoView({ block: 'center', inline: 'center' });
                    await (await $(select.productRefrigerator1)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 2:
                    await (await $(select.productRefrigerator2)).scrollIntoView({ block: 'center', inline: 'center' });
                    await (await $(select.productRefrigerator2)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 3:
                    await (await $(select.productRefrigerator3)).scrollIntoView({ block: 'center', inline: 'center' });
                    await (await $(select.productRefrigerator3)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 4:
                    await (await $(select.productRefrigerator4)).scrollIntoView({ block: 'center', inline: 'center' });
                    await (await $(select.productRefrigerator4)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 5:
                    await (await $(select.productRefrigerator5)).scrollIntoView({ block: 'center', inline: 'center' });
                    await (await $(select.productRefrigerator5)).click();
                    await (await $(select.continueShopping)).click();
                    break;
                case 6:
                    await (await $(select.productRefrigerator6)).scrollIntoView({ block: 'center', inline: 'center' });
                    await (await $(select.productRefrigerator6)).click();
                    await (await $(select.continueShopping)).click();
                    break;
            }
            contador += 1;
        }

        await (await $(select.goCart)).click();
        
    }
}
