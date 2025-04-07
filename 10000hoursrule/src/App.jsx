import { useState } from "react";
import { Box, Container, Modal, Typography } from "@mui/material";
import InputForm from './components/InputForm';
import ResultBox from './components/ResultBox';
import ClockImage from './assets/clock.png';
import TitleImage from './assets/title.png';

function App() {
  const [ field, setField ] = useState('');
  const [ time, setTime ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ resultVisible, setResultVisible ] = useState(false);
  const [ modalOpen, setModalOpen ] = useState(false); 

  const handleCalculate = () => {
    const timeValue = Number(time);
    if(!field) {
      alert('입력되지 않았습니다.');
      return;
    }
    if(!time || timeValue > 24) {
      alert('잘못된 값입니다. 24이하의 값을 입력해주세요.');
      return;
    }
    setLoading(true);
    setResultVisible(false);

    setTimeout(() => {
      setLoading(false);
      setResultVisible(true);
    }, 3000);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('URL이 복사되었습니다.');
    });
  };
  
  return (
    <Box sx={{ 
      backgroundColor: '#5B2386', 
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'GmarketSansMedium'  
    }}>
      <Container maxWidth='md' sx={{ pt: 5}}>
        <Box sx={{ 
          display:'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,  
        }}>
          <img src={ClockImage} alt="Clock" width={265} height={265} style={{position: 'relative'}} />
          <Box 
            sx={{
              position: 'absolute',
              width: 564,
            }}>
              <img src={TitleImage} alt="Title" style={{ width: '100%'}}/>
          </Box>
        </Box>
        <InputForm
          field={field}
          setField={setField}
          time={time}
          setTime={setTime}
          handleCalculate={handleCalculate}/>

        <ResultBox
          loading={loading}
          resultVisible={resultVisible}
          field={field}
          time={time}
          onModalOpen={() => setModalOpen(true)}
          onShare={copyUrl}
        />

      </Container>
    </Box>
  )
}

export default App
