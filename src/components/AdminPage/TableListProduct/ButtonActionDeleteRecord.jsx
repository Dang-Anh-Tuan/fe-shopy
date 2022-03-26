import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import styled from "@emotion/styled";
import { Flex } from "../../container/Flex/Flex";

const ContainerContentModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 2px #ccc;
  padding: 40px;
`;

const Backdrop = styled("div")`
  z-index: -10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

function ButtonActionDeleteRecord({ id, onDelete }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpen() {
    setIsOpenModal(true);
  }

  function handleClose() {
    setIsOpenModal(false);
  }

  function handleDelete() {
    onDelete(id);
    handleClose();
  }

  return (
    <>
      <Button color="danger" onClick={handleOpen}>
        <DeleteOutlineOutlinedIcon fontSize="large" />
      </Button>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <ContainerContentModal>
          <Typography variant="u-regular-20">
            Do you want delete the record ?
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              size="large"
              sx={{ width: "80px", fontSize: "1.6rem" }}
              onClick={handleDelete}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="large"
              sx={{ width: "80px", fontSize: "1.6rem" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </ContainerContentModal>
      </Modal>
    </>
  );
}

export default ButtonActionDeleteRecord;
