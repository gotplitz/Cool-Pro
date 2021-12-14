import React from 'react';
import ReactPlayer from 'react-player';

import filterImg from '../../../assets/images/Filter.png';
import virusImg from '../../../assets/images/Virus Protection.jpg';
import pureImg from '../../../assets/images/HALO-LED-1.png';
import aprilImg from '../../../assets/images/Aprilairbanner.jpg';
import virusPDF from '../../../assets/images/green_and_orange_virus_picture link.pdf';

const AirVideo = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-12 text-center'>
                        <h2>Air Purification System REME HALO®</h2>
                        <p>
                            Take a look at this informative video about the
                            system we offer and how it works.
                        </p>
                        <div className='space-3'></div>
                        <div className='grid video-grid'>
                            <div className='grid-item column-6 column undefined'>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=ejpAHjli4zU'
                                    loop={true}
                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '100%',
                                    }}
                                />
                            </div>
                            <div className='grid-item column-6 column undefined'>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=uchQMMLeAMs'
                                    loop={true}
                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '100%',
                                    }}
                                />
                            </div>
                        </div>
                        <div className='grid video-grid'>
                            <div className='grid-item column-6 column undefined'>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=wa3nomhaDqY'
                                    loop={true}
                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: '100%',
                                    }}
                                />
                            </div>
                            <div className='grid-item column-6 column undefined'>
                                <a
                                    href='https://www.rgf.com/products/air/halo-led-whole-home-in-duct-air-purifier/#undefined'
                                    target='_blank'
                                    rel='nofollow noreferrer'
                                >
                                    <img
                                        src={pureImg}
                                        alt='Purifier'
                                        style={{
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            maxWidth: '100%',
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-md text-center'>
                <h2>Healthy Air with Aprilaire Products</h2>
                <br />
                <div className='grid'>
                    <div className='column-6 column'>
                        <a
                            href='https://rp.widen.net/content/bygbwiogkp/pdf/aprilaire-2210-2310-2410-air-purifier-specification-sheet-2362.pdf?u=5rn8it'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={filterImg} alt='Filter' />
                        </a>
                    </div>
                    <div className='column-6 column'>
                        <a href={virusPDF} target='_blank' rel='noreferrer'>
                            <img src={virusImg} alt='Filter' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-md'>
                <div className='grid'>
                    <div className='column-12 column'>
                        <a
                            href='https://rp.widen.net/content/4uiwz4kh5l/pdf/aprilaire-all-products-specification-reference-guide-2210.pdf?u=5rn8it'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={aprilImg}
                                alt='Aprilaire Filters banner'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirVideo;
