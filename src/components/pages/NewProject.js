import { useHistory } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
  const history = useHistory()

  function cretePost(project) {
    // inicializando o custo com 0 e serviços com array vazio
    project.const = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then(data => {
        //console.log(data)
        history.push('/projects', { message: 'Projeto criado com sucesso' })
      })
      .catch(err => console.error(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adiconar os serviços</p>
      <ProjectForm btnText="Criar Projeto" handleSubmit={cretePost} />
    </div>
  )
}

export default NewProject
