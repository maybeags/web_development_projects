import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCars, deleteCar } from "../api/carapi";
import { DataGrid, GridCellParams, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";   // 보험용 -> 얘가 작성법이 바뀌었습니다.
import DeleteIcon from "@mui/icons-material/Delete"; // 얘도 바뀌었습니다
import AddCar from "./AddCar";
import EditCar from "./EditCar";

function Carlist() {
  const [ open, setOpen ] = useState(false);
  const queryClient = useQueryClient();
  const { data, error, isSuccess } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars
  });

  const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries({queryKey: ['cars']});
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const columns: GridColDef[] = [
    {field: 'brand', headerName: 'Brand', width: 200},
    {field: 'model', headerName: 'Model', width: 200},
    {field: 'color', headerName: 'Color', width: 200},
    {field: 'registrationNumber', headerName: 'Reg.nr.', width: 150},
    {field: 'modelYear', headerName: 'Model Year', width: 150},
    {field: 'price', headerName: 'Price', width: 150},
    {
      field: 'edit',
      headerName: '',
      width: 90,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) =>
        <EditCar cardata={params.row}/>
    },
    {
      field: 'delete',
      headerName: '',
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <IconButton aria-label="delete" size="small"
          onClick={() => {
            if (window.confirm(`${params.row.brand}의 ${params.row.model}을 삭제하시겠습니까?`))
              mutate(params.row._links.car.href)
          }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
      )
    }
  ]



  if(!isSuccess) {
    return <span>Loading 중... 😂</span>
  }
  else if (error) {
    return <span>자동차 데이터 가져오기 중 오류 발생 😪</span>
  }
  else {
    return(
      <>
        <AddCar />
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={row => row._links.self.href}
          disableRowSelectionOnClick={true}
          slots={{toolbar: GridToolbar}}
        />

        <Snackbar 
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="자동차가 삭제되었습니다."
        />
      </>
    );
  }
}

export default Carlist;