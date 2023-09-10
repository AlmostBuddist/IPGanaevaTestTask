import * as yup from 'yup';
import { texts } from './formConsts';
import { messages, regexp } from '@/consts';

const minPasswordLength = 8

export const schema = yup.object({
    [texts.name.key]: yup
        .string()
        .required(messages.defaultRequiredInputMessage),
    [texts.email.key]: yup.string().required(messages.defaultRequiredInputMessage).email(messages.email),
    [texts.tel.key]: yup.string().required(messages.defaultRequiredInputMessage).matches(regexp.phone, messages.tel),
    [texts.password.key]: yup.string().required(messages.defaultRequiredInputMessage).min(minPasswordLength, messages.minLength(minPasswordLength)),
    [texts.repeatPassword.key]: yup
        .string()
        .required(messages.defaultRequiredInputMessage)
        .oneOf([yup.ref(texts.password.key)], messages.wrongPasswordConfirmation),
    [texts.privacyPolicy.key]: yup.boolean().required().oneOf([true]),
})