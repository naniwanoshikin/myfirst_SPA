import React from 'react';
import Graph from './Charts';

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
      <div className="mb-5 mx-auto px-0 col-sm-5">
        {/* アイテム */}
        <div className="work-item pb-4 mx-auto">
          <p className="px-4 pb-0 pt-2 pb-1 my-0 text-right">{this.props.date}</p>
          <h5 className="px-3 py-1 mb-2" onClick={() => { this.handleOpen() }}>
            {this.props.name}
          </h5>
          <a href={this.props.link} target="_blank" rel="noreferrer noopener">
            <img src={this.props.img} width="" height="" alt="my work" />
          </a>
          {/* HTML変換（注意） */}
          <div className="mt-3 px-4 text-justify" dangerouslySetInnerHTML={{ __html: this.props.intro }} />
        </div>
        { this.state.isModalOpen &&
          <div>
            {/* マスク */}
            <div className="modal-out" onClick={() => { this.handleClose() }}></div>
            {/* モーダル画面 */}
            <div className="modal-in mx-auto py-3 px-sm-3 bg-light rounded">
              <h3>{this.props.name}</h3>
              <div className="text-left my-4 mx-5">{this.props.intro2}</div>
              <Graph skill={this.props.skill} />
            </div>
          </div>
        }
      </div>
    );
  }
}
