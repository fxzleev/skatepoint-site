import { FC } from 'react';
import { Bean } from '../../types/bean';

type Props = {
  data: Bean;
}

const Card: FC<Props> = ({data}) => {
  return (
		<div id='element' className='card'>
			<h2 className='card__title'>{data.title}</h2>
			<p className='card__ver'>{data.version}</p>
			{data.imageUrl && (
				<img className='card__image' src={data.imageUrl} alt='imageUrl' />
			)}
			<p className='card__des'>{data.description}</p>
		</div>
	)
}

export default Card;