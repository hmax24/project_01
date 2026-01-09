// import style from "./ProfileCard.module.css";

// interface Props {
//   avatar: string;
//   name: string;
//   description: string;
// }

// function ProfileCard({avatar, name, description}: Props) {
//   return (
//     <div className={style.profileCard}>
//         <img src={avatar} alt="User avatar" />
//         <h2>{name}</h2>
//         <p>{description}</p>
//     </div>
//   );
// }

// export default ProfileCard;

import type { FC } from "react";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

const ProfileCard: FC<Props> = (props) => {
  const { avatar, name, description } = props;
  return (
    <div>
      <img src={avatar} alt={`name ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
