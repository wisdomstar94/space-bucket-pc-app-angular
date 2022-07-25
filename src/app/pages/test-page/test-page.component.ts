import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

  goToRoute(target: 'sub1' | 'sub2'): void {
    this.router.navigate(['test/' + target]);
  }
}
