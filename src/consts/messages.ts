const wordsForms = {
    symbol: ['символов', 'символа', 'символ'] 
}

export const messages = {
    defaultRequiredInputMessage: 'Это поле обязательно для заполнения',
    wrongPasswordConfirmation: 'Пароли должны совпадать',
    minLength: (length: number, form: number = 0) => `Это поле должно содержать не меньше ${length} ${wordsForms.symbol[form]}`,
} as const;