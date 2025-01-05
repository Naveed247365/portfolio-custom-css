'use client'

import { useEffect, useState } from 'react'

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS', level: 85 },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
      ]
    }
  ]

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <div className="container">
      <section className="skills" aria-labelledby="skills-title">
        <h1 id="skills-title" className="section-title">My Skills</h1>
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category animate-fade-in-delay">
              <h2 className="category-title">{category.name}</h2>
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="skill">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={`skill-level ${animated ? 'animate' : ''}`} 
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 0.1}s`
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}