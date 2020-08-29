import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";


class Board extends Component {
  state = {
    tiles: [],
    array: [],
    score: 0,
  };

  ChangeTiles = (e) => {
    const tile = this.props.images.find((el) => el.name === e.target.id);
    if (e.target.src !== tile.pic) {
      e.target.src = tile.pic;
      this.state.tiles.push(tile);
      this.state.array.push(e.target);
      setTimeout({}, 1000);
      if (this.state.tiles.length === 2) {
        if (this.state.tiles[0] === this.state.tiles[1]) {
          setTimeout(() => alert("Next level!"), 1000);
          this.setState({ score: this.state.score + 20 });
          this.state.tiles.splice(0, this.state.tiles.length);
          this.state.array.splice(0, this.state.array.length);
        } else if (this.state.tiles[0] !== this.state.tiles[1]) {
          setTimeout(() => {
            this.state.array[0].src = this.props.back.pic;
            this.state.array[1].src = this.props.back.pic;
            this.state.tiles.splice(0, this.state.tiles.length);
            this.state.array.splice(0, this.state.array.length);
          }, 1000);
        }
      }
    }
  };
  render() {
    return (
      <div>
        <div className="score">
          <span>Your Score: {this.state.score}</span>
        </div>
        <div className="board">
          {this.props.images.map((el) => {
            return (
              <div className="tile" name={el.name}>
                <img
                  id={el.name}
                  alt="animal"
                  src={this.props.back.pic}
                  onClick={this.ChangeTiles}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    images: state.todo.images,
    back: state.todo.back,
  };
}
export default connect(mapStateToProps)(Board);
