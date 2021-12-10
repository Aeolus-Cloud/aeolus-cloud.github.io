import React from 'react';
import {Buttons, Container, Layout, Link, LogoWPP} from "./style";
import {GitHub, Menu} from "react-feather";

const Header = () => {
    return (
        <Layout>
            <Container>
                <LogoWPP>
                    Aeolus<b>Cloud</b>
                </LogoWPP>

                <Buttons>
                    <ul className="secondary-nav">
                        <li>
                            <Link
                                href="https://github.com/Aeolus-Cloud"
                                target={"_blank"}
                            >
                                Organização
                            </Link>
                        </li>

                        <li className={"donate"}>
                            <Link
                                href="#"
                                target={"_blank"}
                            >
                                Gerenciador de licenças
                            </Link>
                        </li>
                    </ul>
                </Buttons>

                <div className={"menu-mobile"}>
                    <Menu/>
                </div>
            </Container>
        </Layout>
    );
};

export default Header;