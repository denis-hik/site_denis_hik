import {BodyVlog} from "./styled";
import BannerImage from "./components/BannerImage";
import img1 from "../../../media/vlog/scooter.jpg"
import img2 from "../../../media/vlog/horse.jpg"
import img3 from "../../../media/vlog/uniity.jpg"
import img4 from "../../../media/vlog/vr.jpg"
import Content from "./components/Content";
import {TitleUI} from "../../public/Title";

const listImages = [img1, img2, img3, img4]
const BlogView = () => {

    return (
        <BodyVlog>
            <BannerImage src={listImages} />
            <TitleUI title={"vlog"} />
            <Content />
        </BodyVlog>
    )
}

export default BlogView