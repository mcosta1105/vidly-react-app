import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    genres: [],
    data: {
      title: "",
      genre: {},
      numberInStock: "",
      rate: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in stock"),
    rate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Rate")
  };

  componentDidMount(){
    const genres = [...getGenres()];
    this.setState({genres});
  }

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genre", "Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number in Stock")}
        {this.renderInput("rate", "Rate")}
        {this.renderButton("Save")}
      </form>
    </div>
    );
  }
}

// const MovieForm = ({ match, history }) => {
//   return (
//     <div>
//       <h1>Movie Form {match.params.id}</h1>
//       <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
//     </div>
//   );
// };

export default MovieForm;
