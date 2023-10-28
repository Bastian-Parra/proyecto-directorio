import '../styles/negocios.css' // los estilos
import '../styles/fonts/fonts.css' // las fuentes
import { useEffect } from 'react'
import { useNegocios} from '../context/negociosContext.jsx'
import NegociosCard from '../components/NegociosCard'

const NegociosPage = () => {
  
  const { mostrarNegocios, negocios } = useNegocios()


  useEffect(() => {
    mostrarNegocios()
  }, [])

  if (negocios.length === 0) {
    return (
      <h1>No hay Negocios</h1>
    )
  }

  return (
    <>
    <div className='container-negocio'>
      <div className='container-left-negocio'></div>
      <div className='container-right-negocio'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat qui corrupti eveniet facere reiciendis temporibus. At adipisci ex aut fuga iusto assumenda sint maiores cupiditate aliquid, quae architecto ratione?</p>
      </div>
    </div>
    <div className='container-filters'>
      <button className='filtro'>Filtrar</button>
      <label htmlFor="site-search" placeholder='Nombre del negocio'>Buscar por nombre </label>
      <input id="buscar" type="search" name="q" />
      <button className='filtro'>Buscar</button>
    </div>
    <div className='container-negocios-inside'>
        {negocios.map(negocio => (
          <NegociosCard negocio={negocio} key={negocio.id}/>
        ))}
    </div>
    </>
  )
}


// separo el componente del contenido para una mejor legibilidad

export default NegociosPage