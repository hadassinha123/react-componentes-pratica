import "./App.css"
import Titulo from "./components/Titulo"
import Aluno from "./components/Aluno"
import Nota from "./components/Nota"
import Produto from "./components/Produto"

function App() {
  return (
    <main className="pagina">
      <section className="cabecalho">
        <Titulo />
        <p className="subtitulo">
          Praticando componentes, props e reutilização no React.
        </p>
      </section>

      <section className="secao">
        <h2 className="titulo-secao">Alunos</h2>

        <div className="alunos">
          <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
        </div>
      </section>

      <section className="secao">
        <h2 className="titulo-secao">Notas</h2>

        <div className="notas">
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={9} />
          <Nota disciplina="HTML e CSS" nota={10} />
        </div>
      </section>

      <section className="secao">
        <h2 className="titulo-secao">Produtos</h2>

        <div className="produtos">
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Headset"
            descricao="Headset para jogos"
            preco={180}
            disponivel={false}
          />

          <Produto
            nome="Webcam"
            descricao="Webcam Full HD"
            preco={200}
            disponivel={true}
          />
        </div>
      </section>
    </main>
  )
}

export default App