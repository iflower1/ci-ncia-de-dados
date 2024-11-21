<html lang "pt-br">
<body>
<! -- código omitido --> 
    <footer>
        <p>Desenvolvido por Gui Lima</p>
    </footer>
    <script type="module" src="graficos/informacoesGlobais.js"></script>
    <script type="module" src="graficos/quantidadeUsuarios.js"></script>
</body>
</html>
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

  }async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)

const data = [
  {
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: 'bar'
  }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)

}

quantidadeUsuarios()

  
  quantidadeUsuarios()
  
  