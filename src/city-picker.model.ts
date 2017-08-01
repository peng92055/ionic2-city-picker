/**
 * Created by hsuanlee on 2017/2/7.
 */

export interface CityPickerColumn {
  name?:string,
  id?:string,
  children?:Array<CityPickerColumn>
}
