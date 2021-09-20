import React from "react";
import styles from "./Timer.module.css";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      min: 0,
      hour: 0,
      secString: "",
      minString: "",
      hourString: "",
    };
  }

  onClickStart = () => {
    this.timerID = setInterval(() => this.secondPlus(), 1000);
  };

  secondPlus() {
    this.setState({
      sec: ++this.state.sec,
    });
  }

  onClickStop = () => {
    clearInterval(this.timerID);
  };

  onClickReset = () => {
    clearInterval(this.timerID);
    this.setState({
      sec: 0,
      min: 0,
      hour: 0,
    });
  };

  render() {
    if (this.state.sec <= 9) {
      this.state.secString = "0" + this.state.sec;
    } else {
      this.state.secString = this.state.sec;
    }
    if (this.state.min <= 9) {
      this.state.minString = "0" + this.state.min;
    } else {
      this.state.minString = this.state.min;
    }
    if (this.state.hour <= 9) {
      this.state.hourString = "0" + this.state.hour;
    } else {
      this.state.hourString = this.state.hour;
    }
    if (this.state.sec === 60) {
      this.setState({ sec: 0, min: this.state.min + 1 });
    }
    if (this.state.min === 60) {
      this.setState({ min: 0, hour: this.state.hour + 1 });
    }

    return (
      <div className={styles.card}>
        <div className={styles.cardCount}>
          {this.state.hourString}:{this.state.minString}:{this.state.secString}
        </div>

        <div className={styles.cardActive}>
          <button className={styles.cardStart} onClick={this.onClickStart}>
            Start
          </button>

          <button className={styles.cardReset} onClick={this.onClickReset}>
            Reset
          </button>

          <button className={styles.cardStop} onClick={this.onClickStop}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}
