class Cart {
  constructor() {
    this.itens = [];
  }

  adicionar(item) {
    this.itens.push(item);
    console.log(`✅ ${item.nome} adicionado`);
  }

  remover(id) {
    const index = this.itens.findIndex(i => i.id === id);

    if (index !== -1) {
      console.log(`🗑️ ${this.itens[index].nome} removido`);
      this.itens.splice(index, 1);
    } else {
      console.log("❌ Item não encontrado");
    }
  }

  listar() {
    console.log("\n🛒 Carrinho:");

    if (this.itens.length === 0) {
      console.log("Carrinho vazio");
      return;
    }

    this.itens.forEach(item => {
      console.log(`${item.nome} - R$ ${item.preco}`);
    });
  }

  total() {
    const total = this.itens.reduce((soma, item) => soma + item.preco, 0);
    console.log(`💰 Total: R$ ${total}`);
  }
}

export default Cart;