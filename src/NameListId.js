import React from 'react'

function NameListId() {
    const persons=[{
                    id:1,
                    name:'Bruce',
                    age:30,
                    skill:'React'
                    },
                      {
                        id:2,
                        name:'Surya',
                        age:20,
                        skill:'Angular'
                        },
                        {
                            id:3,
                            name:'Ashu',
                            age:32,
                            skill:'Vue.js'
                            }]
      const personList=persons.map(person=><h2 key={person.id}>{person.name}{person.age}</h2>)                      
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameListId