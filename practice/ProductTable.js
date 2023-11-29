import React, { useState, useEffect } from 'react';

function ProductTable() { // Changed function name
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Fetch data from the provided URL
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products); 
                setLoading(false);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="Search by ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <table>
                {/* ... Table header here ... */}
                <tbody>
                    {filteredProducts
                        .filter((product) => product.id.toString().includes(searchTerm))
                        .map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>
                                    <img src={product.thumbnail} alt={product.title} width="50" height="50" />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable; 
