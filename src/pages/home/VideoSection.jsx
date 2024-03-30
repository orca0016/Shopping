import { PlayCircleOutlineRounded } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ParallaxText from "../../components/ParallaxText";

const VideoSection = () => {
  const cover = useRef(0);
  const changeElementStyle = () => {
    const element = cover.current;

    if (element) {
      element.style.zIndex = "2";
    }
  };
  
  return (
    <>
      <div className="w-full ">
        <div
          className="iframe-container aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div
            className="iframe-cover cursor-pointer flex justify-center items-center"
            onClick={changeElementStyle}
          >
            <PlayCircleOutlineRounded sx={{ fontSize: "80px" }} />
          </div>
          <iframe
            ref={cover}
            className="iframe"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Hgg7M3kSqyE?si=Uxezt5597c4PXP0E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="pt-20  comment-section aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            style={{
              width: "100%",
              minHeight: "100%",
              padding: "50px 128px",
            }}
            className="mySwiper video-swiper "
          >
            <SwiperSlide className="slide-comment ">
              <Typography variant="h5" color="GrayText">
                Nemo enim ipsam voluptatem quia voluptas sit as pernatur iaut
                odite aut fugit, sed quia consequunt ur magni dolores eos qui
                ratione voluptatem sequi dolor porro quisquam nesciunt.
              </Typography>
              <Avatar
                src="https://html.designingmedia.com/aimentor/assets/images/engineer-img1.png"
                sx={{ width: 56, height: 56 }}
              >
                user
              </Avatar>
              <Typography variant="h4">John Michael</Typography>
              <Typography variant="subtitle1" color="grey">
                ui/ux
              </Typography>
            </SwiperSlide>
            <SwiperSlide className="slide-comment ">
              <Typography variant="h5" color="GrayText">
                Nemo enim ipsam voluptatem quia voluptas sit as pernatur iaut
                odite aut fugit, sed quia consequunt ur magni dolores eos qui
                ratione voluptatem sequi dolor porro quisquam nesciunt.
              </Typography>
              <Avatar
                src="https://html.designingmedia.com/aimentor/assets/images/engineer-img1.png"
                sx={{ width: 56, height: 56 }}
              >
                user
              </Avatar>
              <Typography variant="h4">John Michael</Typography>
              <Typography variant="subtitle1" color="grey">
                ui/ux
              </Typography>
            </SwiperSlide>
            <SwiperSlide className="slide-comment ">
              <Typography variant="h5" color="GrayText">
                Nemo enim ipsam voluptatem quia voluptas sit as pernatur iaut
                odite aut fugit, sed quia consequunt ur magni dolores eos qui
                ratione voluptatem sequi dolor porro quisquam nesciunt.
              </Typography>
              <Avatar
                src="https://html.designingmedia.com/aimentor/assets/images/engineer-img1.png"
                sx={{ width: 56, height: 56 }}
              >
                user
              </Avatar>
              <Typography variant="h4">John Michael</Typography>
              <Typography variant="subtitle1" color="grey">
                ui/ux
              </Typography>
            </SwiperSlide>
            <SwiperSlide className="slide-comment ">
              <Typography variant="h5" color="GrayText">
                Nemo enim ipsam voluptatem quia voluptas sit as pernatur iaut
                odite aut fugit, sed quia consequunt ur magni dolores eos qui
                ratione voluptatem sequi dolor porro quisquam nesciunt.
              </Typography>
              <Avatar
                src="https://html.designingmedia.com/aimentor/assets/images/engineer-img1.png"
                sx={{ width: 56, height: 56 }}
              >
                user
              </Avatar>
              <Typography variant="h4">John Michael</Typography>
              <Typography variant="subtitle1" color="grey">
                ui/ux
              </Typography>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        className="p-10 pb-20 aos-init aos-animate "
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <section>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </section>
      </div>
    </>
  );
};

export default VideoSection;
