import styled from "styled-components"

const Footer = styled.footer`
    display: block;
    align-content: center;
    background: #04244F;
    height: 80px;
    width: 100%;
`

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    padding: 0 7%;
`

const RedesSociais = styled.div`
    display: flex;
    gap: 30px;
`

const Icone = styled.img`
    height: 20px;
    &:hover {
    opacity: 0.7;
  }
`

const Rodape = () => {
    return (
        <Footer>
            <Section>
                <RedesSociais>
                    <a href="https://github.com/ArielSpencer">
                        <Icone src="public/imagens/sociais/github.svg" alt="GitHub SpaceApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/arielspencer-log/">
                        <Icone src="public/imagens/sociais/linkedin.svg" alt="Linkedin SpaceApp" />
                    </a>
                    <a href="https://www.instagram.com/arielspencer.tech">
                        <Icone src="public/imagens/sociais/instagram.svg" alt="Instagram SpaceApp" />
                    </a>
                    <a href="https://wa.me/5511991007079">
                        <Icone src="public/imagens/sociais/whatsapp.svg" alt="Whatsapp SpaceApp" />
                    </a>
                </RedesSociais>
                <p>Desenvolvido por Ariel Spencer © 2024</p>
            </Section>
        </Footer>
    )
}

export default Rodape