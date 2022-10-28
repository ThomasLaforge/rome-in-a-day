const scoreDefs = [
    {
        scores: "16 +",
        hero: "Augustus"
    },
    {
        scores: "14 - 15",
        hero: "Julius Caesar"
    },
    {
        scores: "12 - 13",
        hero: "Marcus Aurelius"
    },
    {
        scores: "10 - 11",
        hero: "Tiberus"
    },
    {
        scores: "9 -",
        hero: "Nero"
    },
]

export default function ScoreBoard() {

    return <div className="score-board">
        <div className="score-board-content">
            <table className="score-board-table">
                {scoreDefs.map(def => (
                    <tr className="score-board-line">
                        <td className="score-board-line-scores">{def.scores}</td>
                        <td className="score-board-line-hero">{def.hero}</td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
}