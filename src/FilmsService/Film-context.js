import React from "react";

const { Provider : FilmDataProvider, 
        Consumer : FilmDataConsumer
      } =  React.createContext();

export {
    FilmDataProvider,
    FilmDataConsumer
}