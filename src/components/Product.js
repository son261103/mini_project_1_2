import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { id, name, quantity, price, subtotal } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td>${subtotal}</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary"
                                onClick={this.props.onViewProduct}
                        >
                            <i className="fas fa-eye"></i> View
                        </button>
                        <button className="btn btn-sm btn-outline-warning"
                                onClick={this.props.onEditProduct}>
                            <i className="fas fa-edit"></i> Edit
                        </button>
                        <button className="btn btn-sm btn-outline-danger"
                                onClick={this.props.onDeleteProduct}>
                            <i className="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Product;
