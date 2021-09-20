import React from "react";
import styles from "./SimpleCount.module.css";

export class SimpleCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickReset = () => {
    this.setState({
      count: 0,
    });
  };

  onClickMinus = () => {
    this.setState({
      count: --this.state.count,
    });
  };

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.cardCount}>{this.state.count}</div>

        <div className={styles.cardActive}>
          <button className={styles.cardPlus} onClick={this.onClickPlus}>
            +
          </button>

          <button className={styles.cardReset} onClick={this.onClickReset}>
            &#8635;
          </button>

          <button className={styles.cardMinus} onClick={this.onClickMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}
