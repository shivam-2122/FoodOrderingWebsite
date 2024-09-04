
      export const RestrauntCard3 =({name,rating,cloudinaryImageId,})=>{
        return (
        <div className="card">
        <img src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
        <h2>{name}</h2>
        <h4>{rating} stars</h4>
        </div>
        );
        };
    