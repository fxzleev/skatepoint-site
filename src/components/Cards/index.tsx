import style from './style.module.css'
import beans from '../../data/beans.json'
import Card from '../Card'

const Cards = () => {
  console.log(beans.items)
  return(
    <div className={style.container}>
      {beans.items.map((bean)=>{
        return <Card data={bean}/>
      })}
    </div>
  )
}

export default Cards;