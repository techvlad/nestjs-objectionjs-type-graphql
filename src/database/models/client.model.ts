import { BaseModel } from './base.model';

export class ClientModel extends BaseModel {
  static tableName = 'clients';

  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
