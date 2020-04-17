import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateField(user){
    if(user.name==undefined||user.email==undefined||user.department==undefined||user.doj==undefined||user.employeeid==undefined||
      user.employeeid==""||user.name==""||user.email==""||user.department==""||user.doj==""){
      return false
    }else{
      return true
    }
  }
  validateEmail(email){
    const re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }
}
