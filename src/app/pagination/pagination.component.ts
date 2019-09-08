import { Component, OnInit, Input, Output } from '@angular/core';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() allItems: any[];
  @Output() page: number;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(p: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, p);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.page = p
  }
}
