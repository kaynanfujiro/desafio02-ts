import { Login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas apenas para o meu e-mail', () => {
        const myEmail = 'Kaynanfelipe@hotmail.com'
        
        Login(myEmail)
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a)!')
    })

    it('Deve exibir um alert de erro para um e-mail diferente do meu', () => {
        const mockEmail = 'emaildiferente@hotmail.com'
        
        Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith('E-mail inválido!')
    })

})