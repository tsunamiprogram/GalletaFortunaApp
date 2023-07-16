
function CookiesCard({ textColor, phrase }) {
    return (
  
      <article >
        <div className="title">
          <h2 className="color" >GALLETAS DE LA</h2>
          <hr className="line"/>
          <h2 className="color">FORTUNA</h2>
        </div>
        <div className="cookies-card">
          <div className="cookies-phrase">
           <h3 className= 'cookies-phrase1'style={{ color: textColor }}> {phrase.phrase}</h3>
            <h4 className='cookies-phrase2' style={{ color: textColor }}>{phrase.author} </h4>
         </div>
        </div>
      </article>
  
    );
  }
  
  export default CookiesCard;
  