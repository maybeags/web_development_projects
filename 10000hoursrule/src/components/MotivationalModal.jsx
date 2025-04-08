import { Box, Button, Modal, Typography } from "@mui/material";
import LicatImage from '../assets/licat.png';


const MotivationalModal = ({ open, handleClose }) => {

  return(
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#FFF',
        borderRadius: 4,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" align="center" sx={{ fontFamily: }}>
        파이팅!!! 📢
      </Typography>

    </Box>
  );
}

export default MotivationalModal;