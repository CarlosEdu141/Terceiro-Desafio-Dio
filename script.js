class Heroi {
  constructor(nomeHeroi, idadeHeroi, classe){
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.classe = classe;
    this.ataqueclasse = this.definirAtaque();
  }

  definirAtaque() {
    switch(this.classe) {
      case 'Mago':
        return 'magia';
      case 'Guerreiro':
        return 'espada';
      case 'Monje':
        return 'artes marciais';
      case 'Ninja':
        return 'shuriken';
      default:
        return 'ataque desconhecido';
    }
  }

  escrever(){
    console.log(`Herói de nome ${this.nomeHeroi} de ${this.idadeHeroi} anos, selecionou a classe ${this.classe}`);
  }

  atacar(){
    console.log(`O ${this.classe} atacou usando ${this.ataqueclasse}`);
  }
}

// Exemplo de uso                                               //classes
const protagonista = new Heroi("Lancelot", 20, "Ninja");          // Guerreiro
protagonista.escrever();                                        // Mago
protagonista.atacar();                                          // Monje
                                                                // Ninja