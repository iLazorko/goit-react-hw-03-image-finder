import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickKeyDown);
  }

  clickKeyDown = elem => {
    if (elem.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.dataModal;

    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
