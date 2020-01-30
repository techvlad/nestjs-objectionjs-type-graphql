import { BaseModel } from './base.model';

export class SurgeonModel extends BaseModel {
  static tableName = 'surgeons';

  id: number;
  fullName: string;
  yearsOfExperience: number;
}
