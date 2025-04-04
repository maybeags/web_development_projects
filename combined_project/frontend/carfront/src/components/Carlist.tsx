import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCars, deleteCar } from "../api/carapi";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

function Carlist() {
  const queryClient = useQueryClient();
  const { data, error, isSuccess } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars
  });

  const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
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
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) =>
        <button
          onClick={() => mutate(params.row._links.car.href)}  
        >
          삭제
        </button>
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
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={row => row._links.self.href}
        // disableRowSelectionOnClick={true}
      />
    );
  }
}

export default Carlist;