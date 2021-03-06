import Head from "next/head";
import { CardContainer, CharacterInfo } from "./cardStyle";

const CharacterCard = ({ character }) => {
  const locations = [
    character?.bornLocation,
    character?.diedLocation,
    character?.homeworld,
  ];
  const updateLocations = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  return (
    <>
      <Head>
        <title>{character?.name}</title>
      </Head>
      <CardContainer>
        <img src={character?.image} alt="image" />
        <CharacterInfo>
          <h1>{character?.name}</h1>
          <h4>{character?.affiliations?.length > 0 && "AFFILIATIONS"}</h4>
          {character?.affiliations?.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))}
          <h4>{character?.apprentices?.length > 0 && "APPRENTICES"}</h4>
          {character?.apprentices?.map((apprentice, index) => (
            <p key={index}>{apprentice}</p>
          ))}
          <h4>
            {(character?.bornLocation && "LOCATIONS") ||
              (character?.diedLocation && "LOCATIONS") ||
              (character?.homeworld && "LOCATIONS")}
          </h4>
          {locations.filter(updateLocations).map((location, index) => (
            <p key={index}>{location !== "" && location}</p>
          ))}
          <h4>GENDER</h4>
          <span>{character?.gender}</span>
          <h4>DIMENSIONS</h4>
          <span>Height: {character?.dimensions}m</span>
          <h4>SPECIES</h4>
          <span>{character?.species}</span>
          <h4>WIKI</h4>
          <a href={character?.wiki} target="_blank" rel="noreferrer">
            Read more about {character?.name}
          </a>
        </CharacterInfo>
      </CardContainer>
    </>
  );
};

export default CharacterCard;
