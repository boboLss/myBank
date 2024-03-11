import { Component, OnInit } from "@angular/core";
import { TransactionDTO } from "../transaction/Transaction";
import { UserDTO } from "../transaction/User";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
// import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user: UserDTO = {
    accountDebit: null,
    accountNum: null,
    firstName: null,
    lastName: null,
    id: null,
  };

  ngOnInit() {}

  register(user: UserDTO): void {
    this.userService.saveUser(user as UserDTO).subscribe((u) => {
      this.storeUserInSessionStorage(u);
      this.router.navigateByUrl("/send-transaction");
    });
  }

  storeUserInSessionStorage(user: UserDTO): void {
    console.log("before");
    console.log(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  }
}
