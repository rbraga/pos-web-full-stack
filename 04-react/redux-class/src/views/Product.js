import React, { Component } from 'react'
import { Products } from '../api/Products'

export class ProductComponent extends Component {
    state = {
        product: {}
    }

    async componentWillMount() {
        const product = await Products.getProductById(this.props.match.params.id);

        this.setState({ product });
    }

    render() {
        return (
            <div className="product-page">
                {this.state.product.image &&
                    <img width="400"
                        src={require(`../assets/images/${this.state.product.image}`)}
                        alt=""
                    ></img>}
                <h3>{this.state.product.name}</h3>
                <span className="product-price">
                    <b>Price:</b>
                    R$ {this.state.product.price}
                </span>
                <p>{this.state.product.description}</p>
            </div>
        )
    }
}