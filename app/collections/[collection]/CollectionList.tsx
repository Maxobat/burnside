import { DocumentNode } from "tinacms/dist/admin/types";
import { cms } from "../../../services/cms";
import { gql } from "graphql-request";

export type CollectionListProps = {
  collection: string;
};

// const getCollectionDocuments = (collection: string): DocumentNode[]  => {
//   const { documents } = await cms.request(gql`
//     ...
//   `)
// }

// const CollectionList: React.FC<CollectionListProps> = ({ collection }) => {
//   const documents = getCollectionDocuments(collection)

//   return (

//   )
// }
