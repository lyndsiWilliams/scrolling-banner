import { styled } from "styled-components";

const StyledScrollingBanner = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-95%);
    }
  }
  overflow: hidden;

  .img-track {
    animation: scroll 60s linear infinite;
    display: flex;
    width: 5000px;
    height: 450px;

    &:hover {
      animation-play-state: paused;
    }
  }
`;

const ScrollingBanner = ({
  images,
  altText = "Screenshot",
}: {
  images: string[] | undefined;
  altText?: string;
}) => (
  <StyledScrollingBanner>
    <div className="img-track">
      {images?.map((element, i) => (
        <img
          key={i}
          src={`https://ik.imagekit.io/amythia/${element}`}
          alt={altText}
        />
      ))}
    </div>
  </StyledScrollingBanner>
);

export default ScrollingBanner;
