import './style.css'

import EstruturaPagina from '../../Componentes/EstruturaPagina'
import Mapa from '../../Componentes/Mapa'

import { Link } from 'react-router-dom'

export default function PaginaContato() {

    return (

        <div>
            <EstruturaPagina>
                <div className='contato-container'>
                    <div className='contato-mapa'>
                        <h2 className='titulo-sessao center'>Horários de <b>atendimento</b></h2>

                        <p className='center'>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>

                        <ul className='lista-medicos'>
                            <li>
                                <img className='img-aparelho' src='/assets/medico01.png' alt='Dr. Hélio' title='Dr. Hélio'></img>
                                <p>Dr. Hélio</p>
                                <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                            </li>

                            <li>
                                <img className="img-aparelho" src="assets/medico02.png" alt="Dr. Carlos" title="Dr. Carlos" />
                                <p>Dr. Carlos</p>
                                <p>Terças e quintas das 13:00 às 18:00</p>
                            </li>

                            <li>
                                <img className="img-aparelho" src="assets/medico03.png" alt="Dra. Suzana" title="Dra. Suzana" />
                                <p>Dra. Suzana</p>
                                <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                            </li>
                        </ul>
                    </div>

                    <div className='contato-mapa'>
                        <h2 className='titulo-sessao center'>Onde estamos <b>localizados</b>?</h2>

                        <p className='center'>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>

                        <Mapa />
                    </div>
                </div>
            </EstruturaPagina>
        </div>
    )
}