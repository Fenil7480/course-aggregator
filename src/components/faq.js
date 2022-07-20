import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import '../styles/Faq.module.css'

const Faq = () => {
    return (
        <>
            <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What is Web3?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Web3 can be defined as the decentralized and blockchain-based version of the Internet.
                                </p>
                                <p>Actually the foundations of the idea were laid in 2014, but today it has come to the fore with the popularization of cryptocurrencies.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can Web3 really decentralize the internet?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    It's possible that getting regulated to compete against big tech companies, or to make those companies more accountable for mistakes, could make the internet better. In this context, a decentralized network is a tangible plus.
                                </p>
                                <p>
                                    For artists, musicians, and other creators, it's also possible that a direct-consumer relationship is actually better than, for example, Spotify, which has been criticized for not paying artists enough. Similar issues exist with Instagram and Reddit, both hubs where artwork is shared without attribution or payment to the artist, or TikTok, where black creators do not receive royalties for their dances.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
        </>
    )
}

export default Faq