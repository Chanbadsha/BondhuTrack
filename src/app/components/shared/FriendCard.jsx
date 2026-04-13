import Image from "next/image";

const FriendCard = ({ friend }) => {
  console.log(friend);
  const { name, picture, days_since_contact, status } = friend;
  return (
    <div>
      <div className="card bg-white shadow-sm">
        <figure className="px-10 pt-10">
          <Image
            src={picture}
            alt={`Picture of ${name}`}
            width={200}
            height={200}
          ></Image>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
