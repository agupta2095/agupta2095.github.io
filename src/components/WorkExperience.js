// src/components/WorkExperience.js
import React from 'react';

function WorkExperience() {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <div>
        <h3>LinkedIn | Backend Engineer Intern</h3>
        <p>May 2023 – Aug 2023, Mountain View CA</p>
        <ul>
          <li>Integrated Protocol buffers as communication protocol to send and receive read requests to the distributed NoSQL
database. </li> 
<li>Designed and added Junit integration/performance tests for the entire pipeline.
</li>
          <li>Resulted in reduction of storage node latency by 12%,and increased the throughput by 8%.
</li>
<li>Swiftly engineered and deployed hot-fixes to resolve multiple critical customer and memory-management issues. </li>
        </ul>
        <h3> Real Intent | Senior Software Engineer</h3>
        <p>Apr 2021 - May 2022</p>
        <ul>
            <li>Accelerated the deployment and usage of B2B SaaS low-latency high perfomance C++ tool run in Linux batch mode.</li>
            <li>Designed, developed, and maintained the infrastructure platform of the tool.</li>
               <li> Used efficient graph algorithms, data
structures, SOLID and object oriented design principles, thorough unit and functional, testing.</li>
        </ul>
        <h3>Siemens EDA | Software Engineer</h3>
        <p>June 2018 - Sep 2019</p>
        <li>Overhauled core product architecture in C++, achieving a 90% resolution rate for outstanding JIRA tickets and
reducing new customer issues by 80%.</li>
<li>Identified and uncovered a critical customer issue risking chip failure. </li>
<li>Collaborated with cross-team members to devise an efficient algorithm, implemented the solution, and directly enabled customer adoption. Recognized with a Spot Bonus and Appreciation Award</li>
<li> Implemented release workflows and testing pipelines ,adhering to software development lifecycle best practices.</li>
      </div>
    </div>
  );
}

export default WorkExperience;
