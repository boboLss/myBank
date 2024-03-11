import { AfterViewInit, Component, OnInit } from "@angular/core";
import { UserDTO } from "./User";
import { TransactionDTO } from "./Transaction";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"],
})
export class TransactionComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {}

  sender: UserDTO = {
    accountDebit: null,
    accountNum: null,
    firstName: null,
    lastName: null,
    id: null,
  };
  receiver: UserDTO = {
    accountDebit: null,
    accountNum: null,
    firstName: null,
    lastName: null,
    id: null,
  };
  transaction: TransactionDTO = {
    sender: this.sender,
    receiver: this.receiver,
    amount: null,
    reason: null,
    transactionType: true,
    id: null,
  };
  user: UserDTO;

  ngOnInit() {
    this.sender = JSON.parse(sessionStorage.getItem("user"));
    console.log("after");
    console.log(this.sender);
  }
  
}
