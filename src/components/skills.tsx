import {Swiper, SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'

import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { SwiperImages } from '../assets/swiperContent'

import circuits from '../assets/skills/circuits.png'
import logic from '../assets/skills/logic.png'


const Skills = () => {
    return(
    <>
    <div className="skills">
        <ScrollAnimation animateIn='fadeIn' duration={3} animateOnce={true}>
            <div className="mySkillsDiv">
                <p className="mySkills">
                    my skills:
                </p>
                <Link to='/code' onClick={() => {window.scroll(0, 0)}} style={{textDecoration:'none'}}>
                    <p className="code">
                        code:
                    </p>
                </Link>
            </div>
        </ScrollAnimation>
        

        <ScrollAnimation animateIn='bounceInRight' duration={3} animateOnce={true}>
            <div className="activeSlider">
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                            },
                        }}
                    
                        freeMode={true}
                    navigation={true}
                    pagination={true}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="swiper"
                >
                {SwiperImages.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="swiperSlide">
                            <div className="card">
                                <div className="images" style={{ backgroundImage: `url(${item.Image})` }}/>
                                <h1 className="title">{item.title} </h1>
                                <p className="content">{item.content} </p>      
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </ScrollAnimation>

        
        <ScrollAnimation animateIn='bounceInLeft' duration={3} animateOnce={true}>
            <div className="electronics">
                <Link to='/electronics' onClick={() => {window.scroll(0, 0)}} style={{textDecoration:'none'}}>
                    <p className="electronicstext">
                        electronics:
                    </p>
                </Link>
                <div className="electrFlex">
                    <div className="circuits">
                        <img src={circuits} alt="circutis" width={"200px"}/>
                        <div>
                            <p className="circuitsTitle">
                                basic circuits
                            </p>
                            <ul>
                                <li className="circuitsText">passive and active elements</li>
                                <li className="circuitsText">linear circuit responses</li>
                                <li className="circuitsText">ac steady-state power</li>
                                <li className="circuitsText">three-phase circuits</li>
                                <li className="circuitsText">frequency responses</li>
                                <li className="circuitsText">basic laws and circuit analysis techniques</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="logic">
                        <img src={logic} alt="logic" width={"200px"}/>
                        <div>
                            <p className="logicTitle">
                                digital logic
                            </p>
                            <ul>
                                <li className="logicText">representation of digital information</li>
                                <li className="logicText">combinational and sequential logic</li>
                                <li className="logicText">boolean algebra and truth tables</li>
                                <li className="logicText">various radix systems</li>
                                <li className="logicText">parity and hamming code </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'100px'}}>
                    <Link to='/portfolio' onClick={() => {window.scroll(0, 0)}}>
                        <button className="portfolioB">
                            explore projects 
                        </button>
                    </Link>
            </div>
        </ScrollAnimation>

    </div>
    </>    
    )
}

export default Skills