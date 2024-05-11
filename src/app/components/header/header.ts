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
    },
    {
        txt: 'Sobre',
        href: '#about',
    },
    {
        txt: 'Habilidades',
        href: '#skills',
    },
    {
        txt: 'Projetos',
        href: '#projects',
    },
    {
        txt: 'Contato',
        href: '#footer',
    },
    {
        txt: 'Currículo',
        href: 'assets/curriculo_rafael_jardim.pdf',
        icon: 'ionArrowDownOutline',
        isButton: true
    }
]