const PosterInfo = ({poster}) => {
  return (  
    <div className=""> 
      <div className="hosting-line">Hosted By {poster.name}</div>
    </div>
  );
}

export default PosterInfo;