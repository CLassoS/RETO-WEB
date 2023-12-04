import {Page, PageContext} from "@testing/wdio-page-objects";


const select = {
    header:`.js-mainHeader.mobile-header.mobile-header--alkosto`,
    layout:`.main__inner-wrapper.overflow-visible`,
    footer:`.footer.alkosto-footer`,
}

@PageContext({
    path: '/my-account', 
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