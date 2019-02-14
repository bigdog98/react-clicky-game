import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MatchCards from "./components/MatchCards";
import Footer from "./components/Footer";
import cat from "./cat.json";
import "./App.css";

class App extends Component {
  state = {
    cat,
    clickedCat: [],
    score: 0
  };

  imageClick = event => {
    const currentCat = event.target.alt;
    const CatAlreadyClicked =
      this.state.clickedCat.indexOf(currentCat) > -1;

      if (CatAlreadyClicked) {
        this.setState({
          fish: this.state.fish.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCat: [],
          score: 0
        });
          alert("You lose. Play again?");

        } else {
          this.setState(
            {
              cat: this.state.cat.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCat: this.state.clickedCat.concat(
                currentCat
              ),
              score: this.state.score + 1
            },

            () => {
              if (this.statescore === 8) {
                alert("Yay! You Win!");
                this.setState({
                  fish: this.state.cat.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedCat: [],
                  score: 0
                });
              }
            }
          );
        }
      };
  
      render() {
        return (
          <div>
            <Navbar 
              score={this.state.score}
            />
            <Jumbotron />
            <div className="wrapper">
              {this.state.cat.map(cat => (
                <MatchCards
                  imageClick={this.imageClick}
                  id={cat.id}
                  key={cat.id}
                  image={cat.image}
                />
              ))}
            </div>
            <Footer />
          </div>
        );
      }
    }
    export default App;
