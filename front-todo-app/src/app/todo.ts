export class Todo {
  id: number;
  atividade = '';
  finalizado = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
