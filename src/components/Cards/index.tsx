import beans from '../../data/beans.json'
import Card from '../Card'

const Cards = () => {
  console.log(beans.items)
  return(
    <div className="cards">
      {beans.items.map((bean)=>{
        return <Card data={bean}/>
      })}
    </div>
  )
}

export default Cards;