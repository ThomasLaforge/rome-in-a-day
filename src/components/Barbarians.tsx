import { useMemo } from "react"
import { arrToMap } from "../tools/arrays"

type BarbarianProps = {
    step: 1 | 2 | 3
    complete: boolean
}

const MILITARY_TO_LOSE_BY_STEP = [2, 3, 5]

export const Barbarian = (props: BarbarianProps) => {
    const {step} = props
    
    const nbRegionToLose = useMemo(() => step < 3 ? 1 : 2, [step])
    const nbMilitaryToLose = useMemo(() => MILITARY_TO_LOSE_BY_STEP[step - 1], [step])

    return <div className="barabarian">
        <div className="barbarian-step">
            {arrToMap(step).map(() => (
                <div className="barbarian-step-indicator">barbarian image</div>
            ))}
        </div>
        <div className="barbarian-region-to-lose">
            {arrToMap(nbRegionToLose).map( () => (
                <div className="barbarian-region-to-lose-indicator">region to lose image</div>
            ))}
        </div>

        <div className="barabarian-condition-separator">OR</div>

        <div className="barbarian-military-to-lose">
            {arrToMap(nbMilitaryToLose).map( () => (
                <div className="barbarian-military-to-lose-indicator">region to lose image</div>
            ))}
        </div>
    </div>
}

export const FirstBarbarian = () => <Barbarian step={1} complete={false} />
export const SecondBarbarian = () => <Barbarian step={2} complete={false} />
export const ThirdBarbarian = () => <Barbarian step={3} complete={false} />