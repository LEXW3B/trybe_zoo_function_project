const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retornar o objeto hours se não for passado nenhum parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Disparar um erro se `day` não for um dia da semana', () => {
    expect(() => getOpeningHours('zoo')).toThrow('The day must be valid. Example: Monday');
  });

  it('Disparar um erro se o horário não for AM/PM', () => {
    expect(() => getOpeningHours('tuesday', '10:59-CM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Disparar um erro se `hours` não for numérico', () => {
    expect(() => getOpeningHours('tuesday', 'A:59-AM')).toThrow('The hour should represent a number');
  });

  it('Disparar um erro se `minutes` não for numérico', () => {
    expect(() => getOpeningHours('tuesday', '10:b-AM')).toThrow('The minutes should represent a number');
  });

  it('Disparar um erro se `hours` não for entre 0 é 12', () => {
    expect(() => getOpeningHours('tuesday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Disparar um erro se `minutes` não for entre 0 e 59', () => {
    expect(() => getOpeningHours('tuesday', '12:69-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Retornar a mensagem `the zoo is closed` caso day seja monday', () => {
    expect(getOpeningHours('monday', '11:00-AM')).toEqual('The zoo is closed');
  });

  it('Retornar a mensagem `The zoo is open` se estiver na hora de início de expediente ', () => {
    expect(getOpeningHours('tuesday', '10:00-AM')).toEqual('The zoo is open');
  });

  it('Deve retornar a mensagem `The zoo is closed` se estiver na hora de final de expediente', () => {
    expect(getOpeningHours('tuesday', '9:00-PM')).toEqual('The zoo is closed');
  });
});
