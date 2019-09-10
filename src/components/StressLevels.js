import React from 'react';
import Collapsible from 'react-collapsible';

const StressLevels=()=>{
    return(
    <div >
        {/* <h1 >Stress Scale</h1> */}
        <br/><br/>

    <div className="accordion">
    <h2>Stress Scale</h2>
    <p>Click on a level to see more</p>
    <Collapsible trigger="Level 1">
        <p triggerTagName="Level 1" className="panel"> 
        <ul>
            <li>Total peace</li>
        </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 2">
        <p triggerTagName="Level 2" className="panel"> 
        <ul>
            <li>Feeling slightly stressed</li>
        </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 3">
        <p triggerTagName="Level 3" className="panel"> 
        <ul>
            <li>Feeling slightly stressed</li>
            <li>Difficulty concentrating</li>
            <li>Racing thoughts</li>
        </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 4">
        <p triggerTagName="Level 4" className="panel"> 
        <ul>
            <li>Feeling moderately stressed</li>
            <li>Difficulty concentrating</li>
            <li>Feeling overwhelmed</li>
            <li>Racing thoughts</li>
         </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 5">
        <p triggerTagName="Level 5" className="panel"> 
        <ul>
                        <li>Feeling moderately stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling irritable</li>
                    </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 6">
        <p triggerTagName="Level 6" className="panel"> 
        <ul>
                        <li>Feeling severely stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                    </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 7">
        <p triggerTagName="Level 7" className="panel"> 
        <ul>
                        <li>Feeling severely stressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                        <li>One physical symptom</li>
                    </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 8">
        <p triggerTagName="Level 8" className="panel"> 
        <ul>
                        <li>Feeling distressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                        <li>Dissociation</li>
                        <li>Two physical symptoms</li>
                    </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 9">
        <p triggerTagName="Level 9" className="panel"> 
        <ul>
                        <li>Feeling distressed</li>
                        <li>Difficulty concentrating</li>
                        <li>Feeling overwhelmed</li>
                        <li>Feeling a lack of control</li>
                        <li>Dissociation</li>
                        <li>Tunnel vision</li>
                        <li>Multiple physical symptoms</li>
                    </ul>
        </p>
    </Collapsible>
    <Collapsible trigger="Level 10">
        <p triggerTagName="Level 10" className="panel"> 
        <ul>
                        <li>Panic attack</li>
                    </ul>
        </p>
    </Collapsible>
    </div>

        {/* <table border="1" className="rounded" style={{'borderRadius':'1%!important'}}>
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
    </table> */}
        <br/>
        <div>
            <div className="symptoms-table-outer">
                <h3>Physical Symptoms of Stress</h3>
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
                        <li>Sweating</li>
                    </ul>
            </div>
        </div>
    
    <br/>
    </div>
    )
}

export default StressLevels