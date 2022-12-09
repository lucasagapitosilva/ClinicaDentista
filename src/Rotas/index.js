import {BrowserRouter, Routes, Route} from 'react-router-dom'

import PaginaHome from '../Paginas/PaginaHome'
import PaginaContato from '../Paginas/PaginaContato'

const Rotas = () => {

    return(

        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaHome/> } />
            <Route path='/contato' element={ <PaginaContato/> } />
        </Routes>
        </BrowserRouter>

    )

}

export default Rotas;