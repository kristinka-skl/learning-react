import { useState } from "react";
import axios from "axios";
import css from "./App.module.css";
import Form from "./Form/form";
import type { Article } from "../../types/article";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import Effect from "../Effect/Effect";
import Timer from "../Timer/Timer";

interface HttpResponse {
  results: Article[];
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  console.log("render 1");

  const handleForm = async (data: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get<HttpResponse>(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=20&search=${data}`
      );
      setArticles(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={css.app}>
      <Form onSubmit={handleForm} />
      {isLoading && <Loader />}
      {articles.length > 0 && <ArticleList items={articles} />}
      <Effect />
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className={css.button}
      >
        {isVisible ? "Hide timer" : "Show timer"}
      </button>
      {isVisible && <Timer />}
    </div>
  );
}
