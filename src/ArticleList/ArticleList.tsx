import type { Article } from "../../types/article";
import css from "./ArticleList.module.css";
interface ArticleListProp {
  items: Article[];
}
export default function ArticleList({ items }: ArticleListProp) {
  return (
    <ul className={css.articleList}>
      {items.map(({ id, url, title, authors }) => (
        <li key={id} className={css.articleCard}>
          <img
            src={`https://picsum.photos/150/100?random=${Math.floor(
              Math.random() * 1000 + 1
            )}`}
            alt="random"
          />
          <a href={url} target="_blank">
            {title.length > 45 ? title.substring(0, 44) + "..." : title}
          </a>
          <p>Written by {authors[0].name}</p>
        </li>
      ))}
    </ul>
  );
}
