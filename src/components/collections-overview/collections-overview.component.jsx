import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import CollectionsContext from '../../contexts/collections/collections.context'

import {getCollectionsForPreview} from '../../contexts/collections/collections.utils'

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collectionsData = useContext(CollectionsContext);
  const collections = getCollectionsForPreview(collectionsData);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
