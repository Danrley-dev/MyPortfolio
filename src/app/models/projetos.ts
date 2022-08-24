export interface Projetos {
    video: string;
    nome: string;
    descricao: string; 
}

export interface DialogProjetos {
    imagem: string;
    texto: string;
    detalhes: Detalhes;
}

export interface Detalhes{
    video: string;
    nome: string;
    descricao: string; 
    repBack?: string;
    repFront?: string;
}

