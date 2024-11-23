import React from 'react';
import {ShimmerSimpleGallery} from "react-shimmer-effects";

function BodyShimmer() {
    return (
        <>
            <ShimmerSimpleGallery
                card
                imageHeight={200}
                caption
            />
        </>
    );
}

export default BodyShimmer;