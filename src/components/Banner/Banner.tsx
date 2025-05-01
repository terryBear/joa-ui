import React, { FC, JSX } from "react";

export interface BannerProps {
  title?: string;
  description?: string;
  image?: string;
  button?: React.ReactNode | JSX.Element;
}

export const Banner: FC<BannerProps> = ({
  title = "Luxurious African Safari Tour",
  description = "A Luxury Africa Safari & Tour with Jewel of Africa Safaris is an invitation to discover the wild beauty of Africa in unparalleled style and comfort. Picture waking up to the gentle sounds of the bush, embarking on private game drives across iconic reserves like Kruger National Park or the Okavango Delta, and witnessing the Big Five up close—all while staying in exclusive lodges featuring elegant suites, private plunge pools, and gourmet dining paired with fine South African wines.",
  button = null,
  image = null,
}) => {
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <aside className="banner" style={image ? style : {}}>
      <div className="banner__content">
        <h1>{title}</h1>
        <p>{description}</p>
        {button && <div className="banner__button">{button}</div>}
      </div>
    </aside>
  );
};
