import {Component, Input, OnInit} from '@angular/core';
import {IForestList} from "../../../../domain/forest/i-forest-list";
import {ForestList} from "../../../../domain/forest/forest-list";

@Component({
  selector: 'app-forest-list',
  templateUrl: './forest-list.component.html',
  styleUrls: ['./forest-list.component.scss']
})
export class ForestListComponent implements OnInit {

  @Input() forestListInput: ForestList | null = null;

  private readonly _forestList: IForestList | null;

  constructor() {
    this._forestList = this.forestListInput;
  }

  ngOnInit(): void {
  }

  get forestList(): IForestList | null {
    return this._forestList;
  }

}
