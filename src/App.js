import axios from 'axios';
import React from 'react';
import DisplaySimpson from './Components/DisplaySimpson';

function App() {
  const [quoteList, setQuoteList] = React.useState({});
  const [isClicked, setIsClicked] = React.useState(false);

  const getSimpson = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      .then((res) => {
        setIsClicked(res ? true : false);
        setQuoteList(res.data[0]);
      });
  };

  return (
    <>
      <button onClick={getSimpson}> afficher un simpson </button>
      {isClicked ? <DisplaySimpson quoteList={quoteList} /> : null}
    </>
  );
}

export default App;
