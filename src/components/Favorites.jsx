import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./CardList";
import googleBookToAppBook from "../utils/googleBookToAppBook";
import { useSnackbar } from "notistack";

export default function Favorites({ accessToken }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const removeFavorite = (id) => {
    setBooks((books) => books.filter((book) => book.id !== id));
  };
  useEffect(() => {
    if (accessToken.value) {
      setIsLoading(true);
      axios({
        method: "GET",
        url:
          "https://books.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes",
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
        params: {
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
        },
      })
        .then((res) => {
          setIsLoading(false);
          setBooks(res.data.items ? res.data.items : []);
        })
        .catch((err) => {
          setIsLoading(false);
          enqueueSnackbar(err.message);
        });
    }
  }, [accessToken, enqueueSnackbar]);

  return (
    <>
      <div className="favorites">
        <h1>Favorites</h1>
        {accessToken.value && books.length === 0 && !isLoading ? (
          <div className="favorites-message">Your favorites list is empty</div>
        ) : accessToken.value && !isLoading ? (
          <div className="favorites-message">Your favorites list</div>
        ) : !accessToken.value && !isLoading ? (
          <div className="favorites-message">
            Please login to see your favorites
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {accessToken.value ? (
        <CardList
          books={books.map(googleBookToAppBook)}
          isLastPage={false}
          query={``}
          removeFavorite={removeFavorite}
          accessToken={accessToken}
        />
      ) : (
        <div></div>
      )}
      {isLoading === true && <div className="loading-msg">Loading...</div>}
    </>
  );
}
