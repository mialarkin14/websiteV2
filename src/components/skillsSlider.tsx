import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { ServiceData } from '../assets'


const SkillsSwiper = () => {
    return(
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
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="swiper"
            >
            {ServiceData.map((item) => (
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
    )
}

export default SkillsSwiper