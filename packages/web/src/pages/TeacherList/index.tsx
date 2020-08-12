import React from 'react'

import PageHeader from '../../components/PageHeader'


import './styles.css'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/select'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container" >
      <PageHeader title="Estes são os Proffys disponíveis" >
        <form action="" id="search-teachers">
        <Select 
          name="subject" 
          label="Matéria"
          options={[
            { value: "Artes", label: "Artes" },
            { value: "Biologia", label: "Biologia" },
            { value: "Geografia", label: "Geografia" },
            { value: "Matematica", label: "Matematica" },
            { value: "Ingles", label: "Ingles" },
            { value: "Historia", label: "Historia" },
            { value: "Fisica", label: "Fisica" },
            { value: "Portugues", label: "Portugues" },
            { value: "Quimica", label: "Quimica" },
          ]}
           />
       <Select 
          name="week_day" 
          label="Dia da Semana"
          options={[
            { value: "0", label: "Domingo" },
            { value: "1", label: "Segunda-Feira" },
            { value: "2", label: "Terça-Feira" },
            { value: "3", label: "Quarta-Feira" },
            { value: "4", label: "Quinta-Feira" },
            { value: "5", label: "Sexta-Feira" },
            { value: "6", label: "Sábado" },
          ]}
           />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList