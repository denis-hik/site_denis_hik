import {defaultOptions} from 'threedviewer';
import {BannerModelBody} from "./styled";

import obj from "../../../../../media/objects/Horse.glb"
import hb from "../../../../../media/horsebook.png"

const BannerModel = () => {

    return (
        <BannerModelBody
            options={{
                ...defaultOptions,
                environment: {
                  ...defaultOptions.environment,
                  url: hb,

                  // environmentIntensity: 1,
                  // backgroundIntensity: 1,
                  // backgroundBlurriness: 1,
                },
                lighting: {
                  ...defaultOptions.lighting,
                  hemisphereLight: {
                      ...defaultOptions.lighting?.hemisphereLight,
                      skyColor: "#fff",
                      groundColor: "transparent",
                      intensity: 0.5,
                  },
                },
                controls: {
                    enabled: false,
                },
                backgroundColor: "transparent",
                replaceWithScreenshotOnComplete: true,
                camera: {
                    position:[0,0,0],
                    ...defaultOptions.camera
                }
            }}
            object={obj}
        />
    )
}

export default BannerModel;