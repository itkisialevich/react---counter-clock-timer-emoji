import React from "react";
import styles from "./Emoji.module.css";

export class EmojiItem extends React.Component {
  render() {
    const { symbol, title } = this.props;

    return <li className={styles.item}>{` ${symbol} ${title} `}</li>;
  }
}
