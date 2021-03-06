import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'webpack-example';

  ngOnInit() {

    import('hello-wasm').then(module => {
      console.log(module);
      module.say();
    });

  }

}
