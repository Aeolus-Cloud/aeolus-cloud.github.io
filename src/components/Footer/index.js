import React from 'react';
import { Container, Layout } from "./style";
import { GitHub, MessageCircle, Youtube } from "react-feather";

const Footer = () => {
    return (
        <Layout>
            <Container>
                <h2>
                    Aeolus Cloud
                </h2>

                <div className={"main"}>
                    <div>
                        <h3>Recursos</h3>
                        <nav>
                            <li>
                                <a href={"#"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    Evidence Software
                                </a>
                            </li>

                            <li>
                                <a href={"#"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    Camera Manager
                                </a>
                            </li>

                            <li>
                                <a href={"#"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    Agent Software
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div>
                        <h3>
                            Links Úteis
                        </h3>
                        <nav>
                            <li>
                                <a href={"https://discord.gg/JU5JGGKGNG"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    Discord
                                </a>
                            </li>
                            <li>
                                <a href={"https://apoia.se/wppconnect"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    Apoia-se
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div>
                        <h3>
                            Social
                        </h3>
                        <nav>
                            <li>
                                <a href={"https://github.com/Aeolus-Cloud"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    <GitHub />
                                </a>
                            </li>

                            {/* <li>
                                <a href={"https://www.youtube.com/channel/UCD7J9LG08PmGQrF5IS7Yv9A"} rel={"noreferrer"}
                                    target={"_blank"}>
                                    <Youtube />
                                </a>
                            </li> */}
                        </nav>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Footer;
