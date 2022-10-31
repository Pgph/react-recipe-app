import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Comments from "../comments/Comments";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const [fav, setFav] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem(details.id);
    if (data) setFav(true);
  }, [details.id]);

  const toggleFavorite = () => {
    setFav(!fav);
    fav
      ? localStorage.removeItem(details.id)
      : localStorage.setItem(details.id, details.id);
  };

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <Typography color="primary" variant="h3" gutterBottom>
          {details.title}
        </Typography>

        <img src={details.image} alt={details.title} />
        <div onClick={toggleFavorite}>
          {fav ? <BsHeartFill /> : <BsHeart />}
        </div>
      </div>

      <div>
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          {activeTab === "instructions" && (
            <div>
              <Typography
                color="primary"
                variant="body1"
                paragraph
                dangerouslySetInnerHTML={{ __html: details.summary }}
              ></Typography>
              <Typography
                color="primary"
                variant="body1"
                paragraph
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></Typography>
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </div>
      <div>
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  .active {
    background-color: #1976d2;
    color: white;
  }
  .active:hover{
    background-color: #1976d2;
  }
  button {
    margin-bottom: 1rem;
  }
  div{
    @media screen and (max-width: 1024px) {
      grid-column: 1 / 3;
  }
  }
svg {
  margin: 1rem 0;
  font-size: 2rem;
  color: red;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff0000;
    transform: scale(1.2);
}
`;

const Info = styled.div`
  margin-top: 1rem;
  ul {
    list-style: "- ";
    color: #1976d2;
  }

  li {
    margin-bottom: 1rem;
  }
`;

export default Recipe;
