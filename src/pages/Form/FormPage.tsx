import { Button, Checkbox, TextInputField } from 'evergreen-ui'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './conts/schema'
import { texts } from './conts/formConsts'
import { Header } from '@/components'
import './FormPage.css'

const FormPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      privacyPolicy: false,
    },
  })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className="form-page">
      <div className="page-wrapper">
        <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register(texts.tel.key)}
            label={texts.tel.label}
            isInvalid={!!errors[texts.tel.key]}
            validationMessage={errors[texts.tel.key]?.message}
            maxLength={12}
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
          {errors[texts.privacyPolicy.key] && (
            <p className="policy-error">Требуется принять политику</p>
          )}
          <Button type="submit">Отправить</Button>
        </form>
      </div>
    </div>
  )
}

export default FormPage
