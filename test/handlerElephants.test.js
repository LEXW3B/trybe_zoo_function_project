const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quando não for passado nenhum parâmetro, será retornado undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Se o parâmetro não for uma string, retonar mensagem de erro', () => {
    expect(handlerElephants(true)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Retornar o valor do parâmetro, se for uma chave do objeto elephants', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });

  it('Retornar o número de residentes se o parâmetro for igual a count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Retornar a lista de nomes se o parâmentro for igual a chave `names`', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Retornar a idade média se o parâmetro for igual a averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Retornar null se for um parâmetro diferente', () => {
    expect(handlerElephants('invalid')).toEqual(null);
  });
});
