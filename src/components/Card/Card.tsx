import React from "react";

import { formatCurrency } from "@utilities/formatCurrency";

import styles from "./Card.module.scss";

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  category?: string;
  price: number;
  classnames?: string | string[];
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  category,
  price,
  onClick,
  classnames,
}: CardProps) => {
  return (
    <div onClick={onClick} className={`${styles.card} ${classnames} card`}>
      <img src={image} alt="card" className={styles.card_image} />
      <div className={styles.card_content}>
        <span className={styles.card_category}>{category}</span>
        <span className={styles.card_title}>{title}</span>
        <span className={styles.card_subtitle}>{subtitle}</span>
        <span className={styles.card_price}>{formatCurrency(price)}</span>
      </div>
    </div>
  );
};
