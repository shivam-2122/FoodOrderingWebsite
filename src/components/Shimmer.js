const Shimmer = () =>{
    return(   
    <div className="RestrauntList">
  {Array(10).fill("").map((e, index)=> <div key= {index} className="ShimmerCard"></div>)} 
    </div>
    )
}
export default Shimmer;