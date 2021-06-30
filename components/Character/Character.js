import Link from "next/link";
import Image from "next/image";
import { CharacterContainer, Decal } from "./characterStyle";

const Character = ({ character }) => {
  return (
    <CharacterContainer>
      <Link href={`/id/${character.id}.json`}>
        <a>
          <img src={character.image} alt={character.name} />
        </a>
      </Link>
      <Link href={`/id/${character.id}.json`}>
        <a>
          <h1>{character.name}</h1>
        </a>
      </Link>
      <Decal />
    </CharacterContainer>
  );
};

export default Character;
