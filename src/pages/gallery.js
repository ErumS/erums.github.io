import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Separator, Text, Row } from '../components/common';
import COLORS from '../constants/colors';
import { GALLERY_IMAGES, GALLERY_VIDEOS, GALLERY_TESTIMONIALS } from '../constants';
import ImageZoom from '../components/image-zoom';

const SlideShow = styled.div`
  width: 75%;
  margin: auto;
  height: auto;
`;

const Img = styled.img`
  height: 324px;
  width: inherit;
  transform: ${({ current }) => (current ? 'scale(1.25, 1)' : 'scale(0.7, 0.75)')};
  opacity: ${({ current }) => (current ? '1' : '0.5')};
  margin-top: ${({ current }) => (current ? '10px' : '15px')};
  border: 1px solid ${COLORS.LIGHT_GRAY};
  cursor: pointer;

  @media (max-width: 768px) {
    height: 228px;
    transform: ${({ current }) => (current ? 'scale(1.25, 1)' : 'scale(0.625, 0.75)')};
  }

  ${({ video }) =>
    video &&
    css`
      @media (min-width: 769px) {
        height: 500px;
        margin: 0;
        transform: scale(0.75);
      }
    `}
`;

const Iframe = styled.iframe`
  height: 315px;
  transform: scale(0.95, 1);
  margin-top: 15px;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const Wrapper = styled(Row)`
  padding: 28px 16px;
  height: ${({ current }) => (current ? '264px' : '240px')};
  margin: ${({ current }) => (current ? '0 12px' : '12px 16px')};
  border: 1px solid ${COLORS.THEME};
  border-radius: 20px;
  background-color: ${COLORS.WHITE};
  box-shadow: ${({ current }) =>
    current
      ? '8px 4px 8px 0px rgba(0, 0, 0, 0.5)'
      : '1px 1px 1px 1px rgba(0, 0, 0, 0.5)'};

  @media (max-width: 768px) {
    padding: 16px;
    margin: ${({ current }) => (current ? '0 12px' : '6px 16px')};
  }
`;

const TestmText = styled(Text)`
  height: 160px;
  overflow-y: auto;

  @media (max-width: 768px) {
    height: 172px;
  }
`;

const SlideShowDiv = styled(SlideShow)`
  @media (min-width: 769px) {
    margin-top: -40px;
  }
`;

const SlideRow = styled(Row)`
  display: flex !important;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  width: 72px;
  color: ${COLORS.GRAY};
  cursor: pointer;

  &.before {
    border-right: 1px solid ${COLORS.LIGHT_GRAY};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: rgb(87, 154, 97, 0.8);
      color: ${COLORS.BLACK};
      cursor: auto;
    `}
`;

const ToggleRow = styled(Row)`
  border: 1px solid ${COLORS.LIGHT_GRAY};
  margin-top: 24px;
`;

const Gallery = props => {
  const { location: { pathname } = {} } = props;
  const [activeImageSlide, setActiveImageSlide] = useState(0);
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setImage] = useState('');
  const [isAfterImage, setAfterImage] = useState(true);
  const imageSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => setStates(current, next),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };
  const videoSettings = {
    className: 'video-slider',
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 2,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => setActiveVideoSlide(next),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };
  const testimonialSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => setActiveTestimonialSlide(next),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  const setStates = (current, next) => {
    setActiveImageSlide(next);
    if (current !== next) setAfterImage(true);
  };

  const Toggle = () => {
    return (
      <ToggleRow>
        <Button
          className="before"
          isSelected={!isAfterImage}
          onClick={() => setAfterImage(false)}
          disabled={!isAfterImage}
        >
          Before
        </Button>
        <Button
          isSelected={isAfterImage}
          onClick={() => setAfterImage(true)}
          disabled={isAfterImage}
        >
          After
        </Button>
      </ToggleRow>
    );
  };

  const getImageSrc = (isCurrent, beforeImage, image) => {
    if (isCurrent) {
      if (isAfterImage) return image;
      return beforeImage || image;
    }

    return image;
  };

  return (
    <Layout location={pathname}>
      <SEO
        title="Organizing consultant and home improvement gallery pictures"
        description="Home improvement, gallery, pictures, videos of hoem organization"
      />
      {openModal && (
        <ImageZoom
          image={activeImage}
          onClose={() => {
            setOpenModal(false);
            setImage('');
          }}
        />
      )}
      <Separator height={36} />
      <h1>
        <Text color={COLORS.THEME} size="x-large" weight="700" align="center">
          Glimpses of our Work
        </Text>
      </h1>
      <Separator height={24} mobileHeight={16} />
      <SlideShow>
        <style>{`
          .video-slider > button {
            top: 160px;
          }
          .slick-prev {
            left: -54px;
          }
          .slick-arrow:before {
            font-size: 48px;
            color: ${COLORS.THEME};
            opacity: 0.8;
          }

          @media only screen and (max-width: 767px) {
            .slick-prev {
              left: -38px !important;
            }
            .slick-next {
              right: -18px; !important;
            }
            .slick-arrow:before {
            font-size: 40px !important;}
          }
        `}</style>
        <Slider {...imageSettings}>
          {GALLERY_IMAGES.map((image, index) => {
            const isCurrent = index === activeImageSlide;

            return (
              <SlideRow direction="column">
                <Img
                  key={index}
                  src={getImageSrc(isCurrent, image.beforeImage, image.image)}
                  alt="Professional organizer gallery"
                  current={isCurrent}
                  onClick={() => {
                    setOpenModal(true);
                    setImage(getImageSrc(isCurrent, image.beforeImage, image.image));
                  }}
                />
                {isCurrent && image.beforeImage && <Toggle />}
              </SlideRow>
            );
          })}
        </Slider>
      </SlideShow>
      <Separator height={72} />
      <Text color={COLORS.THEME} size="x-large" weight="700" align="center">
        Some Videos
      </Text>
      <Separator height={64} mobileHeight={16} />
      <SlideShowDiv>
        <Slider {...videoSettings}>
          {GALLERY_VIDEOS.map((video, index) => (
            <Iframe
              key={index}
              src={video}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              current={index === activeVideoSlide}
            ></Iframe>
          ))}
        </Slider>
      </SlideShowDiv>
      <Separator height={16} mobileHeight={48} />
      <h2>
        <Text color={COLORS.THEME} size="x-large" weight="700" align="center">
          Client testimonials
        </Text>
      </h2>
      <Separator height={40} mobileHeight={24} />
      <SlideShow>
        <Slider {...testimonialSettings}>
          {GALLERY_TESTIMONIALS.map((testm, index) => (
            <Fragment key={index}>
              <Wrapper
                direction="column"
                justifyContent="space-between"
                current={index === activeTestimonialSlide}
              >
                <TestmText
                  align="center"
                  color={COLORS.GRAY}
                  mobileSize="small"
                  mobileLineHeight="14"
                >
                  {testm.text}
                </TestmText>
                {/* <Separator height={16} /> */}
                <Text
                  align="center"
                  size="large"
                  weight="600"
                  family="open sans"
                  mobileSize="small"
                >
                  {testm.name}
                </Text>
              </Wrapper>
            </Fragment>
          ))}
        </Slider>
      </SlideShow>
      <Separator height={80} />
    </Layout>
  );
};

export default Gallery;
