import { Box, TextField, Typography, Button } from "@mui/material";
import ClickImage from '../assets/click.png';

const InputForm = ({ field, setField, time, setTime, handleCalculate }) => {
  return(
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 20, mb: 7 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography>나는</Typography>
          <TextField 
            variant="outlined"
            placeholder="예)프로그래밍"
            value={field}
            onChange={(e) => setField(e.target.value)}
            sx={{ mx: 2, backgroundColor: '#fff', borderRadius: 1}} />
            <Typography>전문가가 될 것이다.</Typography>
        </Box>
        <Box sx={{display:'flex', alignItems: 'center'}}>
          <Typography>그래서 앞으로 매일 하루에</Typography>
          <TextField 
            type="number"
            placeholder="예)5"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            sx={{ mx: 2, backgroundColor: '#fff', borderRadius: 1}} />
            <Typography>시간 씩 훈련할 것이다.</Typography>
        </Box>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'center', mb: 8}}> 
        <Button 
          variant="contained" 
          onClick={handleCalculate} 
          sx={{backgroundColor: '#FCEE21', color:'#5B2386'}}>
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </Button>
          <img src={ClickImage} alt="click" style={{marginLeft: 20}} />
      </Box>
    </>
  );
}

export default InputForm;