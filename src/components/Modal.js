

import './Modal.css'

export default function Modal(props) {

	const closeModal = (e) => {
		props.onClose(e)
	}

	const data = props.filteredData[0]

	return (
		<div className='modal-wrapper'>
			<section className='modal-box'>
				<h1 className='modal-title'>{data.title}</h1>
				<img
					className='modal-image'
					src={require(`../assets/images/${data.image}`)} />
				<p>{data.description}
					<hr />
				</p>
				<div className='modal-buttons'>
					{data.appURL && <button>
						<a
							target='none'
							href={data.appURL}>Live App</a>
					</button>}
					<button>
						<a
							target='none'
							href={data.codeURL}>View Code</a>
					</button>
					<button
						onClick={closeModal}
					>Close</button>
				</div>
			</section>
		</div>
	)
}