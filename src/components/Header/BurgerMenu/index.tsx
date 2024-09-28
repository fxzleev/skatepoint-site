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
		<div className="burger" onClick={handleClick}>
			<input type='checkbox' checked={isOpen} id='' />
			<div className="burger__hamburger_lines">
				<img src="./src/assets/img/menu.png" alt="menu" />
			</div>
		</div>
	)
}
