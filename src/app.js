import { AppLib } from "./app-core/lib";
import React from "react";
import ReactDOM from "react-dom";

let appLib = new AppLib();

let myapp = {
  myfunction: function () {
    ReactDOM.render(
      <div>Hello World My Friend From Another World</div>,
      document.getElementById("app")
    );
  },
};

Neutralino.init({
  load: function () {
    myapp.myfunction();
    appLib.showSettings();
  },
  pingSuccessCallback: function () {},
  pingFailCallback: function () {},
});
