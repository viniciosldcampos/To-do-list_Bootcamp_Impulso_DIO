// Pega o formulário pelo ID 'task-form'
const form = document.getElementById('task-form');

// Pega a div onde as tarefas serão listadas pelo ID 'tasks'
const taskList = document.getElementById('tasks');

// Definimos o que acontece quando o formulário é enviado (evento 'submit')
form.onsubmit = function (e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página
    const inputField = document.getElementById('task-input'); // Pega o campo de entrada de texto pelo ID 'task-input'
    addTask(inputField.value); // Chama a função 'addTask' passando o valor digitado como parâmetro
    form.reset(); // Resetamos o formulário para limpar o campo de entrada após adicionar a tarefa
};

// Função que cria e adiciona uma nova tarefa na lista
function addTask(description) {
    const taskContainer = document.createElement('div'); // Criamos uma nova div que vai ser o contêiner de cada tarefa
    const newTask = document.createElement('input'); // Criamos um novo input do tipo checkbox
    const taskLabel = document.createElement('label'); // Criamos um label para descrever a tarefa
    const taskDescriptionNode = document.createTextNode(description); // Criamos um nó de texto com a descrição da tarefa (o que foi digitado)
    newTask.setAttribute('type', 'checkbox'); // Configuramos o input como um checkbox
    newTask.setAttribute('name', description); // Definimos o atributo 'name' do checkbox como a descrição da tarefa
    newTask.setAttribute('id', description); // Definimos o atributo 'id' do checkbox como a descrição da tarefa (para associar com o label)
    taskLabel.setAttribute('for', description); // Associamos o label ao input pelo atributo 'for' (o id correspondente)
    taskLabel.appendChild(taskDescriptionNode); // Colocamos o texto da tarefa dentro do label
    taskContainer.classList.add('task-item'); // Adicionamos uma classe CSS chamada 'task-item' para estilizar cada tarefa

    // Colocamos o checkbox e o label dentro do contêiner da tarefa
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);
    taskList.appendChild(taskContainer); // Finalmente, adicionamos a tarefa completa dentro da lista de tarefas
}