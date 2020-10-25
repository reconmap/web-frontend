import RiskBadge from '../badges/RiskBadge'
import VulnerabilityBadge from '../badges/VulnerabilityBadge'
import CvssScore from '../badges/CvssScore'
import DeleteButton from "../ui/buttons/Delete";
import VulnerabilityStatusBadge from "../vulnerabilities/StatusBadge";
import Timestamps from '../ui/Timestamps';
import VulnerabilityCategoryBadge from '../badges/VulnerabilityCategoryBadge';

export default function VulnerabilitiesTable({vulnerabilities, destroy}) {
    return (
        <table className='w-full my-4 table-fixed'>
            <thead>
            <tr>
                <th style={{ width: '25%'}}>Summary</th>
                <th style={{ width: '13%'}}>Risk</th>
                <th style={{ width: '120px'}}><abbr title="Common Vulnerability Scoring System">CVSS</abbr> score</th>
                <th style={{ width: '20%'}}>Category</th>
                <th style={{ width: '13%'}}>Status</th>
                <th style={{ width: '10%'}}>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {vulnerabilities.map((vulnerability, index) => {
                return (
                    <tr key={index}>
                        <td>
                        <VulnerabilityBadge vulnerability={vulnerability}/> 
                            <p><small>{vulnerability.description} </small> <Timestamps insertTs={vulnerability.insert_ts}/></p>
                        </td>
                        <td><RiskBadge risk={vulnerability.risk}/></td>
                        <td><CvssScore score={vulnerability.cvss_score}/></td>
                        <td><VulnerabilityCategoryBadge category={vulnerability.category_name}/></td>
                        <td><VulnerabilityStatusBadge status={vulnerability.status}/></td>
                        <td>{destroy &&
                        <DeleteButton onClick={() => destroy(vulnerability.id)}/>
                        }</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
