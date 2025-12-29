import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    productName: "Product name example",
    category: "Books",
    images: [],
    brand: "Brand A",
    sku: "SKU-52442",
    stock: 30,
    price: 410,
    discount: 10,
    discountedPrice: 369,
    specifications: "specifications",
    featured: "featured",
    variants: "variants",
    description: "description",
  },
  {
    id: 2,
    productName: "Product name example",
    category: "Books",
    images: [],
    brand: "Brand A",
    sku: "SKU-52442",
    stock: 30,
    price: 410,
    discount: 10,
    discountedPrice: 369,
    specifications: "specifications",
    featured: "featured",
    variants: "variants",
    description: "description",
  },
  {
    id: 3,
    productName: "Product name example",
    category: "Books",
    images: [],
    brand: "Brand A",
    sku: "SKU-52442",
    stock: 30,
    price: 410,
    discount: 10,
    discountedPrice: 369,
    specifications: "specifications",
    featured: "featured",
    variants: "variants",
    description: "description",
  },
  {
    id: 4,
    productName: "Product name example",
    category: "Books",
    images: [],
    brand: "Brand A",
    sku: "SKU-52442",
    stock: 30,
    price: 410,
    discount: 10,
    discountedPrice: 369,
    specifications: "specifications",
    featured: "featured",
    variants: "variants",
    description: "description",
  },
  {
    id: 5,
    productName: "Product name example",
    category: "Books",
    images: [],
    brand: "Brand A",
    sku: "SKU-52442",
    stock: 30,
    price: 410,
    discount: 10,
    discountedPrice: 369,
    specifications: "specifications",
    featured: "featured",
    variants: "variants",
    description: "description",
  },
];

const StockChip = styled(Chip)(({ theme, stock }) => ({
  backgroundColor:
    stock === 0
      ? theme.palette.grey[300]
      : stock < 20
      ? theme.palette.warning.main
      : theme.palette.success.main,
  color: stock === 0 ? theme.palette.text.primary : theme.palette.common.white,
  height: 24,
  fontSize: 12,
}));

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const filteredProducts = initialProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight={600}>
          Products
        </Typography>
        <Box>
          <Button variant="outlined" sx={{ mr: 1 }}>
            Export
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate("/products/add")}
          >
            Add Product
          </Button>
        </Box>
      </Box>

      <TextField
        fullWidth
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Discounted Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div>
                      <div style={{ float: "left", marginRight: 10 }}>
                        <img
                          src={
                            product.images[0] ||
                            "http://localhost:5000/src/assets/logo2.png"
                          }
                          alt={product.productName}
                          style={{
                            width: 40,
                            height: 40,
                            objectFit: "cover",
                            borderRadius: 4,
                          }}
                        />
                      </div>
                      <div>
                        <Typography fontWeight={500}>
                          {product.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.category}
                        </Typography>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.price.toFixed(2)}</TableCell>
                  <TableCell align="center">
                    {product.discount.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {product.discountedPrice.toFixed(2)}
                  </TableCell>
                  <TableCell>{product.discountedPrice.toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => navigate(`/products/edit/${product.id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredProducts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Rows per page"
        />
      </TableContainer>
    </Box>
  );
};

export default Products;
