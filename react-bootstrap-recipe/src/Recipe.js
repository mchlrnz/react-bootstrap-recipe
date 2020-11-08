import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipes }) => {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Recipes</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          {recipes &&
            recipes.map(({ recipe }, index) => (
              <div className="col-lg-3 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal1"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={recipe.image} alt="" />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      {recipe.label}
                    </div>
                    <div className="portfolio-caption-subheading text-muted">
                      {recipe.calories}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>

    // <div className={style.recipe}>
    //   <h1>{title}</h1>
    //   <ol>
    //     {ingredients.map((ingredient) => (
    //       <li>{ingredient.text}</li>
    //     ))}
    //   </ol>
    //   <p>{calories}</p>
    //   <img className={style.image} src={image} alt="" />
    // </div>
  );
};

export default Recipe;
