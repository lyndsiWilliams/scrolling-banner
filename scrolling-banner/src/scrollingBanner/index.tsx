import { IKImage } from "imagekitio-react";
import { styled } from "styled-components";

interface StyledCarouselProps {
  maxHeight?: string;
}

const StyledCarousel = styled.div<StyledCarouselProps>`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-75%);
    }
  }
  margin-top: 2%;

  .slide-track {
    animation: scroll 60s linear infinite;
    display: flex;
    width: 100%;
    max-height: ${(props) => props.maxHeight}px;
    height: ${(props) => props.maxHeight}px;

    &:hover {
      animation-play-state: paused;
    }
  }
`;

const Carousel = ({
  images,
  maxHeight = "450",
  altText = "Screenshot",
}: {
  images: string[] | undefined;
  maxHeight?: string;
  altText?: string;
}) => (
  <StyledCarousel maxHeight={maxHeight}>
    <div className="slide-track">
      {images &&
        images.map((element, i) => {
          return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <IKImage
              key={i}
              alt={altText}
              urlEndpoint={`https://ik.imagekit.io/amythia/`}
              path={element}
              height={maxHeight}
              lqip={{ active: true }}
            />
          );
        })}
    </div>
  </StyledCarousel>
);

export default Carousel;
