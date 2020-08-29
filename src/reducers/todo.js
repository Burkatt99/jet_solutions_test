import { ADD_SCORE } from "../constans/todo_types";
import squirell from "../images/animal.jpg";
import elephant from "../images/elephant.jpg";
import fox from "../images/fox.jpg";
import horse from "../images/horse.jpg";
import lazy from "../images/lazy.jpg";
import lion from "../images/lion.jpg";
import panda from "../images/panda.jpg";
import pingvi from "../images/pingvi.jpg";
import logo from "../images/logo.jpg";

const initialState = {
  images: [
    {
      name: "squirell",
      pic: squirell,
    },
    {
      name: "elephant",
      pic: elephant,
    },
    {
      name: "fox",
      pic: fox,
    },
    {
      name: "panda",
      pic: panda,
    },
    {
      name: "horse",
      pic: horse,
    },
    {
      name: "lazy",
      pic: lazy,
    },
    {
      name: "lion",
      pic: lion,
    },
    {
      name: "pingvi",
      pic: pingvi,
    },
    {
      name: "panda",
      pic: panda,
    },
    {
      name: "lion",
      pic: lion,
    },
    {
      name: "fox",
      pic: fox,
    },
    {
      name: "squirell",
      pic: squirell,
    },
    {
      name: "lazy",
      pic: lazy,
    },
    {
      name: "horse",
      pic: horse,
    },
    {
      name: "pingvi",
      pic: pingvi,
    },
    {
      name: "elephant",
      pic: elephant,
    },
  ],
  back: {
    name: "logo",
    pic: logo,
  },
  score: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return [
        ...state,
        {
          score: action.score,
        },
      ];
    default:
      return state;
  }
};
