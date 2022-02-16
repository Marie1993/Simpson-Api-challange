import '../Style/QuoteCard.css';

function DisplaySimpson(props) {
  const { quote, character, characterDirection, image } = props.quoteList;

  return (
    <figure className='QuoteCard'>
      <img src={image} alt={character} />
      <figcaption>
        <blockquote>{quote}</blockquote>
        <cite>{character}</cite>
      </figcaption>
    </figure>
  );
}
export default DisplaySimpson;
