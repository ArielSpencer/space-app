import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ListaDeImagens = styled.ul`
    padding: 0;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaDeImagens>
                        <ImagensContainer>
                            {fotos.map(foto => <Imagem
                                key={foto.id}
                                foto={foto} />)
                            }
                        </ImagensContainer>
                    </ListaDeImagens>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria