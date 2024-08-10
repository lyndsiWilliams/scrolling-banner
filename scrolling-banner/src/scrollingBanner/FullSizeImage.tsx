import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Close } from "@mui/icons-material";
import { IKImage } from "imagekitio-react";
import styled from "@emotion/styled";

export type ImageType = {
  image: string;
  altText: string;
};

const StyledDialogTitle = styled(DialogTitle)`
  background-color: rebeccapurple;
  color: white;
  font-size: 1.5em;
  position: sticky;
  top: 0;
`;

const StyledButton = styled(Button)`
  margin-bottom: 4px;
  margin-right: 20px;
  color: white;

  &:hover {
    color: darkgray;
  }
`;

const FullSizeImage = ({
  open,
  theImage,
  altText,
  index,
  setOpen,
}: {
  open: boolean;
  theImage: string;
  altText: string;
  index: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
      <StyledDialogTitle id="responsive-dialog-title">
        <StyledButton onClick={() => setOpen(false)}>
          <Close />
        </StyledButton>
        {"Return to image gallery"}
      </StyledDialogTitle>
      <IKImage
        key={index}
        alt={altText}
        urlEndpoint={`https://ik.imagekit.io/amythia/`}
        path={theImage}
        lqip={{ active: true }}
        loading="lazy"
      />
    </Dialog>
  );
};

export default FullSizeImage;
