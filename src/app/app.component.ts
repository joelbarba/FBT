import { Component, HostListener } from '@angular/core';

Array.prototype['getById'] = function(value:string) {
  return this.filter(item => item.id === value)[0];
};
Array.prototype['getBySec'] = function(value:string) {
  return this.filter(item => item.sec === value);
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: Array<any> = [
    { sec: 1, type: 'par', x: 740, y:  15, w:   3, h:  34 }, // Aegon1 parent
    { sec: 1, type: 'par', x: 540, y:  30, w:   3, h:  19 }, // Rhaenys parent
    { sec: 1, type: 'par', x: 940, y:  30, w:   3, h:  19 }, // Visenya parent
    { sec: 1, type: 'par', x: 540, y:  30, w: 400, h:   3 }, // Aegon1 + Rhaenys + Visenya parent
    { sec: 1, type: 'guy', name: 'Aegon I',  img: 'aegon1.jpg',  x: 700, y: 50, links: [20, 30, 40, 50], extLink: 'https://awoiaf.westeros.org/index.php/Aegon_I_Targaryen' },
    { sec: 1, type: 'guy', name: 'Visenya',  img: 'visenya.jpg', x: 900, y: 50, links: [20, 30], extLink: 'https://awoiaf.westeros.org/index.php/Visenya_Targaryen' },
    { sec: 1, type: 'guy', name: 'Rhaenys',  img: 'rhaenys.jpg', x: 500, y: 50, links: [40, 50], extLink: 'https://awoiaf.westeros.org/index.php/Rhaenys_Targaryen' },
    { sec: 1, type: 'par', x: 90, y:  30, w:   3, h:  19 }, // Argella parent
    { sec: 1, type: 'guy', name: 'Argella Durrandon', img: 'argella_durrandon.jpg', x:  50, y: 50, links: [60, 70], extLink: 'https://awoiaf.westeros.org/index.php/Argella_Durrandon' },
    { sec: 1, type: 'par', x: 260, y:  30, w:   3, h:  19 }, // Orys parent
    { sec: 1, type: 'guy', name: 'Orys Baratheon',    img: 'orys_baratheorn.jpg',   x: 220, y: 50, links: [60, 70], extLink: 'https://awoiaf.westeros.org/index.php/Orys_Baratheon'  },

    { sec: 20, type: 'mar', x: 787, y: 120, w: 112, h: 3 }, // Aegon1 + Visenya

    { sec: 30, type: 'par', x: 840, y: 123, w: 3, h: 156 }, // Maegor1 parent
    { sec: 30, type: 'guy', name: 'Maegor I', img: 'maegor1.jpg', x: 800, y: 280, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Maegor_I_Targaryen' },

    { sec: 40, type: 'mar', x: 587, y: 120, w: 112, h: 3 }, // Aegon1 + Rhaenys

    { sec: 50, type: 'par', x: 640, y: 123, w: 3, h: 156 }, // Aenys1 parent
    { sec: 50, type: 'guy', name: 'Aenys I',  img: 'aenys1.jpg',  x: 600, y: 280, links: [80, 100, 120, 130, 140, 150, 160], extLink: 'https://awoiaf.westeros.org/index.php/Aenys_I_Targaryen' },


    { sec: 60, type: 'mar', x: 137, y: 120, w: 82, h: 3 }, // Argella + Orys

    { sec: 70, type: 'par-dash', x: 175, y: 123, w: 0, h: 153 }, // Davos + Robar Baratheon
    // { sec: 70, type: 'par', x: 90,  y: 250, w: 175, h: 3 },
    // { sec: 70, type: 'par', x: 90,  y: 250, w: 3, h: 29 },
    // { sec: 70, type: 'par', x: 265, y: 250, w: 3, h: 29 },
    // { sec: 70, type: 'guy', name: 'Davos Baratheon', img: 'davos_baratheon.jpg', x: 50,  y: 280, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Davos_Baratheon' },
    { sec: 70, type: 'guy', name: 'Rogar Baratheon', img: 'robar_baratheon.jpg', x: 134,  y: 280, links: [80, 164, 166], extLink: 'https://awoiaf.westeros.org/index.php/Rogar_Baratheon' },

    { sec: 80, type: 'guy', name: 'Alyssa Velaryon', img: 'alyssa_velaryon.jpg', x: 410, y: 280, links: [100, 120, 130, 140, 150, 160, 164, 166], extLink: 'https://awoiaf.westeros.org/index.php/Alyssa_Velaryon' },

    { sec: 100, type: 'mar', x: 497, y: 345, w: 102, h: 3 }, // Alyssa + Aenys I

    { sec: 120, type: 'par', x: 547, y: 348, w: 3, h: 154 }, // Rhaena parents
    { sec: 120, type: 'guy', name: 'Rhaena',      img: 'rhaena_targaryen1.jpg', x: 504, y: 500, links: [170, 180, 190], extLink: 'https://awoiaf.westeros.org/index.php/Rhaena_Targaryen_(daughter_of_Aenys_I)' },

    { sec: 130, type: 'par', x: 547, y: 348, w: 3, h: 124 }, // Aegon parents
    { sec: 130, type: 'par', x: 547, y: 469, w: 128, h: 3 },
    { sec: 130, type: 'par', x: 672, y: 469, w: 3, h: 30 },
    { sec: 130, type: 'guy', name: 'Aegon',       img: 'aegon_targaryen1.5.jpg', x: 630, y: 500, links: [170, 180, 190], extLink: 'https://awoiaf.westeros.org/index.php/Aegon_Targaryen_(son_of_Aenys_I)' },

    { sec: 140, type: 'par', x: 547, y: 348, w: 3, h: 124 }, // Viserys parents
    { sec: 140, type: 'par', x: 547, y: 469, w: 257, h: 3 },
    { sec: 140, type: 'par', x: 802, y: 469, w: 3, h: 30 },
    { sec: 140, type: 'guy', name: 'Viserys',     img: 'viserys_targaryen0.jpg', x: 760, y: 500, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Viserys_Targaryen_(son_of_Aenys_I)' },

    { sec: 150, type: 'par', x: 547, y: 348, w: 3, h: 124 }, // Jaehaerys parents
    { sec: 150, type: 'par', x: 547, y: 469, w: 387, h: 3 },
    { sec: 150, type: 'par', x: 932, y: 469, w: 3, h: 30 },
    { sec: 150, type: 'guy', name: 'Jaehaerys I', img: 'jaehaerys_targaryen1.jpg', x: 890, y: 500, links: [200, 210, 220, 230, 240, 250, 260, 270, 280, 290], extLink: 'https://awoiaf.westeros.org/index.php/Jaehaerys_I_Targaryen' },

    { sec: 160, type: 'par', x: 547, y: 348, w: 3, h: 124 }, // Alysanne parents
    { sec: 160, type: 'par', x: 547, y: 469, w: 517, h: 3 },
    { sec: 160, type: 'par', x: 1063, y: 469, w: 3, h: 30 },
    { sec: 160, type: 'guy', name: 'Alysanne',    img: 'alysanne_targaryen.jpg', x: 1020, y: 500, links: [200, 210, 220, 230, 240, 250, 260, 270, 280, 290], extLink: 'https://awoiaf.westeros.org/index.php/Alysanne_Targaryen' },


    { sec: 164, type: 'mar', x: 221, y: 345, w: 188, h: 3 }, // Alyssa + Rogar

    { sec: 166, type: 'par', x: 355, y: 348, w: 3, h: 411 }, // Jocelyn Baratheon parents
    { sec: 166, type: 'guy', name: 'Jocelyn Baratheon', img: 'jocelyn_baratheon.jpg', x: 315, y: 750, links: [300], extLink: 'https://awoiaf.westeros.org/index.php/Jocelyn_Baratheon' },


    { sec: 170, type: 'mar', x: 591, y: 560, w: 38, h: 3 }, // Rhaena + Aegon

    { sec: 180, type: 'par', x: 610, y: 563, w: 3,  h: 99 }, // Rhalla parents
    { sec: 180, type: 'par', x: 550, y: 659, w: 63, h: 3 }, // Rhalla parents
    { sec: 180, type: 'par', x: 550, y: 659, w: 3,  h: 20 }, // Rhalla parents
    { sec: 180, type: 'guy', name: 'Rhaella',  img: 'rhaella_targaryen.jpg', x: 504, y: 680, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Rhaella_Targaryen_(daughter_of_Aegon)' },

    { sec: 190, type: 'par', x: 610, y: 563, w: 3,  h: 99 }, // Aera parents
    { sec: 190, type: 'par', x: 610, y: 659, w: 63, h: 3 }, // Aera parents
    { sec: 190, type: 'par', x: 673, y: 659, w: 3,  h: 20 }, // Aera parents
    { sec: 190, type: 'guy', name: 'Aerea',    img: 'aerea_targaryen.jpg', x: 630, y: 680, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Aerea_Targaryen' },



    // ---- Jaehaerys + Alysanne children: ------

    { sec: 200, type: 'mar', x: 977, y: 560, w: 42, h: 3 }, // Jaehaerys + Alysanne

    { sec: 210, type: 'par', x: 997, y: 563, w: 3,   h: 160 }, // Aemon parents
    { sec: 210, type: 'par', x: 870, y: 720, w: 130, h: 3 },   // Aemon parents
    { sec: 210, type: 'par', x: 870, y: 720, w: 3,   h: 29 },  // Aemon parents
    { sec: 210, type: 'guy', name: 'Aemon',     img: 'aemon_targaryen1.jpg',    x: 830,  y: 750, links: [300, 310], extLink: 'https://awoiaf.westeros.org/index.php/Aemon_Targaryen_(son_of_Jaehaerys_I)' },

    { sec: 220, type: 'par', x: 997, y: 563, w: 3,   h: 186 }, // Daella parents
    { sec: 220, type: 'guy', name: 'Daella',    img: 'daella_targaryen.jpg',    x: 950,  y: 750, links: [320], extLink: 'https://awoiaf.westeros.org/index.php/Daella_Targaryen_(daughter_of_Jaehaerys_I)' },

    { sec: 230, type: 'par', x: 997, y: 563,  w: 3,   h: 160 }, // Alyssa parents
    { sec: 230, type: 'par', x: 997, y: 720,  w: 120, h: 3 },   // Alyssa parents
    { sec: 230, type: 'par', x: 1114, y: 720, w: 3,   h: 29 },  // Alyssa parents
    { sec: 230, type: 'guy', name: 'Alyssa',    img: 'alyssa_targaryen.jpg',    x: 1070, y: 750, links: [330, 340, 350], extLink: 'https://awoiaf.westeros.org/index.php/Alyssa_Targaryen' },

    { sec: 240, type: 'par', x: 997,  y: 563,  w: 3,   h: 160 }, // Baelon parents
    { sec: 240, type: 'par', x: 997,  y: 720,  w: 240, h: 3 },   // Baelon parents
    { sec: 240, type: 'par', x: 1234, y: 720, w: 3,    h: 29 },  // Baelon parents
    { sec: 240, type: 'guy', name: 'Baelon',    img: 'baelon_targaryen.jpg',    x: 1190, y: 750, links: [330, 340, 350], extLink: 'https://awoiaf.westeros.org/index.php/Baelon_Targaryen_(son_of_Jaehaerys_I)' },

    { sec: 250, type: 'par', x: 997,  y: 563,  w: 3,   h: 160 }, // Vaegon parents
    { sec: 250, type: 'par', x: 997,  y: 720,  w: 360, h: 3 },   // Vaegon parents
    { sec: 250, type: 'par', x: 1354, y: 720, w: 3,    h: 29 },  // Vaegon parents
    { sec: 250, type: 'guy', name: 'Vaegon',    img: 'vaegon_targaryen.jpg',    x: 1310, y: 750, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Vaegon_Targaryen' },

    { sec: 260, type: 'par', x: 997,  y: 563,  w: 3,   h: 160 }, // Maegelle parents
    { sec: 260, type: 'par', x: 997,  y: 720,  w: 480, h: 3 },   // Maegelle parents
    { sec: 260, type: 'par', x: 1474, y: 720, w: 3,    h: 29 },  // Maegelle parents
    { sec: 260, type: 'guy', name: 'Maegelle',  img: 'maegelle_targaryen.jpg',  x: 1430, y: 750, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Maegelle_Targaryen' },

    { sec: 270, type: 'par', x: 997,  y: 563,  w: 3,   h: 160 }, // Maegelle parents
    { sec: 270, type: 'par', x: 997,  y: 720,  w: 600, h: 3 },   // Maegelle parents
    { sec: 270, type: 'par', x: 1594, y: 720, w: 3,    h: 29 },  // Maegelle parents
    { sec: 270, type: 'guy', name: 'Viserra',   img: 'viserra_targaryen.jpg',   x: 1550, y: 750, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Viserra_Targaryen' },

    { sec: 280, type: 'par', x: 997,  y: 563,  w: 3,   h: 160 }, // Saera parents
    { sec: 280, type: 'par', x: 997,  y: 720,  w: 720, h: 3 },   // Saera parents
    { sec: 280, type: 'par', x: 1714, y: 720, w: 3,    h: 29 },  // Saera parents
    { sec: 280, type: 'guy', name: 'Saera',     img: 'saera_targaryen.jpg',     x: 1670, y: 750, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Saera_Targaryen' },

    { sec: 290, type: 'par', x: 997,  y: 563,  w: 3,   h: 160 }, // Gael parents
    { sec: 290, type: 'par', x: 997,  y: 720,  w: 840, h: 3 },   // Gael parents
    { sec: 290, type: 'par', x: 1834, y: 720, w: 3,    h: 29 },  // Gael parents
    { sec: 290, type: 'guy', name: 'Gael',      img: 'gael_targaryen.jpg',      x: 1790, y: 750, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Gael_Targaryen' },


    { sec: 300, type: 'mar', x: 402, y: 840, w: 427, h: 3 }, // Jocelyn  + Aemon

    { sec: 310, type: 'par', x: 649,  y: 843,  w: 3, h: 56}, // Rhaenys parents
    { sec: 310, type: 'guy', name: 'Rhaenys',  img: 'rhaenys_targaryen.jpg', x: 608, y: 900, links: [332], extLink: 'https://awoiaf.westeros.org/index.php/Rhaenys_Targaryen_(daughter_of_Aemon)' },


    { sec: 320, type: 'par', x: 997,  y: 893,  w: 3, h: 36}, // Aemma parents
    { sec: 320, type: 'guy', name: 'Aemma Arryn',  img: 'aemma_arryn.jpg', x: 950, y: 930, links: [360, 370], extLink: 'https://awoiaf.westeros.org/index.php/Aemma_Arryn' },

    { sec: 330, type: 'mar', x: 1157, y: 825, w: 32, h: 3 }, // Alyssa + Baelon

    { sec: 340, type: 'par', x: 1172,  y: 828,  w: 3, h: 101}, // Viserys parents
    { sec: 340, type: 'guy', name: 'Viserys I',img: 'viserys1_targaryen.jpg', x: 1129, y: 930, links: [360, 370, 380], extLink: 'https://awoiaf.westeros.org/index.php/Viserys_I_Targaryen' },

    { sec: 350, type: 'par', x: 1172,  y: 828,  w: 3, h: 85}, // Daemon parents
    { sec: 350, type: 'par', x: 1172,  y: 910,  w: 134, h: 3}, // Daemon parents
    { sec: 350, type: 'par', x: 1303,  y: 910,  w: 3, h: 149}, // Daemon parents
    { sec: 350, type: 'guy', name: 'Daemon',  img: 'daemon_targaryen.jpg', x: 1260, y: 1060, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Daemon_Targaryen' },

    { sec: 355, type: 'mar', x: 537, y: 962, w: 70, h: 3 }, // Corlys + Rhaenys
    { sec: 355, type: 'guy', name: 'Corlys Velaryon',  img: 'corlys_velaryon.jpg', x: 450, y: 900, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Corlys_Velaryon' },

    { sec: 360, type: 'par', x: 570,  y: 965,  w: 3, h: 104}, // Laena parents
    { sec: 360, type: 'guy', name: 'Laena Velaryon',img: 'laena_velaryon.jpg', x: 530, y: 1070, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Laena_Velaryon' },

    { sec: 370, type: 'par', x: 570,  y: 965,  w: 3, h: 104}, // Leanor parents
    { sec: 370, type: 'par', x: 570,  y: 1055,  w: 170, h: 3}, // Leanor parents
    { sec: 370, type: 'par', x: 740,  y: 1055,  w: 3, h: 64}, // Leanor parents
    { sec: 370, type: 'guy', name: 'Leanor Velaryon',img: 'leanor_velaryon.jpg', x: 700, y: 1120, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Laenor_Velaryon' },

    { sec: 380, type: 'mar', x: 1037, y: 1000, w: 90, h: 3 }, // Aemma + Viserys I

    { sec: 390, type: 'par', x: 1080,  y: 1003,  w: 3, h: 116}, // Rhaenyra parents
    { sec: 390, type: 'guy', name: 'Rhaenyra',  img: 'rhaenyra_targaryen.jpg', x: 1040, y: 1120, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Rhaenyra_Targaryen' },



    { sec: 400, type: 'mar', x: 1216, y: 1000, w: 387, h: 3 }, // Viserys I + Alicent
    { sec: 400, type: 'guy', name: 'Alicent Hightower',  img: 'alicent_hightower.jpg', x: 1605, y: 930, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Alicent_Hightower' },

    { sec: 410, type: 'par', x: 1460,  y: 1003,  w: 3, h: 226}, // Aegon parents
    { sec: 410, type: 'guy', name: 'Aegon II', img: 'aegon_targaryen2.jpg',  x: 1420, y: 1210, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Aegon_II_Targaryen' },

    { sec: 420, type: 'par', x: 1460,  y: 1003,  w: 3, h: 200}, // Helaena parents
    { sec: 420, type: 'par', x: 1460,  y: 1183, w: 140, h: 3}, // Helaena parents
    { sec: 420, type: 'par', x: 1600,  y: 1183,  w: 3, h: 26}, // Helaena parents
    { sec: 420, type: 'guy', name: 'Helaena',  img: 'helaena_targaryen.jpg', x: 1555, y: 1210, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Helaena_Targaryen' },

    { sec: 430, type: 'par', x: 1460,  y: 1003,  w: 3, h: 200}, // Aemond parents
    { sec: 430, type: 'par', x: 1460,  y: 1183, w: 269, h: 3}, // Aemond parents
    { sec: 430, type: 'par', x: 1726,  y: 1183,  w: 3, h: 26}, // Aemond parents
    { sec: 430, type: 'guy', name: 'Aemond',   img: 'aemon_targaryen2.jpg',  x: 1685, y: 1210, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Aemond_Targaryen' },

    { sec: 440, type: 'par', x: 1460,  y: 1003,  w: 3, h: 200}, // Daeron parents
    { sec: 440, type: 'par', x: 1460,  y: 1183, w: 395, h: 3}, // Daeron parents
    { sec: 440, type: 'par', x: 1852,  y: 1183,  w: 3, h: 26}, // Daeron parents
    { sec: 440, type: 'guy', name: 'Daeron',   img: 'daeron_targaryen0.jpg', x: 1810, y: 1210, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Daeron_Targaryen_(son_of_Viserys_I)' },


    { sec: 450, type: 'mar', x: 617, y: 1100, w: 642, h: 3 }, // Laena + Daemon

    { sec: 460, type: 'par', x: 654,  y: 1103,  w: 3, h: 218}, // Rhaena parents
    { sec: 460, type: 'par', x: 560,  y: 1318,  w: 97, h: 3}, // Rhaena parents
    { sec: 460, type: 'par', x: 560,  y: 1318,  w: 3, h: 31}, // Rhaena parents
    { sec: 460, type: 'guy', name: 'Rhaena',  img: 'rhaena_targaryen2.jpg', x: 515, y: 1350, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Rhaena_Targaryen_(daughter_of_Daemon)' },

    { sec: 470, type: 'par', x: 654,  y: 1103,  w: 3, h: 246}, // Baela parents
    { sec: 470, type: 'guy', name: 'Baela',   img: 'baela_targaryen.jpg', x: 615, y: 1350, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Baela_Targaryen' },


    { sec: 480, type: 'mar', x: 787, y: 1185, w: 252, h: 3 }, // Leanor + Rhaenyra

    { sec: 490, type: 'par', x: 910,  y: 1188,  w: 3, h: 130}, // Jacaerys parents
    { sec: 490, type: 'par', x: 825,  y: 1318,  w: 88, h: 3}, // Jacaerys parents
    { sec: 490, type: 'par', x: 825,  y: 1318,  w: 3, h: 31}, // Jacaerys parents
    { sec: 490, type: 'guy', name: 'Jacaerys',   img: 'jacaerys_targaryen.jpg', x: 780, y: 1350, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Jacaerys_Velaryon' },

    { sec: 500, type: 'par', x: 910,  y: 1188,  w: 3, h: 130}, // Baela parents
    { sec: 500, type: 'par', x: 910,  y: 1318,  w: 35, h: 3}, // Lucerys parents
    { sec: 500, type: 'par', x: 945,  y: 1318,  w: 3, h: 31}, // Lucerys parents
    { sec: 500, type: 'guy', name: 'Lucerys',    img: 'lucerys_targaryen.jpg',  x: 900, y: 1350, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Lucerys_Velaryon' },

    { sec: 510, type: 'par', x: 910,  y: 1188,  w: 3, h: 130}, // Joffrey parents
    { sec: 510, type: 'par', x: 910,  y: 1318,  w: 150, h: 3}, // Joffrey parents
    { sec: 510, type: 'par', x: 1060,  y: 1318,  w: 3, h: 31}, // Joffrey parents
    { sec: 510, type: 'guy', name: 'Joffrey',    img: 'joffrey_targaryen.jpg',  x: 1020, y: 1350, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Joffrey_Velaryon' },



    { sec: 520, type: 'mar', x: 1127, y: 1160, w: 132, h: 3 }, // Rhaenyra + Daemon

    { sec: 530, type: 'par', x: 1195,  y: 1163,  w: 3, h: 376}, // Aegon parents
    { sec: 530, type: 'guy', name: 'Aegon III',   img: 'aegon_targaryen3.jpg',   x: 1154, y: 1540, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Aegon_III_Targaryen' },

    { sec: 540, type: 'par', x: 1195,  y: 1163,  w: 3, h: 345}, // Viserys parents
    { sec: 540, type: 'par', x: 1195,  y: 1508,  w: 135, h: 3}, // Viserys parents
    { sec: 540, type: 'par', x: 1327,  y: 1508,  w: 3, h: 31}, // Viserys parents
    { sec: 540, type: 'guy', name: 'Viserys II',  img: 'viserys_targaryen2.jpg', x: 1290, y: 1540, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Viserys_II_Targaryen' },


    { sec: 550, type: 'mar', x: 1507, y: 1280, w: 47, h: 3 }, // Aegon II + Helaena

    { sec: 560, type: 'par', x: 1530,  y: 1283,  w: 3, h: 125}, // Jaehaerys parents
    { sec: 560, type: 'par', x: 1530,  y: 1405,  w: 113, h: 3}, // Jaehaerys parents
    { sec: 560, type: 'par', x: 1640,  y: 1405,  w: 3, h: 24}, // Jaehaerys parents
    { sec: 560, type: 'guy', name: 'Jaehaerys',  img: 'jaehaerys_targaryen1.5.jpg', x: 1600, y: 1430, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Jaehaerys_Targaryen_(son_of_Aegon_II)' },

    { sec: 570, type: 'par', x: 1530,  y: 1283,  w: 3, h: 125}, // Jaehaera parents
    { sec: 570, type: 'par', x: 1530,  y: 1405,  w: 220, h: 3}, // Jaehaera parents
    { sec: 570, type: 'par', x: 1750,  y: 1405,  w: 3, h: 24}, // Jaehaera parents
    { sec: 570, type: 'guy', name: 'Jaehaera',   img: 'jaehaera_targaryen.jpg', x: 1710, y: 1430, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Jaehaera_Targaryen' },

    { sec: 580, type: 'par', x: 1530,  y: 1283,  w: 3, h: 125}, // Maelor parents
    { sec: 580, type: 'par', x: 1530,  y: 1405,  w: 330, h: 3}, // Maelor parents
    { sec: 580, type: 'par', x: 1860,  y: 1405,  w: 3, h: 24}, // Maelor parents
    { sec: 580, type: 'guy', name: 'Maelor',     img: 'maelor_targaryen.jpg', x: 1820, y: 1430, links: [], extLink: '' },


    { sec: 600, type: 'mar', x: 1377, y: 1605, w: 72, h: 3 }, // Viserys II + Larra
    { sec: 600, type: 'guy', name: 'Larra Rogare',  img: 'larra_rogare.jpg', x: 1450, y: 1540, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Larra_Rogare' },

    { sec: 610, type: 'mar', x: 1077, y: 1605, w: 76, h: 3 }, // Aegon III + Daenaera
    { sec: 610, type: 'guy', name: 'Daenaera Velaryon',  img: 'daenaera_velaryon.jpg', x: 990, y: 1540, links: [], extLink: 'https://awoiaf.westeros.org/index.php/Daenaera_Velaryon' },









    { sec: 999, type: 'guy', name: 'Rhaena',  img: 'rhaena_targaryen3.jpg', x: 315, y: 2680, links: [], extLink: '' },
  ];

  constructor() {  }

  ngOnInit() {
    this.reset();
    this.iniDev();
  }

  public reset = () => {
    this.lastSec = 0;
    this.items.forEach(item => { item.$show = false; item.$allShown = false; });
    this.nextPlain();
  };

  public showAll = () => {
    this.lastSec = 99999;
    this.items.forEach(item => { item.$show = true; item.$allShown = true; });
    this.items.filter(item => item.sec === 1).forEach(item => item.$show = true);
  };

  public unveil = (item) => {
    let unveiled: boolean = false;
    if (!!item.links) {
      item.links.forEach(linkId => {
        if (!unveiled) {
          this.items.filter(item => item.sec === linkId && !item.$show).forEach(item => {
            item.$show = true;
            unveiled = true;
          });
        }
      });
    }
    this.items.forEach(item => {  this.isAllShown(item); });
  };

  public nextItem = () => {
    for (let ind = 0; ind < this.items.length; ind++) {
      if (this.items[ind].type === 'guy' && !this.items[ind].$allShown) {
        this.unveil(this.items[ind]);
        return true;
      }
    }
  };

  public lastSec = 1;
  public nextPlain = () => {

    // Find the next sec after lastSec (min after lastSec)
    let nextSec = 0;
    this.items.filter(item => item.sec > this.lastSec).forEach(item => {
      if (nextSec === 0 || item.sec < nextSec) { nextSec = item.sec; }
    });
    this.lastSec = nextSec;

    this.items.filter(item => item.sec === this.lastSec).forEach(item =>  item.$show = true);
    this.items.forEach(item => { this.isAllShown(item); });
  };
  public prevPlain = () => {
    this.items.filter(item => item.sec === this.lastSec).forEach(item =>  item.$show = false);
    this.items.forEach(item => { this.isAllShown(item); });

    // Find the prev sec before lastSec (max before lastSec)
    let prevSec = 0;
    this.items.filter(item => item.sec < this.lastSec).forEach(item => {
      if (item.sec > prevSec) { prevSec = item.sec; }
    });
    this.lastSec = prevSec;

  };



  public isAllShown = (item) => {
    if (!!item.links) {
      item.$allShown = !item.links.filter(linkId => {
        return !!this.items.filter(item => item.sec === linkId && !item.$show).length;
      }).length;
    }
  };


  // -DEBUG----------------------------

  public iniDev = () => {
    this.showAll();
    this.devSel = this.items[this.items.length - 1];
    this.itemsBkp = [];
    this.items.forEach(item => {
      this.itemsBkp.push({ ...item });
    })
  };
  public itemsBkp;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log('event.key', event.key);
    if (event.key === 'ArrowDown')   { this.devSel.y++; } // console.log('Down'); }
    if (event.key === 'ArrowUp')     { this.devSel.y--; } // console.log('Up'); }
    if (event.key === 'ArrowLeft')   { this.devSel.x--; } // console.log('Left'); }
    if (event.key === 'ArrowRight')  { this.devSel.x++; } // console.log('Right'); }
    if (this.devSel.type !== 'guy') {
      if (event.key === 'w') { this.devSel.w++; }
      if (event.key === 'W') { this.devSel.w--; }
      if (event.key === 'h') { this.devSel.h++; }
      if (event.key === 'H') { this.devSel.h--; }
    }

    if (event.key === 'Escape')  {
      let ind = this.items.indexOf(this.devSel);
      Object.assign(this.devSel, this.itemsBkp[ind]);
    }

    event.preventDefault();
  }
  public devSel = null;


}
