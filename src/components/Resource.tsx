import { ResourceType } from "../modules/typings"

type ResourceProps = {
    type: ResourceType
}

export default function Resource(props: ResourceProps) {
    const {type} = props
    return <div className="resource">
        {type === ResourceType.Culture && <CultureResource />}
        {type === ResourceType.Military && <MilitaryResource />}
        {type === ResourceType.Industry && <IndustryResource />}
    </div>
}

const CultureResource = () => {
    return <div className="culture-resource"></div>
}
const MilitaryResource = () => {
    return <div className="military-resource"></div>
}
const IndustryResource = () => {
    return <div className="industry-resource"></div>
}