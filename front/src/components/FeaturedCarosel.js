import {useAppContext}  from "../context/appContext"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {HiOutlineBuildingLibrary}  from "react-icons/hi2"
// import required modules
import { FreeMode, Pagination, Autoplay ,Navigation } from "swiper";

// This component is for the reason suppose if we want to use the carosel so the default code is all there here



const FeaturedCarosel = () => {
  return (
    <div className='div-center-80 my-[40px]'>
      {/* <h1 className='label text-center'>Featured Properties</h1>
      <p className='form-font text-center mb-[30px]'>Every man before purchasing his dream house 1st focus on the features of the properties or house. SK Builder has a specialized real estate properties dealer who will help you to chase your dream Property.</p>

      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, Pagination, Autoplay,FreeMode,]}
        // slide
        navigation
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            450: {
              width: 450,
              slidesPerView: 1,
            },
            768: {
              width: 900,
              slidesPerView: 2,
            },
          }}
      >
          {
            PropertiesWithoutFilters.slice(2).map((product)=>{
                return <SwiperSlide key={product?._id}>
                    <div >
                        <div className="relative">
                           <img src={product?.image} alt="Image" style={{height:"45vh",objectFit:"cover"}} />
                           <p className="form-font absolute top-[30px] text-black bg-brown-300 p-[4px] left-[20px]" style={{color:"white",background:"brown"}} >FEATURED</p>
                           <p className="form-font absolute top-[30px] text-black bg-brown-300 p-[4px] 
                           right-[20px]"  style={{color:"white",background:"brown"}}>For Rent</p>

                           <p className="form-font absolute bottom-[30px] text-black bg-brown-300 p-[4px] right-[20px]"  style={{color:"white",background:"brown"}}>${product.price}</p>

                           <p className="form-font absolute bottom-[30px] text-black bg-brown-300 p-[4px] left-[20px]"  style={{color:"white",background:"brown"}}>{product?.category}</p>
                        </div>
                     <div style={{padding:"20px"}}>
                     <h3>{product?.name}</h3>
                     <p  className="form-font" style={{fontSize:"13px"}}>{product?.description}</p>
                     <div className="h-[2px] mt-[10px]  bg-black w-[100%]"></div>

                     <div className="flex gap-[30px]" style={{alignItems:'center'}}>
                        <HiOutlineBuildingLibrary/>
                        <p className="label" style={{color:'black'}}>{product.company}</p>
                     </div>


                     </div>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper> */}

    </div>
  )
}

export default FeaturedCarosel
