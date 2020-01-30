import { Model, ModelOptions, QueryContext, snakeCaseMappers } from 'objection';

export class BaseModel extends Model {
  createdAt?: Date;
  updatedAt?: Date;

  async $beforeInsert(queryContext: QueryContext) {
    await super.$beforeInsert(queryContext);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  async $beforeUpdate(opt: ModelOptions, queryContext: QueryContext) {
    await super.$beforeUpdate(opt, queryContext);
    this.updatedAt = new Date();
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}
