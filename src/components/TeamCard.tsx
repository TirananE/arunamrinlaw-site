import React from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  position: string;
  imageUrl: string;
  imageAlt?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  imageUrl,
  imageAlt = "team member",
}) => {
  return (
    <div className="team-box">
      <figure className="team-image">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={300}
          height={300}
          className="img-fluid"
        />
      </figure>
      <div className="content">
        <h4>{name}</h4>
        <span className="text-size-14">{position}</span>
      </div>
    </div>
  );
};

export default TeamCard;
