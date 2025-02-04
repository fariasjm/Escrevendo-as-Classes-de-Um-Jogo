// Curso: Potência Tech iFood - Programação do Zero
// DIO Desafio - Escrevendo as Classes de Um Jogo

class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    } 
    
    // Método atacar()
    atacar() {
        if (this.tipo === "mago") {
            this.ataque = "magia";

        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";

        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";

        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
            
        } else {
            this.tipo = `- ${this.tipo} - é um tipo inválido`;
            
        }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Objeto

    let mago = new heroi('Merlin', 85, 'mago');
    mago.atacar();

    let guerreiro = new heroi('Gengis', 43, 'guerreiro');
    guerreiro.atacar();

    let monge = new heroi('Obi Wan', 60, 'monge');
    monge.atacar();

    let ninja = new heroi('Fushiro', 22, 'ninja');
    ninja.atacar();

  