import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
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
                        <div
                        className="images"
                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                            <h1 className="title">{item.title} </h1>
                            <p className="content">{item.content} </p>
                        </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SkillsSwiper