import PublicLayout from "@/layouts/PublicLayout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import promo1 from '@/images/promotion/promo_1.png'
import interestedServices1 from '@/images/services/service_1.png';
import interestedServices2 from '@/images/services/service_2.png';
import interestedServices3 from '@/images/services/service_3.png';

import whatsNewImg from '@/images/promotion/whats_new.png'
import { Link } from "react-router-dom";

const interestedServices = [
  {
    id: 1,
    name: 'Catering',
    image: interestedServices1
  },
  {
    id: 2,
    name: 'Cleaning',
    image: interestedServices2
  },
  {
    id: 3,
    name: 'Assembly',
    image: interestedServices3
  },
  {
    id: 4,
    name: 'Assembly',
    image: interestedServices3
  }
]

const categorys = [
  {
    id: 1,
    name: "Cleaning",
    slug: 'cleaning',
    image: 'https://s3-alpha-sig.figma.com/img/6ec3/5af0/405da7452489770b86fae126abc1961f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BmcyHxg-AeBCVP9G3Mgr3ziIjhDkd1K-IqN6rnJtUHPJa1tnZphXvQjpV6uzxk7~a7hDmKDo2kDenUBYxxQknC7wlBfGZwwSl8ZhED7f0pmP4noUuhHBzrsKTztzywirT6ej1Bi0vFXcbUNP0VlII4iGF9ypeQWw2aPn5vPgt9jTzIvCfmkoMg9BnKunZc7~CKqO3H5quvSLeyHg4D8jtau~H4EoRVMXe3g20FG0UbSNa92Xtx-S1OWdIF9YgNmyAVNn3-RooOmupygwcVI3uZ-uOs5414KxJjR1KWerFMTkKD5GftDVqXw9ipM4-ffP9sK8BAiRTW5cjd4q9i1wmA__'
  },
  {
    id: 2,
    name: "Dressmaker",
    slug: 'dressmaker',
    image: 'https://s3-alpha-sig.figma.com/img/f0a0/fd97/76a8d1e7ab44909e3b3f25b4e04dbc22?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kVPFIloawQIcSIBBtoJ-5f3N4we2CWXDedTPx6jGOSkmPfT5OgbVQsVbRL01NYWsTyj2gTJi6kmfQBYRvQQ8ZzwFtDAmVesq~Z~h-mX9VuISOwROoTJPQTyOJrayxmam9B1-XnZpj1ZeVB1N0d7C5ujO9TB9K8kp6D9hFjrjvcp~qHUwxwZJzyCPxf2ajCz2aJslao1JMdnrbS9P9GWXbZEIDB~mQLT8Qh3eUB7jQrwXGRqgxRSWjo0auSnVKph8yoGbiTLUV19mMWKaAsT-p2rnqnz~02z5sfFpU~UBGK3BPN2Bgvazjqk~28aSMA7ElzcqqoI56R5iFhH5tZzS3A__'
  },
  {
    id: 3,
    name: "Repair",
    slug: 'repair',
    image: 'https://s3-alpha-sig.figma.com/img/b574/97e7/3670278d412e3e1d99565ed8b1e9638d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mDm--7uYhLMoZ6~tsQp5GyxfQ6w2l12EGlbaQcTJLGmvJrmZDw5RMIEgCKg4pEzuD4Xb7O5~l1U7cm7sEQ7yd2K6ByaCixDqtDCoCtgKsCb3ixky7Fe6wUY2Ek5hhMfEH43sjC0~2rkm0XWNRfWRZ95ecOtqdtTQrkgGSmE~dnocxeYLa8X6bvGnu-az7Xhmg~uZds5PtNJPAd0txnkgjutMnmKBN0e14Qqn4ieueE7hmMdlqYqZKzfgMT3UUgm3etPV2gTDMNxwQWiJKFnzZteaM9~9EQF-XQjzT76b~oail8ICJT7Kuh6IeBmx-YpeKXv72GqRkhJf9XtTS7XWYQ__'
  },
  {
    id: 4,
    name: "Catering",
    slug: 'catering',
    image: 'https://s3-alpha-sig.figma.com/img/6202/ba45/ce1326f15675ad91372de5607af483e5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IiJ~WD8DQAFVDwOz0WuLuVkPZddlBYCshRSkIzUdyiZCzVeXiPZQpKdmB5obZ2znEngpxDZjuHgH58frKn9L5uBSdtPTdKVw-RovLILNwWEowwP3wHeTrsdr0Ih~Tk9aCZGgMuwiSCfcywmCfQJoSx1dtQDyaS-UWZyEcweTtCDgoCzG51iu4caMjVtHajLoyZd7VamayuXyNT6mjFw6NS9VlGH0Bf2daGNw16kNKhrVnSYJPMPb7hYP0c1isqr4p4K1P-zDOL61qLCiTEEm2hgzxSK4ehzefKZy~oW5dLET7Bbzs~p33eOo3R~jQgECwUYMYmZbSFwvnjRO76RaUA__'
  }
]

export const featuredServices = [
  {
    id: 1,
    favorite: false,
    title: 'Furniture assembly',
    description: 'Service starting at 489€',
    image: 'https://s3-alpha-sig.figma.com/img/3258/50d0/0e00c966e98fbd8bc2a31db781be079a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aGTCRfKAhGSXNgdfswBMSINzVz~Obi60gFVbBBIGfBv7nKNNsNA5sRFCUaNupWjbTgPw8lMbUcWizaUmS7NdgxdpnYwm8ItBsa5tosqt~nPeFcCLCzYubgJ93Fn7ZiM1tkgAOuHcDaIcrwenqZBfl-DAFFH37tR35mFdeUQ2m5~RPmcqv7Zz9gGiibjXjunWcxxQ2uokB5vDNzig8Yb1n7JB80wpyraFyIB5d26y93GIM4eVXFrBl1Zzh~aA4GPmkAqQloCTK3FJIZSeKUJ9gvr9suK7iX58mEgvgCT7IHRexeb08HLn6iKpwMXpCyEgcRGuTmkM7WZHX6WU63oh6w__'
  },
  {
    id: 2,
    favorite: true,
    title: 'Dress shortening',
    description: 'Service starting at 489€',
    image: 'https://s3-alpha-sig.figma.com/img/c0c8/401d/3ccdbe690117dc2b4a68ca055fe1d1d3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oBdv4p0rXdcivrxAiOoZdUmZuXx6CJO5l1R8thJxr5PzLege2YjCt7rKPi1iYLWygQzhDh9AucBp4mznPerWMByQZck6CVEoB~Nh128CG-7VcnY8zLQq80wvzU9EpkjfvgtujRnL8s3wv3HSheosRXXxgWGjZEsLMemelWy9xnJM5d6yXsb7ngMy16psDkAn-RyMHcr~ihwAUne-8LRrcOnqkTuvoluefLNJVFg-sVlXEnpx8OFhvaZwg19OvuJV9aBNyKg1Q6H1LSdZyiTe79bUVi~adS2zDkY-SRpGFvt9nGfdpSYMBfhX~QtX64WoQsW4wr6Gz64dNAjXx68jkA__'

  }
]

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Categories */}
      <section className="flex flex-col items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[18px] text-[#262626] font-semibold">Categories</h1>
          <button className="text-vf-red underline flex items-center gap-2">
            All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.16675 2.33301L10.8334 7.99967L5.16675 13.6663" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex items-start gap-2 overflow-x-auto w-full">
          {categorys.map((category) => (
            <Link to={`/category/${category.slug}`} key={category.id} className="flex flex-col items-center gap-3">
              <img src={category.image} className="w-[70px] h-[70px] rounded-[16px] p-[2px] object-cover border-[2px] bg-gradient-to-r from-[#820000] to-[#E60000] " />
              <p className="text-[#0D0D0D]">{category.name}</p>
            </Link>
          ))}
        </div>
      </section>
      {/* Categories */}

      {/* Promotion */}
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
      {/* Promotion */}

      {/* Interested Services */}
      <section className="flex flex-col items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[18px] text-[#262626] font-semibold">Which services are you interested in?</h1>
          <button className="text-vf-red underline flex items-center gap-2">
            All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.16675 2.33301L10.8334 7.99967L5.16675 13.6663" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex items-start gap-2 overflow-x-auto w-full h-full">
          {interestedServices.map((service) => (
            <div key={service.id} className="flex flex-col h-fit items-center shadow-md p-4 rounded-xl bg-white mb-4">
              <img src={service.image} />
              <p>{service.name}</p>
              <button className="bg-vf-red rounded-full flex items-center justify-center w-8 h-8">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1459 10.0003H3.85425M10.0001 3.85449V16.1462" stroke="white" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Interested Services */}

      {/* Featured Services */}
      <section className="flex flex-col items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[18px] text-[#262626] font-semibold">Featured services</h1>
          <button className="text-vf-red underline flex items-center gap-2">
            All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.16675 2.33301L10.8334 7.99967L5.16675 13.6663" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start gap-2 w-full h-full">
          {featuredServices.map((service) => (
            <div key={service.id} className="w-full flex items-start justify-between shadow-md p-4 rounded-xl bg-white">
              <div className="flex items-center gap-4">
                <img className="w-[98px] h-[80px] rounded-3xl" src={service.image} />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{service.title}</p>
                  <p>{service.description}</p>
                </div>
              </div>
              <button className="flex items-center justify-center">
                {service.favorite ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.2 3.50046C19.6342 2.96234 18.9594 2.55195 18.2213 2.29702C17.4832 2.04208 16.699 1.94854 15.9217 2.02272C15.1443 2.0969 14.392 2.33707 13.7154 2.727C13.0389 3.11693 12.4539 3.64753 12 4.28296C11.905 4.15046 11.8038 4.02296 11.6988 3.90046C11.1892 3.30463 10.5567 2.82626 9.84456 2.49827C9.13247 2.17027 8.35777 2.00044 7.57378 2.00046C6.17035 1.99375 4.81898 2.53143 3.80378 3.50046C1.46003 5.72546 1.63753 9.83546 3.02253 12.7505C4.17753 15.1755 6.12628 17.5167 8.98253 19.908C9.84887 20.6532 10.7716 21.3302 11.7425 21.933C11.8207 21.9783 11.9097 22.0016 12 22.0005C12.0913 22.0004 12.1808 21.9753 12.2588 21.928C13.229 21.3249 14.1514 20.6479 15.0175 19.903C17.875 17.5117 19.8275 15.1705 20.9813 12.7505C22.3675 9.83546 22.5438 5.72546 20.2 3.50046Z" fill="#E60000" />
                </svg>)
                  : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9991 21.5007C11.0509 20.9103 10.1491 20.2484 9.30162 19.5207C6.99787 17.5919 4.78162 15.2832 3.47287 12.5319C2.24537 9.95318 1.88912 6.00068 4.14537 3.86568C4.7073 3.33143 5.38662 2.93633 6.12884 2.71207C6.87106 2.48781 7.65552 2.44063 8.41926 2.57432C9.18301 2.70801 9.90479 3.01885 10.5267 3.4819C11.1486 3.94495 11.6533 4.54732 12.0004 5.24068M12.0004 21.4994C12.9482 20.909 13.8496 20.2471 14.6966 19.5194C17.0004 17.5907 19.2166 15.2819 20.5266 12.5307C21.7554 9.95318 22.1066 6.00068 19.8566 3.86568C19.2948 3.33143 18.6156 2.93632 17.8735 2.71206C17.1313 2.48779 16.347 2.44061 15.5833 2.57431C14.8196 2.70801 14.0979 3.01886 13.4761 3.48192C12.8544 3.94497 12.3498 4.54734 12.0029 5.24068" stroke="#BEBEBE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                  </svg>)}


              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Services */}
      

      {/* Whats New */}
      <section className="flex flex-col items-center gap-4 p-4 mb-[100px]">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[18px] text-[#262626] font-semibold">What’s new on CommUnity?</h1>
        </div>
        <div className="flex flex-col items-start gap-2 w-full h-full">
          <div className="w-full flex flex-col items-start justify-between shadow-md p-4 rounded-xl bg-white">
            <img className="w-full rounded-3xl" src={whatsNewImg} />
            <div className="flex flex-col gap-2 mt-3">
              <p className="font-semibold">Shop CommUnity gift cards</p>
              <p>You can earn exclusive opportunities by collecting points.</p>
            </div>
            <button className="text-vf-red flex items-center justify-center gap-2">
              Learn more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45825 2.91699L13.5416 10.0003L6.45825 17.0837" stroke="#E60000" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>

            </button>
          </div>
        </div>
      </section>
      {/* Whats New */}




    </PublicLayout>
  )
} 