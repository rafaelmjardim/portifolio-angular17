import { IconType } from "@ng-icons/core"

export type Header = {
    txt: string
    href: string
    icon?: string
    pdf?: string
    isButton?: boolean
}

export const MENU_LIST: Header[] = [
    {
        txt: 'Início',
        href: '#',
        icon: 'ionHomeOutline'
    },
    {
        txt: 'Sobre',
        href: '#about',
        icon: 'ionPersonOutline'
    },
    {
        txt: 'Habilidades',
        href: '#skills',
        icon: 'ionExtensionPuzzleOutline'
    },
    {
        txt: 'Projetos',
        href: '#projects',
        icon: 'ionCodeWorkingOutline'
    },
    {
        txt: 'Contato',
        href: '#footer',
        icon: 'ionPhonePortraitOutline'
        
    },
    {
        txt: 'Currículo',
        href: 'assets/curriculo_rafael_jardim.pdf',
        icon: 'ionArrowDownOutline',
        isButton: true
    }
]