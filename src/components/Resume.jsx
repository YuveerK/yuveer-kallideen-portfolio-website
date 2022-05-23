import React from "react";
import styled from "styled-components";
import EducationCard from "./page components/EducationCard";
import Title from "./page components/Title";
function Resume() {
  return (
    <ResumeContainer>
      <Title title="Resume" id="resume" />

      <div className="subtitle-container">
        <i class="fas fa-graduation-cap"></i>
        <h2>Education</h2>
      </div>

      <EducationCard
        date="2017 - 2020"
        title="Monash University"
        location="Ruimsig, Roodepoort - Gauteng"
        description="Bachelor of Computer And Information
                Sciences (BCI: Networks And Security +
                Software Development)"
        marks="2.372 GPA (69.953%)"
      />

      <EducationCard
        date="2004 - 2016"
        title="Fields College Primary + High School"
        location="Rustenburg - North West"
        description="Completed both primary and high school at Fields College, achieving a Bachelors Pass in Matric."
      />

      <div className="subtitle-container">
        <i class="fas fa-briefcase"></i>
        <h2>Work Experience</h2>
      </div>
      <EducationCard
        date="2022 - Present"
        title="Junior Business Analyst - Signature Business Solutions"
        location="Woodmead, Midrand - Gauteng"
        description="
                Reviewing annual budget for the complex. Ensuring there is enough capital within the budget to
                complete maintenance requests for units in the complex. Review all decisions related to the budget or maintenance
                before it can be approved along with the other trustee
                members. Resolve any disputes amongst tenants. Make decisions regarding the infrastructure of the complex. Reviewing all work regarding maintenance or the
                upgrade/installation of infrastructure at the complex
                
                "
      />
      <EducationCard
        date="2017 - Present"
        title="Princeton Body Corporate - Trustee Member"
        location="Ruimsig, Roodepoort - Gauteng"
        description="
                Reviewing annual budget for the complex. Ensuring there is enough capital within the budget to
                complete maintenance requests for units in the complex. Review all decisions related to the budget or maintenance
                before it can be approved along with the other trustee
                members. Resolve any disputes amongst tenants. Make decisions regarding the infrastructure of the complex. Reviewing all work regarding maintenance or the
                upgrade/installation of infrastructure at the complex
                
                "
      />
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: fit-content;
  margin-bottom: 60px;

  .subtitle-container {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    i {
      font-size: 3rem;
      margin-right: 20px;
    }

    h2 {
      font-size: 2rem;
      font-weight: 300;
      color: black;
    }
  }
`;
export default Resume;
