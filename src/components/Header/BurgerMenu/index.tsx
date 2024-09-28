import { FC, Dispatch } from 'react'

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
			<div className='hamburger_lines'>
				<span className='line line1'></span>
				<span className='line line2'></span>
				<span className='line line3'></span>
			</div>
		</div>
	)
}
