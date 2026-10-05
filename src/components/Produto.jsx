function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>Preço: R$ {preco}</p>

      <p>{disponivel ? "Disponível" : "Indisponível"}</p>

      <button>Comprar</button>
    </div>
  )
}

export default Produto