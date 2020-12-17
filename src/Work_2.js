import React from 'react';

// 改行（\n）
// (@param, @return) = (string, string)
const newLine = (string) => {
  return string.split('\n').map((x, i) => (<p className="mb-0" key={i}>{x}</p>));
}

class TheWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleWork() {
    this.setState({ isModalOpen: true });
  }
  handleClose() {
    this.setState({ isModalOpen: false });
  }
  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="work-modal text-center position-fixed">
          <div className="modalin position-absolute mx-auto p-4 pb-5 bg-light rounded">
            <h3>{this.props.name}
              <span className="float-right" onClick={() => { this.handleClose() }}>
                <i className="fas fa-undo-alt text-info"></i></span>
            </h3>
            <p className="text-justify">{newLine(this.props.intro2)}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="work-item mb-5 mx-auto pb-4 px-0 col-sm-5">
        <p className="px-4 pb-0 pt-2 pb-1 my-0 text-right">{this.props.date}</p>
        <h5 className="d-inline-block px-4 py-1 mb-2 rounded" onClick={() => { this.handleWork() }}>
          {this.props.name}</h5>
        <a href={this.props.link} target="_blank" rel="noreferrer noopener">
          <img src={this.props.img} alt="my work" width="" height="300" className="w-100" />
        </a>
        <div className="mt-3 px-4 text-justify">{newLine(this.props.intro)}</div>
        {modal}
      </div>
    );
  }
}

export default TheWork;
