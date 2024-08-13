import React, { Component } from 'react';
import ProductTable from './ProductTable';

class ProductListComponent extends Component {

    handleAddProduct = () => {
        this.props.onAddProduct("Save");
    }

    handleEditProduct = (product) => {
        this.props.onAddProduct('Edit', product);
    }

    handleViewProduct = (product) => {
        this.props.onAddProduct('View', product);
    }

    render() {
        const {products, totalQuantity, totalPrice} = this.props;
        return (
            <div className="card shadow">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h2 className="h4 mb-0">Danh sách sản phẩm</h2>
                    <button className="btn btn-light" id="addProductBtn"
                            onClick={this.handleAddProduct}
                    >
                        <i className="fas fa-plus me-2"></i>Thêm sản phẩm
                    </button>
                </div>
                <div className="card-body">
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="d-flex">
                            <select className="form-select me-2" id="sortSelect">
                                <option value="">Sắp xếp theo</option>
                                <option value="name">Tên</option>
                                <option value="price">Giá</option>
                                <option value="quantity">Số lượng</option>
                            </select>
                        </div>
                        <div className="d-flex">
                            <input type="text" className="form-control me-2" id="searchInput"
                                   placeholder="Tìm kiếm..."/>
                            <button className="btn btn-outline-secondary" id="searchBtn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <ProductTable
                            products={products}
                            onViewProduct={this.handleViewProduct}
                            onEditProduct={this.handleEditProduct}
                        />
                    </div>
                    <div className="table-footer mt-3">
                        <div className="row align-items-center">
                            <div className="col-md-4 text-md-end">
                                <strong>Total:</strong>
                            </div>
                            <div className="col-md-2 text-md-center">
                                <strong>{totalQuantity}</strong>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4 text-md-end">
                                <strong>${totalPrice}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListComponent;
