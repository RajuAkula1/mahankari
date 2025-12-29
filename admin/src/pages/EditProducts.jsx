import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

export default function EditProducts() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const [form, setForm] = useState({
    productName: "",
    sku: "",
    brand: "",
    price: "",
    discount: "",
    discountedPrice: "",
    category: "",
    stock: "",
    specifications: "",
    featured: "",
    variants: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  const fetchProduct = async (productId) => {
    try {
      // Filter from local initialProducts based on id
      const product = initialProducts.find((p) => p.id === parseInt(productId));
      if (product) {
        setForm({
          productName: product.productName || "",
          sku: product.sku || "",
          brand: product.brand || "",
          price: product.price || "",
          discount: product.discount || "",
          discountedPrice: product.discountedPrice || "",
          category: product.category || "",
          stock: product.stock || "",
          specifications: product.specifications || "",
          featured: product.featured || "",
          variants: product.variants || "",
          description: product.description || "",
        });
        setImages(product.images || []);
      } else {
        alert("Product not found");
      }
    } catch (err) {
      alert("Failed to fetch product");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setImages([...images, ...e.dataTransfer.files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // For demo, just alert success without API call
      alert("Product updated successfully");
    } catch (err) {
      alert("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Edit Product
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          disabled={loading}
          onClick={() => navigate("/products")}
        >
          Back to Products
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={0} sx={{ p: 3, width: "50%" }}>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Product Name</Typography>
            <TextField
              fullWidth
              placeholder="Product Name"
              name="productName"
              value={form.productName}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>SKU</Typography>
            <TextField
              fullWidth
              placeholder="Product sku"
              name="sku"
              value={form.sku}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Brand</Typography>
            <TextField
              fullWidth
              placeholder="Brand"
              name="brand"
              value={form.brand}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Price</Typography>
            <TextField
              fullWidth
              placeholder="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Discount</Typography>
            <TextField
              fullWidth
              placeholder="Discount"
              name="discount"
              value={form.discount}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Discounted Price</Typography>
            <TextField
              fullWidth
              placeholder="Discounted Price"
              name="discountedPrice"
              value={form.discountedPrice}
              onChange={handleChange}
            />
          </Box>
          <Box
            border="1px dashed #ccc"
            borderRadius={2}
            height={140}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="text.secondary"
            sx={{ cursor: "pointer" }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            component="label"
          >
            <input
              type="file"
              multiple
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            Drop images here or click to select
            {images.length > 0 && (
              <Typography variant="body2" mt={1}>
                {images.length} file(s) selected
              </Typography>
            )}
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Category</Typography>
            <TextField
              fullWidth
              select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <MenuItem value="">Select...</MenuItem>
              <MenuItem value="physical">Physical</MenuItem>
              <MenuItem value="digital">Digital</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Stock</Typography>
            <TextField
              fullWidth
              placeholder="Stock"
              name="stock"
              value={form.stock}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Specifications</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Enter product specifications"
              name="specifications"
              value={form.specifications}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Featured</Typography>
            <TextField
              fullWidth
              placeholder="Featured"
              name="featured"
              value={form.featured}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>variants</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Enter product variants"
              name="variants"
              value={form.variants}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, mb: 1 }}>
            <Typography mb={1}>Description</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Enter product description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </Box>
        </Paper>
      </Box>
      <Divider />
      {/* Footer */}
      <Box p={3} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined">Save as Draft</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={loading}>
          Update Product
        </Button>
      </Box>
    </Box>
  );
}
