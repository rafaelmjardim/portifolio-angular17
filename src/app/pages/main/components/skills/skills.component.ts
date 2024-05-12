import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoAngular, ionLogoCss3, ionLogoFigma, ionLogoGithub, ionLogoHtml5, ionLogoJavascript, ionLogoNpm, ionLogoReact, ionLogoSass } from '@ng-icons/ionicons';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgIcon,
    LottieComponent
  ],
  providers: [provideIcons({
    ionLogoHtml5, 
    ionLogoCss3, 
    ionLogoJavascript, 
    ionLogoGithub, 
    ionLogoSass, 
    ionLogoReact, 
    ionLogoAngular,
    ionLogoFigma,    
  })],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  cardSkillsList: {name: string, icon: string, txt: string}[] = [
    {
      name: 'HTML5', 
      icon: 'ionLogoHtml5',
      txt: ' HTML5 é a última versão da linguagem usada para criar páginas da web. Ela traz novos recursos, como elementos que ajudam na estruturação do conteúdo, suporte para áudio e vídeo sem precisar de plugins extras, e ferramentas para interação avançada, como mapas e gráficos. Isso torna as páginas mais bonitas e interativas.'
    },
    {
      name: 'CSS', 
      icon: 'ionLogoCss3',
      txt: 'CSS, ou Cascading Style Sheets, é uma linguagem de estilo usada para controlar a apresentação de documentos HTML. Com o CSS, você pode definir o layout, cores, fontes e outros aspectos visuais de um site ou página da web. Ele funciona aplicando regras de estilo a elementos HTML, permitindo que você crie páginas da web atraentes e bem organizadas.'
    },
    {
      name: 'JavaScript', 
      icon: 'ionLogoJavascript',
      txt: 'JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas da web. Ele permite que você adicione comportamentos dinâmicos aos elementos HTML, como validação de formulários, animações, manipulação de eventos e atualizações de conteúdo sem recarregar a página. JavaScript é executado no navegador do usuário e é uma parte fundamental do desenvolvimento web moderno.'
    },
    {
      name: 'Angular', 
      icon: 'ionLogoAngular',
      txt: 'Angular é um framework de desenvolvimento web mantido pelo Google. Ele é usado para criar aplicativos da web dinâmicos e interativos. Angular utiliza HTML, CSS e TypeScript para construir interfaces de usuário e aplicar lógica de negócios. Ele oferece recursos poderosos, como vinculação de dados bidirecional, injeção de dependência e roteamento, facilitando o desenvolvimento de aplicativos robustos e escaláveis.'
    },
    {
      name: 'React', 
      icon: 'ionLogoReact',
      txt: 'erfaces de usuário (UI) dinâmicas e interativas para aplicativos da web e móveis. Utiliza um paradigma de programação chamado "componentização", onde as interfaces são divididas em componentes reutilizáveis, facilitando a manutenção e a escalabilidade do código.'
    },
    {
      name: 'Sass', 
      icon: 'ionLogoSass',
      txt: 'Sass (Syntactically Awesome Stylesheets) é uma linguagem de folhas de estilo que estende o CSS com características como variáveis, aninhamento de seletores, mixins e funções. Esses recursos tornam a escrita de estilos mais eficiente e organizada, facilitando a manutenção de grandes projetos.'
    },
    {
      name: 'Gitub', 
      icon: 'ionLogoGithub',
      txt: 'GitHub é uma plataforma de hospedagem de código-fonte e colaboração baseada em nuvem. É amplamente utilizada por desenvolvedores para gerenciar e compartilhar projetos de software usando o controle de versão Git. Além disso, fornece recursos como controle de acesso, problemas de rastreamento, solicitações de pull e integração contínua.'
    },
    {
      name: 'Figma', 
      icon: 'ionLogoFigma',
      txt: 'Figma é uma ferramenta de design de interface de usuário baseada em nuvem que permite a colaboração em tempo real entre designers e desenvolvedores. Com o Figma, é possível criar wireframes, protótipos interativos e designs de alta fidelidade para aplicativos da web e móveis. Ele é conhecido por sua facilidade de uso, recursos de colaboração e capacidade de criar designs responsivos.'
    },
   
  ]

  currentInfo!: string | null;

  options: AnimationOptions = {
    path: '/assets/lottie/move_animation.json'
  }

  changeSkillsInfo = (txt: string) => {
    if (txt) {
      this.currentInfo = txt;
    }
  }

  cleanSkillInfo = () => {
    this.currentInfo = null;
  }
}
