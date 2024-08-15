import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ProductListComponent from './components/ProductListComponent';
import ProductForm from './components/ProductForm';
import FooterComponent from './components/FooterComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false,
            actionName: "",
            products: [
                {
                    id: 'P001',
                    name: 'iPhone 11',
                    quantity: 15,
                    price: 1000,
                    subtotal: 15000
                },
                {
                    id: 'P002',
                    name: 'iPhone 12',
                    quantity: 10,
                    price: 1200,
                    subtotal: 12000
                },
                {
                    id: 'P003',
                    name: 'iPhone 13',
                    quantity: 5,
                    price: 1300,
                    subtotal: 6500
                },
                {
                    id: 'P004',
                    name: 'iPhone 14',
                    quantity: 20,
                    price: 1400,
                    subtotal: 28000
                },
            ],
            currentProduct: {},
            searchText: ""
        };
    }

    handleAddProduct = (actionName, product = {}) => {
        this.setState({
            isToggled: true,
            actionName: actionName,
            currentProduct: product
        });
    }

    handleSubmit = (actionName, product) => {
        let listProducts = this.state.products;
        if (actionName === "Edit") {
            for (let i = 0; i < listProducts.length; i++) {
                if (listProducts[i].id === product.id) {
                    listProducts[i] = product;
                    break;
                }
            }
        } else if (actionName === "Save") {
            listProducts.push(product);
        }

        this.setState({
            products: [...listProducts],
            isToggled: false,
            currentProduct: {}
        });
    }

    caculateSubtotal = (products) => {
        const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
        const totalPrice = products.reduce((total, product) => total + product.subtotal, 0);
        return { totalQuantity, totalPrice };
    }

    handleSearch = (event) => {
        this.setState({
            searchText: event.target.value
        });
    }

    handleClearSearch = () => {
        this.setState({
            searchText: ""
        });
    }

    handleDeleteProduct = (product) => {
        const listProducts = this.state.products.filter(p => p.id !== product.id);
        this.setState({
            products: listProducts
        });
    }

    getFilteredProducts = () => {
        const { products, searchText } = this.state;
        if (!searchText) return products;

        return products.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.id.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    render() {
        const { isToggled, actionName, currentProduct } = this.state;
        const filteredProducts = this.getFilteredProducts();
        const { totalQuantity, totalPrice } = this.caculateSubtotal(filteredProducts);

        return (
            <div className="container-fluid">
                <HeaderComponent />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <ProductListComponent
                            products={filteredProducts}
                            onAddProduct={this.handleAddProduct}
                            totalQuantity={totalQuantity}
                            totalPrice={totalPrice}
                            searchText={this.state.searchText}
                            onSearch={this.handleSearch}
                            onClearSearch={this.handleClearSearch}
                            onDeleteProduct={this.handleDeleteProduct}
                        />
                    </div>
                    <div className="col-md-6">
                        {isToggled &&
                            <ProductForm
                                actionName={actionName}
                                product={currentProduct}
                                onHandleSubmit={this.handleSubmit}
                            />}
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default App;
