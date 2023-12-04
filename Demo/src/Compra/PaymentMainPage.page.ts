import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    header:`.transactional.alkosto-transactional`,
    layout:`.main__inner-wrapper`,
    footer:`.footer.alkosto-footer`
}

@PageContext({
    path: '/checkout/multi/delivery-method/choose', 
    wrapper: `body`, //Padre  o nodo principal
})
export class globalPage extends Page {

    async validPosicionGlobal() {
        await (await $(select.header)).waitForDisplayed({timeout: 120000 });
        await (await $(select.header)).isExisting();

        await (await $(select.layout)).waitForDisplayed({timeout: 120000 });
        await (await $(select.layout)).isExisting();
        
        await (await $(select.footer)).waitForDisplayed({timeout: 120000 });
        await (await $(select.footer)).isExisting();
    }
}