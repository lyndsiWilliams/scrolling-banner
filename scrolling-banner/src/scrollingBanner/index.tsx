import { useState } from "react";
import { styled } from "styled-components";
import FullSizeImage, { ImageType } from "./FullSizeImage";

const StyledScrollingBanner = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-85%);
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

const exampleImage = {
  image: "pixel/1.jpeg",
  altText: "pixel mcmeowkins",
};

const ScrollingBanner = ({
  images,
  altText = "Screenshot",
}: {
  images: string[] | undefined;
  altText?: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [item, setItem] = useState<ImageType>(exampleImage);
  const handleClick = (item: ImageType) => {
    setItem(item);
    setOpen(!open);
  };

  return (
    <StyledScrollingBanner>
      <div className="img-track">
        {images?.map((element, i) => (
          <img
            key={i}
            src={`https://ik.imagekit.io/amythia/${element}`}
            alt={altText}
            onClick={() => handleClick({ image: element, altText })}
          />
        ))}
      </div>
      <FullSizeImage
        open={open}
        theImage={item.image}
        altText={item.altText}
        index={1}
        setOpen={setOpen}
      />
    </StyledScrollingBanner>
  );
};

export default ScrollingBanner;
