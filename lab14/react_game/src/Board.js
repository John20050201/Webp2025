import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {[0, 1, 2].map(row => (
          <div className="board-row" key={row}>
            {[0, 1, 2].map(col => this.renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
