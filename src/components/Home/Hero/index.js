import React from 'react';
import {Container, GrayTop, HeroButton, ImageHero, Layout, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import DashImage from "../../../assets/Dashboard.png";

const HeroContainer = () => {
    return (
        <Layout>
            <Container>
                <GrayTop>
                    <Title>
                        Se você pode imaginar<br/>
                        nós podemos fazer
                    </Title>
                    <Subtitle>
                        Nós somos a <b>melhor</b> fabrica de soluções que você estava procurando.
                    </Subtitle>
                    <HeroButton href={"https://github.com/wppconnect-team/wppconnect"} target={"_blank"}
                                rel={"noreferrer"}>
                        Conhecer plataforma <ArrowRight/>
                    </HeroButton>

                    <ImageHero>
                        <img src={DashImage}/>
                    </ImageHero>
                </GrayTop>
            </Container>
        </Layout>
    );
};

export default HeroContainer;