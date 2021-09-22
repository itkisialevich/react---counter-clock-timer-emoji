import React from "react";
import styles from "./Timer.module.css";

function formatTimeNumber(timeNumber) {
  return timeNumber < 10 ? `0${timeNumber}` : timeNumber;
}

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      min: 0,
      hour: 0,
    };
  }

  onClickStart = () => {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.secondPlus(), 1000);
  };

  secondPlus() {
    this.setState({
      sec: ++this.state.sec,
    });

    if (this.state.sec === 60) {
      this.setState({ sec: 0, min: this.state.min + 1 });
    }
    if (this.state.min === 60) {
      this.setState({ min: 0, hour: this.state.hour + 1 });
    }
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
    const { hour, min, sec } = this.state;

    return (
      <div className={styles.card}>
        <div className={styles.cardCount}>
          {formatTimeNumber(hour)}:{formatTimeNumber(min)}:
          {formatTimeNumber(sec)}
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
