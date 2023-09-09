import { Button, Checkbox, TextInputField } from 'evergreen-ui'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './conts/schema'
import { texts } from './conts/authConsts'
import './FormPage.css'
import { Header } from '@/components'

const AuthPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="auth-page">
      <div className="page-wrapper">
        <Header />
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <h2>Введите ваши данные</h2>
          <TextInputField
            {...register(texts.name.key)}
            label={texts.name.label}
            isInvalid={!!errors[texts.name.key]}
            validationMessage={errors[texts.name.key]?.message}
          />
          <TextInputField
            {...register(texts.email.key)}
            label={texts.email.label}
            isInvalid={!!errors[texts.email.key]}
            validationMessage={errors[texts.email.key]?.message}
          />
          <TextInputField
            {...register(texts.password.key)}
            type="password"
            label={texts.password.label}
            isInvalid={!!errors[texts.password.key]}
            validationMessage={errors[texts.password.key]?.message}
          />
          <TextInputField
            {...register(texts.repeatPassword.key)}
            type="password"
            label={texts.repeatPassword.label}
            isInvalid={!!errors[texts.repeatPassword.key]}
            validationMessage={errors[texts.repeatPassword.key]?.message}
          />
          <Controller
            name={texts.privacyPolicy.key}
            control={control}
            render={({ field }) => {
              const { value, ...otherField } = field
              return (
                <Checkbox
                  {...otherField}
                  checked={value}
                  label={texts.privacyPolicy.label}
                  isInvalid={!!errors[texts.privacyPolicy.key]}
                />
              )
            }}
          />

          <Button type="submit">Отправить</Button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
