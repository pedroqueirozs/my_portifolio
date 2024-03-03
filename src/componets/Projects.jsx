import Project from "./Project";
import NavBar from "./NavBar";
import ImgAppPedidos from "../assets/img_app_pedidos.svg";
import ImgHabts from "../assets/img_project_habts.svg";
import ImgGitFavorites from "../assets/img_git_favorites.svg";

function Projects() {
  return (
    <>
      <NavBar />
      <p>Ultimos Projetos</p>

      <Project
        img={ImgAppPedidos}
        title="App de Pedidos"
        description="Aplicação Mobile criada com React Native na maratona NLW 14 da Rocketseat. A essência do projeto é uma aplicação simples e funcional para o mercado de delivery. O app dispõe de um cardápio no qual o cliente poderá escolher o seu lanche e bebidas, além de outros alimentos que podem ser cadastrados. Por fim, o cliente poderá finalizar o seu pedido, inserindo o seu endereço. Quando for pressionado o botão de enviar o pedido, o cliente será direcionado para o WhatsApp do estabelecimento."
      />
      <Project
        img={ImgHabts}
        title="Habts"
        description="O aplicativo 'Habits' foi desenvolvido com o propósito de auxiliar os usuários a organizarem suas atividades diárias de forma eficiente. Nele, os usuários têm a capacidade de inserir todas as tarefas que desejam concluir ao longo do dia, e à medida que vão realizando cada uma delas, podem marcá-las como concluídas. A principal linguagem utilizada no desenvolvimento desse aplicativo é o JavaScript."
      />
      <Project
        img={ImgGitFavorites}
        title="Git Favorites"
        description="O 'Git Favorites' é um projeto dedicado à construção de uma tabela de usuários do GitHub que os usuários desejam marcar como favoritos. A busca por esses usuários é realizada por meio da API nativa do GitHub.




"
      />
    </>
  );
}
export default Projects;
