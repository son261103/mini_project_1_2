import React, {Component} from 'react';
import Product from './Product';

class ProductTable extends Component {
    render() {
        const {products} = this.props;

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
                    {products.map(index => (
                        <Product
                            key={index.id}
                            {...index}
                            onViewProduct={() => this.props.onViewProduct(index)}
                            onEditProduct={() => this.props.onEditProduct(index)}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;
