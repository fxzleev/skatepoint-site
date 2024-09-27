import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'

type FormType = {
	category: string
	user_name: string
	user_email: string
	user_comment: string
}

const Support = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isValid },
		reset,
	} = useForm<FormType>({ mode: 'all' })

	const onSubmit: SubmitHandler<FormType> = data => {
    
		const TOKEN = '6960625468:AAGiCRg8zI3p0FE_jkRLBWyrUVKOxu_u-Ek'
		const CHAT_ID = '-1002389512676'
		const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

		let message = `<b>Категория: </b>${data.category}\n`
		message += `<b>Имя пользователя: </b>${data.user_name}\n`
		message += `<b>Email: </b>${data.user_email}\n`
		message += `<b>Сообщение: </b>${data.user_comment}\n`

		axios.post(URL_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message,
		})
    reset()
	}

	return (
		<section className='support'>
			<div className='support__form'>
				{isSubmitSuccessful && <p className='support__form__submitted'>Форма отправлена!</p>}
				<form className='support__form__container' onSubmit={handleSubmit(onSubmit)}>
					<div className='support__form__container__formelement4'>
						<select
							{...register('category', {
								required: { value: true, message: 'Выберите категорию' },
							})}
						>
							<option value='site'>SITE</option>
							<option value='game'>GAME</option>
							<option value='tg_bot'>TGBOT</option>
						</select>
						{errors.category && (
							<p className='errors'>{errors.category.message}</p>
						)}
					</div>
					<div className='support__form__container__formelement1'>
						<label>
							<p>NAME: </p>
							{errors.user_name && (
								<p className='errors'>
									{errors.user_name.message}
								</p>
							)}
							<input
								type='text'
								{...register('user_name', {
									required: { value: true, message: 'Введите имя!' },
								})}
							/>
						</label>
					</div>
					<div className='support__form__container__formelement2'>
						<label>
							<p>EMAIL: </p>
							{errors.user_email && (
								<p className='errors'>
									{errors.user_email.message}
								</p>
							)}
							<input
								type='email'
								{...register('user_email', {
									required: { value: true, message: 'Введите EMail!' },
								})}
							/>
						</label>
					</div>
					<div className='support__form__container__formelement3'>
						<label>
							<p>REPORT: </p>
							
							{errors.user_comment && (
								<p className='errors'>
									{errors.user_comment.message}
								</p>
							)}
							<textarea
								{...register('user_comment', {
									required: { value: true, message: 'Обязательное поле!' },
									minLength: {
										value: 10,
										message: 'Минимальное количество символов 10',
									},
								})}
							></textarea>
						</label>
					</div>
					<div className='support__form__container__formelement4'>
						<input type='submit' value='SEND' disabled={!isValid} />
					</div>
				</form>
			</div>
		</section>
	)
}

export default Support
