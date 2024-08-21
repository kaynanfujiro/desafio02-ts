const conta = {
    email: 'Teste@hotmail.com',
    password: '123456',
    name: 'Your Name',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})