import React from "react";
import { EmojiItem } from "./EmojiItem";
import styles from "./Emoji.module.css";

export class EmojiList extends React.Component {
  render() {
    const { DB } = this.props;

    return (
      <ul className={styles.list}>
        {DB.map((item, index) => {
          const { symbol, title } = item;
          return <EmojiItem key={index} symbol={symbol} title={title} />;
        })}
      </ul>
    );
  }
}
