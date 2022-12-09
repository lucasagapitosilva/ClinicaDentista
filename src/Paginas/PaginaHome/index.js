import './style.css'

import EstruturaPagina from '../../Componentes/EstruturaPagina'

import { Link } from 'react-router-dom'

export default function PaginaHome() {

    return (

        <EstruturaPagina>
            <div className='home-apresentacao'>
                <div className='limitar-secao'>
                    <h1>Os Melhores <span>Aparelhos Dentários!</span></h1>
                    <p className='paragrafo'>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>

                    <div className='lista'>
                        <ul>
                            <li>
                                <img src='assets/dente.png'></img>
                                <p>Pré-avaliação</p>
                            </li>

                            <li>
                                <img src='assets/dente.png'></img>
                                <p>Aparelhos Dentários</p>
                            </li>

                            <li>
                                <img src='assets/dente.png'></img>
                                <p>Raio-X digital</p>
                            </li>

                            <li>
                                <img src='assets/dente.png'></img>
                                <p>Clareamento dental</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='limitar-secao'>
                <h2>Por que usar <span>Aparelho</span>?</h2>
                <img src='assets/aparelho.png' className='image-aparelho'></img>
            </div>

            <div className='lista-info limitar-secao'>
                <ul>
                    <li>
                        <h3>Alinhar os dentes</h3>
                        <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                    </li>
                    <li>
                        <h3>Melhorar a dicção e a higiene dentária</h3>
                        <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                    </li>
                    <li>
                        <h3>Corrigir espaço entre os dentes</h3>
                        <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                    </li>
                </ul>
            </div>

            <div className='home-depoimento limitar-secao'>
                <h2 className='titulo-sessao'>Veja oque nossos <b>clientes</b> estão falando...</h2>

                <ul className="lista-depoimentos">
                    <li>
                        <img className="img-aparelho" src="assets/cliente01.png" alt="Cliente Alberto" title="Cliente Alberto" />
                        <p>Alberto</p>
                        <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                    </li>

                    <li>
                        <img className="img-aparelho" src="assets/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana" />
                        <p>Eliana</p>
                        <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                    </li>

                    <li>
                        <img className="img-aparelho" src="assets/cliente03.png" alt="Cliente Carla" title="Cliente Carla" />
                        <p>Carla</p>
                        <p>Começei a usar ano passado e já estou notando a diferença.</p>
                    </li>
                </ul>
            </div>

            <div className='limitar-secao'>
                <Link to='/contato' className='btn-contato'>Entrar em contato</Link>
            </div>
        </EstruturaPagina>
    )
}