import { login } from "./login";

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('Login', () => {

    const mockEmail = 'Teste@hotmail.com'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas caso o e-mail e senha sejam válidos', async() => {
        
    const response = await login(mockEmail, mockPassword)
    expect(response).toBeTruthy()
    // expect(mockNavigate).toHaveBeenCalledWith('/1')
    })
        
    it('Deve exibir um erro caso o email seja inválido', async() => {
    const response = await login('email@invalido.com', 'senhaInválida')
    expect(response).toBeFalsy()
    // expect(mockNavigate).not.toHaveBeenCalledWith()
    })
    })