import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header className="dev-header">
                <div className="container">
                    <div className="dev-logo text-center">
                        <h1 className="h4 mb-0 ms-2">Quản lý sản phẩm - Mini Project 1</h1>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
