async function buscarPokemon() {
  const nome = document.getElementById("input").value.toLowerCase()
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  const dados = await resposta.json()

  const card = document.getElementById("card")
  card.innerHTML = `
    <h2>${dados.name}</h2>
    <img src="${dados.sprites.front_default}" />
    <p>Tipo: ${dados.types[0].type.name}</p>
    <p>Altura: ${dados.height / 10}m | Peso: ${dados.weight / 10}kg</p>
  `
}