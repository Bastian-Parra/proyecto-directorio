import '../styles/lugares.css' 
import '../styles/fonts/fonts.css' 
import { useEffect } from 'react'
import { useLugares} from '../context/lugaresContext.jsx'
import LugaresCard from '../components/LugaresCard.jsx'
const LugaresPage = () => {
  
  const { mostrarLugares, lugares } = useLugares()


  useEffect(() => {
    mostrarLugares()
  }, [])

  if (lugares.length === 0) {
    return (
      <h1>No hay lugares</h1>
    )
  }

  return (
    <>
    <div className='container-lugar'>
      <div className='container-left-lugar'></div>
      <div className='container-right-lugar'>
        <p>En la ciudad de Valparaíso, Chile, se abren las puertas a numerosas oportunidades de negocios que ofrecen una variada gama de experiencias para empresarios e inversores.  Aquí, encontrarás una diversidad de oportunidades comerciales, que van desde acogedores restaurantes y tiendas únicas hasta servicios profesionales!!</p>
      </div>
    </div>
    <div className='container-filters'>
      <button className='filtro'>Filtrar</button>
      <label htmlFor="site-search" placeholder='Nombre del negocio'>Buscar por nombre </label>
      <input id="buscar" type="search" name="q" />
      <button className='filtro'>Buscar</button>
    </div>
    <div className='container-lugares-inside'>
        {lugares.map(lugar => (
          <LugaresCard lugar={lugar} key={lugar.id}/>
        ))}
    </div>
    </>
  )
}


// separo el componente del contenido para una mejor legibilidad

export default LugaresPage