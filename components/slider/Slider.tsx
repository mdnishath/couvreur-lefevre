"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BsChatQuote } from "react-icons/bs";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Container from "../Container";
const Slider = () => {
  return (
    <div className="py-10">
      <h3 className="text-3xl font-bold text-center py-8">
        What Our Customers Think
      </h3>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="review-swiper"
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="shadow-lg py-8 px-4 rounded-lg relative text-center">
              <div>
                <Image
                  src={"/images/profile.webp"}
                  width={60}
                  height={60}
                  alt="profile"
                  className="rounded-full mx-auto"
                />
              </div>
              <h5 className="text-lg font-semibold mt-3">Mark Smith</h5>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                modi, quos debitis praesentium voluptas minus in accusantium est
                soluta vero delectus, fugiat ipsa, unde quaerat nulla?
                Voluptatum saepe esse eius!
              </p>
              <BsChatQuote className="absolute top-2 right-2 text-2xl text-primary" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg py-8 px-4 rounded-lg relative text-center">
              <div>
                <Image
                  src={"/images/profile.webp"}
                  width={60}
                  height={60}
                  alt="profile"
                  className="rounded-full mx-auto"
                />
              </div>
              <h5 className="text-lg font-semibold mt-3">Mark Smith</h5>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                modi, quos debitis praesentium voluptas minus in accusantium est
                soluta vero delectus, fugiat ipsa, unde quaerat nulla?
                Voluptatum saepe esse eius!
              </p>
              <BsChatQuote className="absolute top-2 right-2 text-2xl text-primary" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg py-8 px-4 rounded-lg relative text-center">
              <div>
                <Image
                  src={"/images/profile.webp"}
                  width={60}
                  height={60}
                  alt="profile"
                  className="rounded-full mx-auto"
                />
              </div>
              <h5 className="text-lg font-semibold mt-3">Mark Smith</h5>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                modi, quos debitis praesentium voluptas minus in accusantium est
                soluta vero delectus, fugiat ipsa, unde quaerat nulla?
                Voluptatum saepe esse eius!
              </p>
              <BsChatQuote className="absolute top-2 right-2 text-2xl text-muted-foreground" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg py-8 px-4 rounded-lg relative text-center">
              <div>
                <Image
                  src={"/images/profile.webp"}
                  width={60}
                  height={60}
                  alt="profile"
                  className="rounded-full mx-auto"
                />
              </div>
              <h5 className="text-lg font-semibold mt-3">Mark Smith</h5>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                modi, quos debitis praesentium voluptas minus in accusantium est
                soluta vero delectus, fugiat ipsa, unde quaerat nulla?
                Voluptatum saepe esse eius!
              </p>
              <BsChatQuote className="absolute top-2 right-2 text-2xl text-primary" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
