import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class ValidatorData{
  //fieldName là tên data,fileReality là tên bên ngoài hiện ra của nó , stringPattern là trường hợp regex pattern có lỗi thì bắt
  getErrorText(fieldName: string,filedReality:string , formGroup: FormGroup,stringPattern?:string){
    const field = formGroup.get(fieldName);

  if (field.touched && field.invalid) {
    if (field.hasError('required')) {
      return `${filedReality} is required.`;
    } else if (field.hasError('maxlength')) {
      const maxLength = field.getError('maxlength').requiredLength;
      return `${filedReality} must be at most ${maxLength} characters long.`;
    } else if (field.hasError('minlength')) {
      const minLength = field.getError('minlength').requiredLength;
      return `${filedReality} must be at least ${minLength} characters long.`;
    } else if (field.hasError('email')) {
      return `${filedReality} must be a valid email address.`;
    } else if (field.hasError('max')) {
      const maxValue = field.getError('max').max;
      return `${filedReality} must be less than or equal to ${maxValue}.`;
    } else if (field.hasError('min')) {
      const minValue = field.getError('min').min;
      return `${filedReality} must be greater than or equal to ${minValue}.`;
    } else if (field.hasError('pattern')) {
      if(stringPattern!=null){
        return stringPattern;
      }
      const patternValue = field.getError('pattern').requiredPattern;
      return `${filedReality} must match the pattern ${patternValue}.`;
    } else if (field.hasError('matchPasswords')) {
      return `Confirm ${filedReality} must match ${filedReality}.`;
    }
  }

  return '';
  }
 //kiểm tra tính hợp lệ của trường thuộc tính để add class chứ gì
  getErrorAddClass(fieldName: string, formGroup: FormGroup): boolean{
    const field = formGroup.get(fieldName);
    return field.invalid && (field.dirty || field.touched)
   // formGroup.get('class').invalid && (formGroup.get('class').dirty || formGroup.get('class').touched)
   // field.invalid && (field.dirty || field.touched)
  }
  //các vấn đề cần kiểm tra formGroup trc khi submit 
  checkFormGroupSubmit(formGroup: FormGroup): boolean{
    for (const field in formGroup.controls) {
      const control = formGroup.get(field);
      control.markAsDirty();
      control.markAsTouched();
    }
     return  formGroup.valid;
  }
  getErrorNotification(error:string ,id?:string ){

  }
  getErrorRouterChange(mess:string ,urlChange?:string ,urlNow?:string ){


  }

}
