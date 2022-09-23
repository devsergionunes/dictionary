import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import { WordDetails } from "../WordDetails";
import * as S from "./styles";

type DrawerWordDetailsProps = {
  openDrawer: boolean;
  onCloseDrawer: () => void;
};

export function DrawerWordDetails({
  openDrawer,
  onCloseDrawer,
}: DrawerWordDetailsProps) {
  return (
    <S.DrawerBottom
      anchor="bottom"
      open={openDrawer}
      onClose={() => onCloseDrawer()}
    >
      <S.DrawerHeader>
        <IconButton onClick={() => onCloseDrawer()}>
          <CloseIcon />
        </IconButton>
      </S.DrawerHeader>
      <S.DrawerContainer>
        <WordDetails />
      </S.DrawerContainer>
    </S.DrawerBottom>
  );
}
