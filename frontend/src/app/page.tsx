"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Input, Slider } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useState } from 'react';

interface Product {
  availability: string;
  discount: number;
  price: number;
  productName: string;
  rating: number;
}

export default function Home() {
  const [companies,setCompanies ] =useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('')

  const categories = [
    "Phone", "Computer", "Pendrive", "Remote", "Speaker", "TV", "Earphone",
    "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Headset",
    "Laptop", "PC"
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setCompanies(event.target.value);
    console.log(companies);
  };
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
  };

  const handleSubmit =() =>{
    axios.get(`http://localhost:8080/categories/companies/${companies}/categories/${category}/products?top=10&minPrice=1&maxPrice=10000`)
    .then((res : any) =>{
        setProducts(res.data)
    })
  }

  // useEffect(() => {
  //   axios.get('http://localhost:8080/categories/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000')
  //   .then((res : any) =>{
  //       setProducts(res.data)
  //   })
  // },[])

 
  return (
    <div>
    <div className='flex'>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Companies</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={companies}
          onChange={handleChange}
          autoWidth
          label="Companies"
        >
          <MenuItem value={'AMZ'}>AMZ</MenuItem>
          <MenuItem value={'FLP'}>FLP</MenuItem>
          <MenuItem value={'SNP'}>SNP</MenuItem>
          <MenuItem value={'MYN'}>MYN</MenuItem>
          <MenuItem value={"AZO"}>AZO</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleCategoryChange}
          autoWidth
          label="Categories"
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className='w-48 ml-5'>
        <h2>Price</h2>
        <Slider/>
      </div>
      <div>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
      </div>

    </div>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt={product.productName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Availability: {product.availability}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
