import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import promo1 from '@/images/promotion/promo_1.png'


export default function Promotion() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            modules={[Pagination]}>
            <SwiperSlide className="flex items-center justify-center">
                <img src={promo1} />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img src={promo1} />
            </SwiperSlide>
        </Swiper>
    )
}