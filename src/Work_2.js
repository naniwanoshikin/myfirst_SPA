import React from 'react';
import Graph from './Charts'; // グラフ

export default class TheWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleOpen() {
    this.setState({ isModalOpen: true });
  }
  handleClose() {
    this.setState({ isModalOpen: false });
  }
  render() {
    return (
      <div className="work-item mb-5 mx-auto pb-4 px-0 col-sm-5">
        <p className="px-4 pb-0 pt-2 pb-1 my-0 text-right">{this.props.date}</p>
        <h5 className="px-4 py-1 mb-2" onClick={() => { this.handleOpen() }}>
          {this.props.name}
        </h5>
        <a href={this.props.link} target="_blank" rel="noreferrer noopener">
          <img src={this.props.img} alt="my work" width="" height="300" className="w-100" />
        </a>
        {/* ここでHTMLを設定＝危ない */}
        <div className="mt-3 px-4 text-justify" dangerouslySetInnerHTML={{ __html: this.props.intro }} />
        { // モーダル
          this.state.isModalOpen &&
          <div className="work-modal text-center">
            <div className="modalin mx-auto py-3 px-sm-3 bg-light rounded">
              <h3>{this.props.name}</h3>
              <div className="text-justify my-4 mx-5">{this.props.intro2}</div>
              <Graph skill={this.props.skill} />
              <h5 className="bg-warning px-4 py-2 mt-2" onClick={() => { this.handleClose() }}>
                Close</h5>
            </div>
          </div>
        }
      </div>
    );
  }
}
