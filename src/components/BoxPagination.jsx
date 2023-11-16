import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const BoxPagination = ({ props }) => {
  return (
    <>
      <div>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={props.rows}
            columns={props.columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default BoxPagination
