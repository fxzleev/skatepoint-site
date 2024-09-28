import Card from '../Card' 
import { useEffect, useState } from 'react'
import { Bean } from '../../types/bean' 
import Loader from '../Loader'
import Error from '../Error'

const Cards = () => {

  const [allBeans, setAllBeans] = useState<null | Bean[]>(null)

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async ()=>  {
    try {
      setIsError(false)
      setIsLoading(true)
      const req = await fetch('https://raw.githubusercontent.com/fxzleev/skatepoint-site/refs/heads/main/src/data/beans.json')
      const data = await req.json();
      setIsLoading(false)
      setAllBeans(data.items)
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(()=>{
    getData();
  }, [])
  

  return (
		<div className='cards'>
      {isLoading && <Loader />}
      {isError && <Error />}
			{allBeans && allBeans.map(bean => {
				return <Card data={bean} key={bean.creditId}/>
			})}
		</div>
	)
}

export default Cards;