import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  const APP_ID = "42520ad9";
  const APP_KEY = "27f7f59d04c0225c65f9ff2af97e597f";

  const GOOGLE_APP_KEY = "AIzaSyCDqQ7vrrSMFSlD1qKWKnmcWr2C2j2K01k";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const [books, setBooks] = useState([]);

  useEffect(async () => {
    getRecipes();
    getBooks();
    console.log(recipes);
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getBooks = async () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${GOOGLE_APP_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        setBooks(result.items);
      });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const portfolioLinks = [
    {
      title: "Phone2prints",
      caption: "Photos print and delivered",
    },
    {
      title: "HAI!",
      caption: "Earn Rewards!",
    },
  ];

  return (
    <div className="App">
      <Navigation />

      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </header>

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Recipe recipes={recipes} />

      <Services />
      <Portfolio portfolioLinks={portfolioLinks} />
      <About />
      <Team />
      <Contact />
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="./assets/img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="./assets/img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="./assets/img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="./assets/img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left">
              Copyright © Your Website 2020
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a className="mr-3" href="#!">
                Privacy Policy
              </a>
              <a href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
