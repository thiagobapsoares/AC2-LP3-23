interface Tempo_Entrega {
  Comum: number;
  Expresso: number;
  Agendado: number;
}

interface Preco_Entrega {
  Comum: { tributo: number; multiplicador: number };
  Expresso: { tributo: number; multiplicador: number };
  Agendado: { tributo: number; multiplicador: number };
}

interface Desconto_Entregra{
  kg10: number,
  kg50: number,
  kg100: number
}

/* Commisao Em Reais, Multiplicar Distância */
export let TabelaPreco: Preco_Entrega = {
  Comum: { tributo: 0, multiplicador: 1 },
  Expresso: { tributo: 3, multiplicador: 1.2 },
  Agendado: { tributo: 2, multiplicador: 1.1 },
};

export let TabelaDesconto: Desconto_Entregra = {
  kg10: 20,
  kg50: 40,
  kg100: 60,

}
