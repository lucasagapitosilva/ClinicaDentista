import Topo from '../Topo'
import Footer from '../Footer'

const EstruturaPagina = (props) => {

    return(

        <section>
            <Topo />
            {props.children}
            <Footer />
        </section>
    )
}

export default EstruturaPagina;