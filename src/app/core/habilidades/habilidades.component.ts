import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const controls = document.querySelectorAll(".control");
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = items.length;

    controls.forEach((control) => {
      control.addEventListener("click", (e) => {
        const isLeft = control.classList.contains("arrow-left")
        if (isLeft) {
          currentItem -= 1;
        } else {
          currentItem += 1;
        }

        if (currentItem >= maxItems) {
          currentItem = 0;
        }

        if (currentItem < 0) {
          currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });
        items[currentItem].classList.add("current-item");
      });
    });

  }

}
