import { FC } from 'react';
import style from './style.module.css'
import { Bean } from '../../types/bean';

type Props = {
  data: Bean
}

const Card: FC<Props> = ({data}) => {
  return (
		<div id='element' className={style.card}>
			<h2>{data.title}</h2>
			<p>{data.version}</p>
			<p>{data.description}</p>
		</div>
	)
}

export default Card;