import React from 'react';

const StressLevels=()=>{
    return(
    <div >
        {/* <h1 >Stress Scale</h1> */}
        <br/><br/>
        <table border="1" className="rounded" style={{'borderRadius':'1%!important'}}>
            <thead>
            <tr>
                <th className="centered-table-element">Stress Level</th>
                <th className="centered-table-element">How This Level Feels</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="centered-table-element">1</td>
                <td>
                    <ul>
                        <li>Total peace</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">2</td>
                <td>
                    <ul>
                        <li>Feeling slightly stressed</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">3</td>
                <td>
                    <ul>
                        <li>Feeling slightly stressed</li>
                        <li>Difficulty concentrating</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">4</td>
                <td>
                    <ul>
                        <li>Feeling moderately stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">5</td>
                <td>
                    <ul>
                        <li>Feeling moderately stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling irritable</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">6</td>
                <td>
                    <ul>
                        <li>Feeling severely stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">7</td>
                <td>
                    <ul>
                        <li>Feeling severely stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                        <li>One physical symptom</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">8</td>
                <td>
                    <ul>
                        <li>Feeling distressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                        <li>Dissociation</li>
                        <li>Two physical symptoms</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">9</td>
                <td>
                    <ul>
                        <li>Feeling distressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                        <li>Dissociation</li>
                        <li>Tunnel vision</li>
                        <li>Multiple physical symptoms</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="centered-table-element">10</td>
                <td>
                    <ul>
                        <li>Panic attack</li>
                    </ul>
                </td>
            </tr>
            
            </tbody>
    </table>
        <br/>
    <table border="1">
            <thead>
            <tr>
                <th className="centered-table-element">Physical Symptoms of Stress</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td >
                    <ul className="symptoms-table">
                        <li>Fast heartbeat</li>
                        <li>Shaking</li>
                        <li>Chest pain</li>
                        <li>Headache</li>
                        <li>Rash or hives</li>
                        <li>Nausea</li>
                        <li>Lightheadedness</li>
                        <li>Neck or back pain</li>
                        <li>Abnormal breathing</li>
                    </ul>
                </td>
            </tr>
            
            </tbody>
    </table>
    <br/>
    </div>
    )
}

export default StressLevels