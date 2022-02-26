import React from 'react'
import Recordatorio from './ComponentsPerfil/Recordatorio'
import Sugerencias from './ComponentsPerfil/Sugerencias'

const MiPerfil = () => {
  return (
    <div className='MiPerfil'>
        <div>
            <Sugerencias/>
            <Recordatorio/>
        </div>
    </div>
  )
}

export default MiPerfil