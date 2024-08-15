import React, { Component } from 'react';
import Product from './Product';

class ProductTable extends Component {
    render() {
        const { products } = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-hover table-bordered product-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <Product
                            key={product.id}
                            {...product}
                            onViewProduct={() => this.props.onViewProduct(product)}
                            onEditProduct={() => this.props.onEditProduct(product)}
                            onDeleteProduct={() => this.props.onDeleteProduct(product)}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;
