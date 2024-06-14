import { Request, Response } from 'express';
import axios from 'axios';

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    const { top, minPrice, maxPrice } = req.query;
    const { companies, categoryname } = req.params;

    axios.get(`http://20.244.56.144/test/companies/${companies}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`,{
        headers:{
             'Content-Type': 'application/json',
             'Authorization' :req.headers['Authorization']
        }
    })
    .then((data) =>{
        res.json(data.data)
    })
};
