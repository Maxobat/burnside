import { cms } from "../../../services/cms";
import { gql } from "graphql-request";
import { DocumentForm } from "tinacms/dist/admin/types";
import { CollectionTable } from "./CollectionTable";

export type CollectionListProps = {
  collection: string;
};

export type OwnDocumentNode = {
  id: string;
  _sys: { title: string };
} & DocumentForm;

export type CollectionListQuery = {
  collection: {
    documents: {
      edges: {
        node: OwnDocumentNode;
      }[];
    };
  };
};

const getCollectionDocuments = async (
  collection: string
): Promise<OwnDocumentNode[]> => {
  const collectionGraphIdentifier =
    collection.slice(0, 1).toUpperCase() + collection.slice(1);

  const res = await cms.request<CollectionListQuery>(
    gql`
    query ${collectionGraphIdentifier}ListQuery($collection: String!) {
      collection(collection: $collection) {
        name
        fields
        documents {
          edges {
            node {
              ... on ${collectionGraphIdentifier} {
                id
                _values
                _sys {
                  title
                }
              }
            }
          }
        }
      }
    }
  `,
    { collection }
  );

  return res.collection.documents.edges.map((edge) => {
    return edge.node;
  });
};

export const CollectionList = async ({ collection }: CollectionListProps) => {
  const documents = await getCollectionDocuments(collection);

  return <CollectionTable data={documents} />;
};
