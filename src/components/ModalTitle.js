import React from 'react';

function ModalTitle({ modalName }) {
	return (
		<div>
			<h3 className="modal-name ">{modalName}</h3>
			<div className="headerBar">
				<h3>Item</h3>
				<h3>Qty</h3>
				<h3>Price</h3>
				<h3>Sub-total</h3>
				{/* <h4>Status</h4> */}
			</div>
		</div>
	);
}

export default ModalTitle;
