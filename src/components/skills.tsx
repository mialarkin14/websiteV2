import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { SwiperImages } from '../assets/swiperContent'


const Skills = () => {
    return(
    <>
    <div className="skills">
        <div className="mySkillsDiv">
            <p className="mySkills">
                my skills:
            </p>
            <p className="code">
                code:
            </p>
        </div>
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
        <div className="electronics">
            <p className="electronicstext">
                electronics:
            </p>
            <div className="electrFlex">
                <div className="circuits">
                    <img src="src/assets/skills/circuits.png" alt="circutis" width={"200px"}/>
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
                    <img src="src/assets/skills/logic.png" alt="logic" width={"200px"}/>
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
    </div>
    </>    
    )
}

export default Skills