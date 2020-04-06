const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SET: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTAÇAO: '[data-test=menu-movimentacao]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVA: '.btn',
        XP_BNT: "//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']"
    },
    MESSAGE: '.toast-message'

}
export default locators;