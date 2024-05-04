import { Link } from "react-router-dom";
export const ServicesCard = ({ data }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={data.img} alt="Services" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>Price : ${data.price}</p>

          <div className="card-actions ">
            <Link to={`/checkout/${data._id}`} className="btn btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
