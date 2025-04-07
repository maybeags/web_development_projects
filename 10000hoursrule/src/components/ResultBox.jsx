import { Box, Typography, Button } from "@mui/material";
import LoadingImage from '../assets/loading.png';

const ResultBox = ({loading, resultVisible, field, time, onModalOpen, onShare}) => {
  const calculatedDays = time ? Math.ceil(10000 / Number(time)) : 0;

  return(
    <>
      {loading && (
        <Box sx={{display:'flex', justifyContent: 'center', mb: 8}}>
          <img src={LoadingImage} alt="loading" style={{
            animation: 'rotate 1.1s infinite linear',
            width: 100,
          }}/>
        </Box>

        // 여기서부터 내일하겠습니다.
      )}
    </>
  );
}

export default ResultBox;