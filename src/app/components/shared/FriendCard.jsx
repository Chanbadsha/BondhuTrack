import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;
  return (
    <Link
      className={` border-t-2 rounded-lg ${status == "overdue" ? "border-t-red-500" : status == "almost due" ? "border-t-[#EFAD44]" : "border-t-green-700"}`}
      href={`/friend-details/${id}`}
    >
      <div className="card bg-white py-6 shadow-sm">
        <figure className=" ">
          <Image
            src={picture}
            alt={`Picture of ${name}`}
            width={120}
            height={120}
            // className="rounded-full"
            className={` p-1 border-y-3 rounded-full ${status == "overdue" ? "border-y-red-500" : status == "almost due" ? "border-y-[#EFAD44]" : "border-y-green-700"}`}
          ></Image>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{days_since_contact}d Ago</p>
          {tags.slice(0, 1).map((tag, ind) => (
            <p
              className="bg-green-200 capitalize font-semibold py-2 rounded-2xl px-4"
              key={ind}
            >
              {tag}
            </p>
          ))}
          <p
            className={` capitalize text-white px-4 py-2 font-semibold rounded-2xl ${status == "overdue" ? "bg-red-400" : status == "almost due" ? "bg-[#EFAD44]" : "bg-green-900"}`}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
