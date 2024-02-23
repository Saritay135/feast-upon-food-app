const Shimmer = () => {
   return (
   <div className="body"> 
      {Array(10)
      .fill("")
      .map(()=>
      <div className="shimmer-card"> 
          <div className="img-card">
          
          </div>
          <div className="card-details">
          <h3 className="card-name"></h3>
          <h4 className="card-cuisines"></h4>
          <h5></h5>
          </div>
      </div>)}

   </div>
   
   )
};
export default Shimmer;