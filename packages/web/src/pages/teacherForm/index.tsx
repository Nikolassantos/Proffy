import React,{ useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/select';

import WarningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
const [scheduleItems, setScheduleItems] = useState([
  {  week_day: 0,
    from: "",
    to: ""
  },

]);

function AddNewScheduleItem() {
  setScheduleItems([
    ...scheduleItems,
    {
        week_day: 0,
        from: "",
        to: ""
    }
  ])}


  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que  você quer dar aulas"
        description="Primeiro passo é preencher esse cadastro de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whastapp" label="WhatsApp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Ingles', label: 'Ingles' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Quimica', label: 'Quimica' },
            ]}
          />
          <Input name="cost" label="Custo da Aula/Hora" />
        </fieldset>
        <fieldset>
          <fieldset>
            <legend>
              Horários Disponiveis
              <button type="button" onClick={AddNewScheduleItem} >
                + Novo Horario
              </button>
            </legend>

       {scheduleItems.map(scheduleItem => {
         return (
              <div key={scheduleItem.week_day} className="schedule-item" >
                  <Select
                  name="week_day"
                  label="Dia da Semana"
                  options={[
                    { value: 'Artes', label: 'Artes' },
                    { value: 'Biologia', label: 'Biologia' },
                    { value: 'Geografia', label: 'Geografia' },
                    { value: 'Matematica', label: 'Matematica' },
                    { value: 'Ingles', label: 'Ingles' },
                    { value: 'Historia', label: 'Historia' },
                    { value: 'Fisica', label: 'Fisica' },
                    { value: 'Portugues', label: 'Portugues' },
                    { value: 'Quimica', label: 'Quimica' },
                  ]}
                  />
                  <Input name="from" label="Das"type="time" />
                  <Input name="to" label="Até"type="time" />
              </div>
                )
                })}
          </fieldset>
        </fieldset>
        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso Importante" />
            Importante!
            <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>

      </main>
    </div>
  )
}

export default TeacherForm;
