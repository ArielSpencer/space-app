import styled from "styled-components"

const Footer = styled.footer`
    display: block;
    align-content: center;
    background: #011634;
    height: 80px;
    width: 100%;
    margin-top: 100px;
`

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    padding: 0 7%;
`

const DivRodape = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const Icone = styled.img`
    height: 20px;
    &:hover {
    opacity: 0.7;
  }
`

const Link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    &:hover {
        color: #7A78E5;
    }
`

const Rodape = () => {
    return (
        <Footer>
            <Section>
                <DivRodape>
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
                </DivRodape>
                <DivRodape>
                <p>Desenvolvido por <Link href="https://github.com/arielspencer/">Ariel Spencer</Link> © 2024</p>
                <p>|</p>
                <p>Imagens por cortesia da <Link href="https://images.nasa.gov/">NASA Images and video library</Link></p>
                <a href="https://nasa.gov/">
                <Icone src="public/imagens/sociais/nasa_logo-large.png" alt="Logo Nasa" />
                </a>
                </DivRodape>
            </Section>
        </Footer>
    )
}

export default Rodape