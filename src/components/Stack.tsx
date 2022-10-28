type StackProps = {
    type: string,
    logo: string,
    position: number
}

type PawnProps = {
    position: number
}

const Pawn = (props: PawnProps) => {
    return <div className="pawn"></div>
}

const Stack = (props: StackProps) => {
    const { type, position } = props
    return <div className={`stack stack-${type}`}>
        <div className="stack-elt stack-elt:bold">9</div>
        <div className="stack-elt"></div>
        <div className="stack-elt"></div>
        <div className="stack-elt stack-elt:light">6</div>
        <div className="stack-elt"></div>
        <div className="stack-elt"></div>
        <div className="stack-elt stack-elt:light">3</div>
        <div className="stack-elt"></div>
        <div className="stack-elt"></div>
        <div className="stack-elt stack-elt:bold">0</div>
        <div className="stack-logo">logo-{type}</div>
        <Pawn position={position}/>
    </div>
}

export const IndustryStack = () => <Stack 
    type="industry"
    logo="src"
    position={0}
/>
export const CultureStack = () => <Stack type="culture" logo="src" position={1} />
export const MilitaryStack = () => <Stack type="military" logo="src" position={0} />