import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return (
		<div>
			<p className="f3 white">
				{'Link an image to detect a face.'}
			</p>
			<div className="center">
				<div id="inputBox" className="form center pa4 br3 shadow-5">
					<input className="f4 br3 pa2 w-70 center b--black-10" type="text" onChange={onInputChange}/>
					<button className="w-30 br3 grow f4 link ph3 pv2 white b--black-10" onClick={onSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;