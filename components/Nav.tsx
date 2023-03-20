import { gql } from "graphql-request";
import { Collection } from "tinacms";
import { cms } from "../services/cms";
import Link from "next/link";

const getCollections = async (): Promise<Collection[]> => {
  const { collections } = await cms.request<{ collections: Collection[] }>(gql`
    query Collections {
      collections {
        label
        name
      }
    }
  `);

  return collections.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA > nameB) {
      return 1;
    } else if (nameA < nameB) {
      return -1;
    }

    return 0;
  });
};

const getScreens = (): { name: string; label: string }[] => {
  return [{ name: "canvas-kit", label: "CanvasKit" }];
};

export const Nav = async () => {
  const collections = await getCollections();
  const screens = getScreens();

  return (
    <>
      <div className="tracking-wide text-xs font-bold">COLLECTIONS</div>

      <ul className="ml-2">
        {collections.map((collection) => {
          return (
            <li key={collection.name}>
              <Link
                href={"/collections/" + collection.name}
                className="hover:underline focus:outline-dashed active:outline-double"
              >
                {collection.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="tracking-wide text-xs font-bold mt-4">AREAS</div>
      <ul className="ml-2">
        {screens.map((screen) => {
          return (
            <li key={screen.name}>
              <Link
                href={"/screens/" + screen.name}
                className="hover:underline focus:outline-dashed active:outline-double"
              >
                {screen.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
