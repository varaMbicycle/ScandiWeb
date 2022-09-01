import {Component} from 'react';
import * as ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

interface IProps {
	children?: JSX.Element;
}

class Modal extends Component<IProps> {
	private el: HTMLDivElement;
	constructor(props:IProps) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		if(modalRoot) modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		if(modalRoot) modalRoot.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		);
	}
}
export default Modal;
