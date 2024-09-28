import { FC, Dispatch } from 'react'
import menuIcon from '../../../assets/img/menu.png'

type Props = {
	isOpen: boolean
	setIsOpen: Dispatch<React.SetStateAction<boolean>>
}
export const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='burger' onClick={handleClick}>
			<input type='checkbox' checked={isOpen} id='' />
			<div className='burger__hamburger_lines'>
				<img src={menuIcon} alt='menu' />
			</div>
		</div>
	)
}
