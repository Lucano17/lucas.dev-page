import { Education } from '@/interfaces/education.interface';
import React from 'react'
import { EducationCard } from './EducationCard';

interface Props {
  education?: Education[];
}

export const EducationGrid = ({education}: Props) => {
  return (
    <div>
        {education?.map((career)=>(
            <EducationCard key={career.id} education={career}/>
        ))}
    </div>
  )
}
