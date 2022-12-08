import React, {Component} from 'react';
import {BurgerMenuStyled, BurgerStyled} from "./styled";
import Navigation from "../Navigation/Navigation";

interface IState {
    isOpen: boolean
}
const ref = React.createRef<any>();

class Burger extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    handleOpen = () =>{
        this.handleChangeStyles()
        this.setState({...this.state, isOpen: !this.state.isOpen})
    }
    handleChangeStyles = () => {
        if (this.state.isOpen) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        } else {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '17px';
        }
    }
    render() {
        console.log(ref);
        return (
            <BurgerStyled onClick={this.handleOpen}>
                <span
                    className="material-symbols-outlined"
                >
                    {!this.state.isOpen ? 'menu' : 'close'}
                </span>
                {!this.state.isOpen || <BurgerMenuStyled ref={ref}>
                    <Navigation/>
                </BurgerMenuStyled>}
            </BurgerStyled>
        );
    }
}

export default Burger;