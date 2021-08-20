import React from 'react'
import Tittle from '../Components/Title'
import SkillsSection from '../Components/SkillsSection';


const SkillsPage = () => {
    return (
        <div className="AboutPage">
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'C/C++'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'CSS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Django REST Framework'} progress={'70%'} width={'70%'} />
            </div>

        </div>
    )
}

export default SkillsPage;
