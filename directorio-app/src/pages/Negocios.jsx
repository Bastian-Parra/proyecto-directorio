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
    <div className='container-negocios'>
    {negocios.map(negocio => (
        <NegociosCard negocio={negocio} key={negocio.id}/>
      ))}
  </div>
  )
}


// separo el componente del contenido para una mejor legibilidad

export default NegociosPage