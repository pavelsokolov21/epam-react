import React from "react";
import { storiesOf } from "@storybook/react";
import FilmCard from "../src/components/FilmCard";
import "../src/App.css";

storiesOf("Film card", module).add("Card", () => (
  <FilmCard
    title="Title"
    img="https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg"
    genre="Action & Drama"
    dateRelease="2020"
  />
));
