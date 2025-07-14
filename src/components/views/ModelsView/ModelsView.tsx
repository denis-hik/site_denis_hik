import {useTranslate} from "../../../locales/useLocales";
import {BodyModels} from "./styled";
// import BannerModel from "./components/BannerModel";

const translatePath = "modelsPage."
const ModelsView = ():JSX.Element => {
    const translate = useTranslate(translatePath)

    return (
        <BodyModels>
            {/*<BannerModel />*/}
        </BodyModels>
    )
}

export default ModelsView;