import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Container, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: '名稱', flex: 1 },
  { field: 'location', headerName: '地點', flex: 1 },
  { field: 'price', headerName: '票價', flex: 1 },
];

function App() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then(res => res.json())
      .then(data => {
        const processed = data.map((item, index) => ({
          id: index + 1,
          title: item.title || "無資料",
          location: item.showInfo?.[0]?.location || "無地點",
          price: item.showInfo?.[0]?.price || "無票價"
        }));
        setRows(processed);
      });
  }, []);

  const filteredRows = rows.filter(row =>
    row.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>景點觀光展覽資訊</Typography>
      <TextField
        label="搜尋名稱"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={10} />
      </div>
    </Container>
  );
}

export default App;
