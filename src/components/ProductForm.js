import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product?.id || '',
            name: this.props.product?.name || '',
            quantity: this.props.product?.quantity || 0,
            price: this.props.product?.price || 0
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id, name, quantity, price } = this.state;
        const product = { id, name, quantity, price, subtotal: quantity * price };
        this.props.onHandleSubmit(this.props.actionName, product);
    }

    render() {
        const { actionName } = this.props;

        return (
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="h4 mb-0">{actionName === 'Edit' ? 'Edit' : 'Add'} Product</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Product ID</label>
                            <input type="text" className="form-control" id="id" name="id"
                                   value={this.state.id}
                                   onChange={this.handleChange}
                                   disabled={actionName === 'Edit'}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="name" name="name"
                                   value={this.state.name}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity</label>
                            <input type="number" className="form-control" id="quantity" name="quantity"
                                   value={this.state.quantity}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" name="price"
                                   value={this.state.price}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {actionName}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductForm;
