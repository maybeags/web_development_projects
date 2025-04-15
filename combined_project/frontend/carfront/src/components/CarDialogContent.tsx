import {DialogContent} from "@mui/material";
import { Car } from "../types";
import {TextField} from "@mui/material";  // 첫 번째 import 방법
import Stack from "@mui/material/Stack";  // 두 번째 import 방법

type DialogFormProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLTextFieldElement>) =>
    void;
}

function CarDialogContent({ car, handleChange } : DialogFormProps) {
  return(
    <DialogContent>
      <Stack spacing={2} mt={1}>
        <TextField label="Brand" name="brand" value={car.brand} onChange={handleChange}/>

        <TextField label="Model" name="model" value={car.model} onChange={handleChange}/>

        <TextField label="color" name="color" value={car.color} onChange={handleChange}/>

        <TextField label="Year" name="modelYear" value={car.modelYear} onChange={handleChange}/>

        <TextField label="Reg.nr" name="registrationNumber" value={car.registrationNumber} onChange={handleChange}/>

        <TextField label="Price" name="price" value={car.price} onChange={handleChange}/>
      </Stack>
    </DialogContent>
  );
} 

export default CarDialogContent;