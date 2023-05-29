import { mongooseConnect } from "@/lib/mongoose";
import {Product} from "@/models/Product"

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if (method === 'POST') {
        const {title,description,price,state} = req.body;
        const productDoc = await Product.create({
                title,description,price,state,
        });
        
        res.json(productDoc);
    }
    
  }