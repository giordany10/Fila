class Fila {
#inicio;
#fim;
#qtd;
#elementos;

constructor(tamanho=10) {
    this.#fim = -1;
    this.#inicio = 0;
    this.#qtd = 0;
    this.#elementos = new Array(tamanho);
    
}
//enqueue
    // Adiciona elemento no final da fila
    enqueue(elemento) {
        if (this.isFull()) {
            throw new Error('Fila cheia');
        }
        this.#fim = (this.#fim + 1) % this.#elementos.length;
        this.#elementos[this.#fim] = elemento;
        this.#qtd++;
    }
//isFull
    // Ve se a fila está cheia
    isFull() {
        return this.#qtd === this.#elementos.length;
    }
//dequeue
    // Remove e retorna o elemento do início da fila
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Fila vazia');
        }
        const elemento = this.#elementos[this.#inicio];
        this.#elementos[this.#inicio] = undefined;
        this.#inicio = (this.#inicio + 1) % this.#elementos.length;
        this.#qtd--;
        return elemento;
    }
//isEmpty
    // olha se a fila está vazia
    isEmpty() {
        return this.#qtd === 0;
    }

    }