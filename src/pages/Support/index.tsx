import style from "./style.module.css";
import image from "../../assets/img/skatepoint.png"
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type FormType = {
  category: string,
  user_name: string,
  user_email: string,
  user_comment: string,
}

const Support = () => {

  const {register, handleSubmit, formState: {errors} } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const TOKEN = '6960625468:AAGiCRg8zI3p0FE_jkRLBWyrUVKOxu_u-Ek'
    const CHAT_ID = '-1002389512676'
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    let message = `<b>Категория: </b>${data.category}\n`;
    message += `<b>Имя пользователя: </b>${data.user_name}\n`;
    message += `<b>Email: </b>${data.user_email}\n`
    message += `<b>Сообщение: </b>${data.user_comment}\n`

    axios.post(URL_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message,
		})
	}

  return(
      <section className={style.support_cont}>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formelement4}>
            <select {...register("category",{required:{value:true, message: "Выберите категорию"} })}>
              <option value="site">Site</option>
              <option value="game">Game</option>
              <option value="tg_bot">TG Bot</option>
            </select>{errors.category && <p className={style.errors}>{errors.category.message}</p>}
          </div>
          <div className={style.formelement1}>
            <label>
              <span>NAME: </span><input type="text" {...register("user_name",{required:{value: true, message: "Введите имя!"} })} />
            </label>{errors.user_name && <p className={style.errors}>{errors.user_name.message}</p>}
          </div>
          <div className={style.formelement2}>
            <label>
              <span>EMAIL: </span>
              <input type="email" {...register("user_email",{required:{value:true, message: "Введите EMail!"} })} />
            </label>{errors.user_email && <p className={style.errors}>{errors.user_email.message}</p>}
          </div>
          <div className={style.formelement3}>
            <label>
              <span>REPORT: </span>
              <textarea {...register("user_comment",{required:{value: true, message: "Обязательное поле!"}, minLength:{value: 10, message:"Минимальное количество символов 10"} })} ></textarea>
            </label>{errors.user_comment && <p className={style.errors}>{errors.user_comment.message}</p>}
          </div>
          <div className={style.formelement4}>
            <input type="submit" value="SEND"/>
          </div>
        </form>

        <div className={style.skatepoint}>
          <img className={style.shake} src={image} alt="logo"/>
        </div>
      </section>
  )
}

export default Support;