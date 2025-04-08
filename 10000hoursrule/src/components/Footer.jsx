import { Box, Typography } from "@mui/material";
import LogoImage from '../assets/logo.png';

const Footer = () => {
  return(
    <Box sx={{ textAlign: 'center', mt: 10, pb: 5 }}>
      <img src={LogoImage} alt="logo" style={{marginBottom: 10 }} />
      <br/>
      <Typography variant="caption">
        ✨ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </Typography>
    </Box>
  );
}

export default Footer;