import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function newProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [state, setState] = useState('');

    async function createProduct(ev) {
        ev.preventDefault();
        const data = { title, description, price, state };
        await axios.post('/api/products', data)
    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>new product</h1>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <label>Price (USD)</label>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}
                />
                <label htmlFor="stock-menu">Estado del producto:</label>
                <select
                    id="stock-menu"
                    value={state}
                    onChange={ev => setState(ev.target.value)}>
                    <option value="">Seleccione una opción</option>
                    <option value="en-stock">En stock</option>
                    <option value="sin-existencias">Sin existencias</option>
                </select>
                <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}