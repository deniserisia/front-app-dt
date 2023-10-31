import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
  isSidebarOpen: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    const self = this;

    (function ($) {
      "use strict";
      var path = window.location.href;

      function updateSidebarState() {
        self.isSidebarOpen = $("body").hasClass("sb-sidenav-toggled");
      }

      updateSidebarState();

      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        if (this instanceof HTMLAnchorElement && this.href === path) {
          $(this).addClass("active");
        }
      });

      $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
        updateSidebarState();

        if (self.isSidebarOpen) {
          $("#sidebarToggle i").removeClass("fa-bars").addClass("fa-times");
        } else {
          $("#sidebarToggle i").removeClass("fa-times").addClass("fa-bars");
        }
      });
    })(jQuery);
  }
}
