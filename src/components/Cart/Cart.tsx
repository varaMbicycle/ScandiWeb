import React, {Component} from 'react';
import {CartButton, CartCounter} from "../Header/components/UserBar/styled";
import {CartBackground} from "./styled";
import Modal from "./Modal";
import CartOverlay from "./components/CartOverlay/CartOverlay";
import {connect} from "react-redux"
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";
import {pushToLocalStorage} from "../../utils/utils";

interface IState {
    isOpen: boolean
}

class Cart extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    dropDownRef = React.createRef<any>();

    clickOutside = (event: MouseEvent) => {
        if (this.state.isOpen && this.dropDownRef.current && !this.dropDownRef.current.contains(event.target as Node) || event.target === this.dropDownRef.current) {
            this.handleClose(event)
        }
    }

    changeStyles = () => {
        if (document.body.clientHeight - document.documentElement.clientHeight) {
            if (!this.state.isOpen) {
                document.body.style.position = 'static';
                document.body.style.overflow = 'auto';
                if (window.innerWidth > 1080) {
                    document.body.style.paddingRight = '0';
                }
            } else {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                if (window.innerWidth > 1080) {
                    document.body.style.paddingRight = '17px';
                }
            }
        }
    }

    handleOpen = (event: any) => {
        !this.state.isOpen && this.setState({isOpen: true})
        setTimeout(this.changeStyles, 0);
        event.stopPropagation();
    }
    handleClose = (event: any) => {
        this.setState({isOpen: false})
        setTimeout(this.changeStyles, 500);

        event.stopPropagation();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.clickOutside)
        pushToLocalStorage(this.props.cart);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.clickOutside)
    }

    componentDidUpdate() {
        pushToLocalStorage(this.props.cart);
    }

    render() {
        const {cart, value, incrementQuantity, decrementQuantity, del, selectItem} = this.props;
        const count = cart.reduce((count: number, product: any) => {
            count += product.quantity;
            return count
        }, 0);
        return (
            <div>
                <CartButton onMouseDown={this.handleOpen}>
                    <img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart"/>
                    <CartCounter count={cart.length}>{count}</CartCounter>
                </CartButton>
                <Modal>
                    <CartBackground isOpen={this.state.isOpen} ref={this.dropDownRef}>
                        <CartOverlay
                            products={cart}
                            currentCurrency={value}
                            onIncrement={incrementQuantity}
                            onDecrement={decrementQuantity}
                            onDelete={del}
                            selectItem={selectItem}
                            handleClose={this.handleClose}
                            clickOutside={this.clickOutside}
                        />
                    </CartBackground>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
