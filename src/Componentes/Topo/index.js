import './style.css'
import { Link } from 'react-router-dom'

export default function Topo() {

    return (

        <header>
            <div className='topo'>
                <div className='logo-titulo'>
                    <Link to='/' ><img className='img-topo' src='./assets/dente.png'></img>
                    </Link>
                    <Link to='/' className='link'>
                        <p className='titulo-topo'>Dentes Saudáveis</p>
                    </Link>
                </div>

                <div>
                    <nav>
                        <Link className='link-nav' to='/'>Home</Link>
                        <Link className='link-nav' to='/contato'>Contato</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}