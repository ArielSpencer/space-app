import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: fixed;
    width: 2500px;
    max-width: 60vw;
    top: 5%;
    left: 142px;
    background: transparent;
    border: none;
`

const CloseModal = styled.button`
    background-color: transparent;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 5%;
    right: 13%;
    border: none;
`

const ModalZoom = ({ foto, aoFechar }) => {
    return (
        <>
            {foto && <> <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <CloseModal type="submit" >
                        <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </CloseModal>
                    </form>
                </DialogEstilizado></>}
        </>
    )
}

export default ModalZoom