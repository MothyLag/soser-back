import { Service } from 'typedi';
import { DataModel } from './models/data.schema';
import { INewDataDTO } from './models/data.types';

@Service()
export class DataService {
  public createDataForm(student: string, newData: INewDataDTO) {
    console.log('this is function');
    return new DataModel({ ...newData, student }).save();
  }
}
