import { notFound } from "next/navigation";
import { cms } from "../../../services/cms";
import { gql } from "graphql-request";
import { Collection } from "tinacms";
import { Suspense } from "react";
import { CollectionList } from "./CollectionList";

const getCollection = async (
  collectionName: string
): Promise<Collection | null> => {
  const res = await cms.request<{ collection: Collection }>(
    gql`
      query CollectionListQuery($collection: String!) {
        collection(collection: $collection) {
          name
          label
        }
      }
    `,
    { collection: collectionName }
  );

  return res.collection;
};

const CollectionListPage = async ({
  params,
}: {
  params: Record<string, string>;
}) => {
  if (!params.collection) {
    return notFound();
  }

  const collection = await getCollection(params.collection);

  if (!collection) {
    return notFound();
  }

  return (
    <div className="text-white">
      <h1>{collection.label}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error SUSPENSE BANDAID */}
        <CollectionList collection={collection.name} />
      </Suspense>
    </div>
  );
};

export default CollectionListPage;
