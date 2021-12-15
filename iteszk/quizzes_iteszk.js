var json = [
  {
    "id": "KHF1",
    "title": "Bevezetés, félvezetők",
    "tasks": [
      {
        "question": "A teljesítmény - késleltetés szorzat (PDP)",
        "type": "checkbox",
        "answers": [
          {
            "text": "Mértékegysége a Joule.",
            "value": true
          },
          {
            "text": "Minél nagyobb ez az érték, annál jobb a technológia",
            "value": false
          },
          {
            "text": "Megmutatja, hogy a mikroprocesszor egy utasításának az elvégzése mennyi időbe kerül.",
            "value": false
          },
          {
            "text": "Mértékegysége a Watt.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi jellemző a MOS tranzisztorra?",
        "image": "images/nmospmos.png",
        "type": "checkbox",
        "answers": [
          {
            "text": "A képen a baloldali tranzisztor az nMOS tranzisztor",
            "value": true
          },
          {
            "text": "Nevét a kezdeti anyagszerkezet angol nevéről kapta: fém, a félvezető oxidja, félvezető",
            "value": true
          },
          {
            "text": "A gate feszültségével lehet szabályozni a source és drain elektróda közötti áramot.",
            "value": true
          },
          {
            "text": "Digitális logikában a pMOS logikai magas szint esetén vezet.",
            "value": false
          },
          {
            "text": "Az nMOS és a pMOS tranzisztorok felépítése hasonló, csak a rétegek adalékolása ellentétes.",
            "value": true
          },
          {
            "text": "A MOS tranzisztor egy nem teljesen ideális, de azért jól működő kapcsoló",
            "value": true
          },
          {
            "text": "A pMOS tranzisztor logikai 0 esetén vezet.",
            "value": true
          },
          {
            "text": "A képen a jobboldal tranzisztor az nMOS tranzisztor",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a CMOS inverterre?",
        "image": "images/cmos-inverter.png",
        "type": "checkbox",
        "answers": [
          {
            "text": "Ha a bemenet logikai 0, akkor a pMOS vezet, az nMOS tranzisztor nem vezet.",
            "value": true
          },
          {
            "text": "A felső tranzisztor pMOS",
            "value": true
          },
          {
            "text": "Ha a bemenet logikai 1, akkor a pMOS tranzisztor a kimenetet a tápfeszültségre kapcsolja.",
            "value": false
          },
          {
            "text": "Az átkapcsolás során előfordulhat, hogy mindkét tranzisztor egyszerre vezet.",
            "value": true
          },
          {
            "text": "Állandósult állapotban előfordulhat, hogy mindkét tranzisztor egyszerre vezet.",
            "value": false
          },
          {
            "text": "Ha a bemenet logikai 0, akkor a pMOS tranzisztor a kimenetet a tápfeszültségre kapcsolja.",
            "value": true
          },
          {
            "text": "Ha a bemenet logikai 1, akkor a pMOS vezet, az nMOS tranzisztor nem vezet.",
            "value": false
          },
          {
            "text": "A felső tranzisztor nMOS",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a méretcsökkentésre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Ha minden fizikai méretet a felére csökkentünk, kb. kétszer annyi alkatrész fér el ugyanazon a területen.",
            "value": false
          },
          {
            "text": "A késleltetés csökken",
            "value": true
          },
          {
            "text": "Az 1mm2-re jutó fogyasztás megnövekszik",
            "value": true
          },
          {
            "text": "Az inverter fogyasztása csökken, de a bonyolultabb kapuké nem változik",
            "value": false
          },
          {
            "text": "Az órajelfrekvencia növelhető",
            "value": true
          },
          {
            "text": "A késleltetés megnövekszik",
            "value": false
          },
          {
            "text": "A logikai kapuk fogyasztása csökken",
            "value": true
          },
          {
            "text": "Az 1cm2-re eső fogyasztás nem változik meg.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz CMOS áramkörökre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "a statikus teljesítményfelvétel alacsony",
            "value": true
          },
          {
            "text": "tápfeszültség érzéketlen",
            "value": true
          },
          {
            "text": "nagyon jól integrálható, mivel a kapuk egyszerűek",
            "value": true
          },
          {
            "text": "A logikai magas szint a tápfeszültség, a logikai 0 szint pedig a 0V.",
            "value": true
          },
          {
            "text": "Rail-to-rail működésű",
            "value": true
          },
          {
            "text": "A logikai 1 a tápfeszültség, a logikai 0  pedig a 0V",
            "value": true
          },
          {
            "text": "a dinamikus teljesítményfelvétel (kapcsoláskor) alacsony, közel 0",
            "value": false
          },
          {
            "text": "n és p csatornás tranzisztorokból állnak a kapuk, innen ered a név.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz CMOS áramkörök késleltetésére?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Modern technológiákban leginkább az összekötő vezetékhálózat kapacitása által okozott késleltetés a legjelentősebb",
            "value": true
          },
          {
            "text": "Tápfeszültség növelésével a késleltetés csökken",
            "value": true
          },
          {
            "text": "A kapu kimenetét terhelő kapacitások határozzák meg",
            "value": true
          },
          {
            "text": "A hőmérséklet növekedésével a késleltetés általában nő.",
            "value": true
          },
          {
            "text": "A hőmérséklet csökkentésével a késleltetés általában csökken",
            "value": true
          },
          {
            "text": "A kapu kimenetét terhelő ellenállások határozzák meg",
            "value": false
          },
          {
            "text": "Modern technológiákban leginkább a következő kapu bemenetének kapacitása által okozott késleltetés a legjelentősebb",
            "value": false
          }
        ]
      },
      {
        "question": "Egy médiaszerver processzorát 20%-al nagyobb órajellel működtetjük, a mag feszültségét emiatt 1.2V-ról 1.3V-ra növeljük. Feltételezve, hogy a fogyasztás nagy részét a töltéspumpálás okozza, mekkora lesz a szerver eredetileg 600Ft-os havi villanyszámlája?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "845"
          }
        ]
      },
      {
        "question": "Mi igaz az alábbi karakterisztikájú inverterre?",
        "image": "images/transfer1.PNG",
        "type": "checkbox",
        "answers": [
          {
            "text": "Tápfeszültsége 3V.",
            "value": true
          },
          {
            "text": "A komparálási feszültség 1.5V",
            "value": true
          },
          {
            "text": "Ha a bemenetre komparálási feszültség kerül, a kimenet nagyimpedanciás",
            "value": false
          },
          {
            "text": "Ha a bemenetre 0.5V -os logikai 0 szint kerül, a kimenet jelszintje szinte tökéletesen regenerálódik",
            "value": true
          }
        ]
      },
      {
        "question": "A félvezetőkre jellemző, hogy",
        "type": "checkbox",
        "answers": [
          {
            "text": "adalékolásuk során kis mennyiségben jutattnak be idegen atomokat, amelyek beépülnek a kristályrácsba",
            "value": true
          },
          {
            "text": "növekvő hőmérséklet esetén ellenállásuk megnövekszik",
            "value": false
          },
          {
            "text": "n típusú félvezetőben az elektronok,  p típusúban a lyukak a többségi töltéshordozók",
            "value": true
          },
          {
            "text": "A vezetési sávban tartozkódó elektronok és a vegyértéksávban lévő elektron hiányok (lyukak) szolgálják az áramvezetést.",
            "value": true
          },
          {
            "text": "növekvő hőmérsékletre ellenállásuk csökken",
            "value": true
          },
          {
            "text": "a tiltott sávjuk viszonylag keskeny",
            "value": true
          },
          {
            "text": "csak a periódusos rendszer IV főcsoportjának elemei félvezetők. (C, Si, Ge, Sn, Pb)",
            "value": false
          },
          {
            "text": "csak egyirányba vezetik az áramot.",
            "value": false
          }
        ]
      },
      {
        "question": "Tételezzünk fel egy mikroprocesszort, ahol a fogyasztás nagy részét a dinamikus fogyasztás okozza, majd csökkentsük az órajel frekvenciáját a felére.  A processzor tápfeszültségén viszont nem változtatunk. Ugyanazon program lefuttatásakor hogyan változik az akkumulátorból felvett energia?",
        "type": "radio",
        "answers": [
          {
            "text": "A kérdés nem eldönthető, mivel nem ismerjük sem a tápfeszültség, sem a frekvencia pontos értékét",
            "value": false
          },
          {
            "text": "Nem változik meg, hiszen a felvett teljesítmény ugyan fele lesz, de a program lefutása kétszer annyi ideig tart.",
            "value": true
          },
          {
            "text": "Negyedakkora lesz, hiszen a CMOS áramkörök energiafelhasználása az órajelfrekvencia négyzetével arányos.",
            "value": false
          },
          {
            "text": "Fele annyi lesz, hiszen a CMOS áramkörök fogyasztása egyenesen arányos a frekvenciával.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy dinamikus feszültség-frekvencia skálázást alkalmazó mikroprocesszor magfeszültsége 3.4GHz-en 1.117V és 800MHz frekvencián pedig 660mV. Feltételezzük, hogy a fogyasztás nagy részét a töltéspumpálás okozza.  Mekkora a két állapot fogyasztásának aránya? (P@3.4GHz/P@800MHz)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "12.1733"
          }
        ]
      },
      {
        "question": "Egy rendszerben a mikroprocesszor magfeszültsége 3GHz-en 1.1V, ebben az esetben a processzor fogyasztása 7 W. A rendszert 4 processzorossá szereljük át és 1GHz frekvencián működtetjük, 900 mV tápfeszültségről. Feltételezzük, hogy a processzorok fogyasztásának nagy részét a töltéspumpálás okozza. Mekkora lesz a módosított rendszer fogyasztása? (W)",
        "type": "radio",
        "answers": [
          {
            "text": "18.74",
            "value": false
          },
          {
            "text": "Egyik válasz sem helyes",
            "value": false
          },
          {
            "text": "7.64",
            "value": false
          },
          {
            "text": "6.25",
            "value": true
          }
        ]
      },
      {
        "question": "Egy CMOS technológiával készült SoC órajele 1.5GHz, tápfeszültsége 2.8V. A rendszer így teljesen feltöltött akkumulátorról 17órát működik. Az órajelet felére, a tápfeszültséget kétharmadára csökkentjük. A módosított rendszer hány óráig fog üzemelni?",
        "type": "radio",
        "answers": [
          {
            "text": "38.25",
            "value": false
          },
          {
            "text": "51.00",
            "value": false
          },
          {
            "text": "76.50",
            "value": true
          },
          {
            "text": "Egyik válasz sem helyes",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a digitális integrált áramkörökre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Digitális integrált áramkörök leginkább tranzisztorokat tartalmaznak",
            "value": true
          },
          {
            "text": "Jelenleg félvezető alapon, általában egy kisméretű szilícium lapkán készülnek.",
            "value": true
          },
          {
            "text": "Az integrált áramköri gyártás egyedi gyártás, emiatt drága.",
            "value": false
          },
          {
            "text": "Az integrált áramkörök nyomtatott huzalozású hordozón (PCB) készülnek el.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy CMOS technológiával készült SoC órajele 2GHz, tápfeszültsége 3.2V. A rendszer így teljesen feltöltött akkumulátorról 11órát működik. Az órajelet felére, a tápfeszültséget kétharmadára csökkentjük. A módosított rendszer hány óráig fog üzemelni?",
        "type": "radio",
        "answers": [
          {
            "text": "33.00",
            "value": false
          },
          {
            "text": "Egyik válasz sem helyes",
            "value": false
          },
          {
            "text": "24.75",
            "value": false
          },
          {
            "text": "49.50",
            "value": true
          }
        ]
      },
      {
        "question": "Egy rendszerben a mikroprocesszor magfeszültsége 3GHz-en 1.1V, ebben az esetben a processzor fogyasztása 10 W. A rendszert 3 processzorossá szereljük át és 1GHz frekvencián működtetjük, 750 mV tápfeszültségről. Feltételezzük, hogy a processzorok fogyasztásának nagy részét a töltéspumpálás okozza. Mekkora lesz a módosított rendszer fogyasztása? (W)",
        "type": "radio",
        "answers": [
          {
            "text": "Egyik válasz sem helyes",
            "value": false
          },
          {
            "text": "4.65",
            "value": true
          },
          {
            "text": "6.82",
            "value": false
          },
          {
            "text": "13.95",
            "value": false
          }
        ]
      },
      {
        "question": "Egy rendszerben a mikroprocesszor magfeszültsége 3GHz-en 1.1V, ebben az esetben a processzor fogyasztása 8 W. A rendszert 2 processzorossá szereljük át és 1GHz frekvencián működtetjük, 820 mV tápfeszültségről. Feltételezzük, hogy a processzorok fogyasztásának nagy részét a töltéspumpálás okozza. Mekkora lesz a módosított rendszer fogyasztása? (W)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "2.9637"
          }
        ]
      },
      {
        "question": "Egy médiaszerver processzorát 5%-al nagyobb órajellel működtetjük, a mag feszültségét emiatt 1.2V-ról 1.3V-ra növeljük. Feltételezve, hogy a fogyasztás nagy részét a töltéspumpálás okozza, mekkora lesz a szerver eredetileg 400Ft-os havi villanyszámlája?",
        "type": "radio",
        "answers": [
          {
            "text": "478 Ft",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          },
          {
            "text": "455 Ft",
            "value": false
          },
          {
            "text": "493 Ft",
            "value": true
          }
        ]
      },
      {
        "question": "Egy CMOS technológiával készült SoC órajele 1.6GHz, tápfeszültsége 3.5V. A rendszer így teljesen feltöltött akkumulátorról 7órát működik. Az órajelet felére, a tápfeszültséget kétharmadára csökkentjük. Meddig fog működni?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "31.5"
          }
        ]
      },
      {
        "question": "Egy dinamikus feszültség-frekvencia skálázást alkalmazó mikroprocesszor magfeszültsége 3.4GHz-en 1.117V és 800MHz frekvencián pedig 660mV. Feltételezzük, hogy a fogyasztás nagy részét a töltéspumpálás okozza.Ugyanazon program futtatásakor mekkora lesz a felhasznált energia aránya? (W@3.4GHz/W@800MHz)?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "2.8643"
          }
        ]
      },
      {
        "question": "Egy médiaszerver processzorát 14%-al nagyobb órajellel működtetjük, a mag feszültségét emiatt 1.2V-ról 1.3V-ra növeljük. Feltételezve, hogy a fogyasztás nagy részét a töltéspumpálás okozza, mekkora lesz a szerver eredetileg 550Ft-os havi villanyszámlája?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "736"
          }
        ]
      },
      {
        "question": "Egy médiaszerver processzorát 19%-al nagyobb órajellel működtetjük, a mag feszültségét emiatt 1.2V-ról 1.3V-ra növeljük. Feltételezve, hogy a fogyasztás nagy részét a töltéspumpálás okozza, mekkora lesz a szerver eredetileg 444Ft-os havi villanyszámlája?",
        "type": "radio",
        "answers": [
          {
            "text": "681 Ft",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          },
          {
            "text": "572 Ft",
            "value": false
          },
          {
            "text": "620 Ft",
            "value": true
          }
        ]
      },
      {
        "question": "Egy rendszerben a mikroprocesszor magfeszültsége 3GHz-en 1.1V, ebben az esetben a processzor fogyasztása 8 W. A rendszert 2 processzorossá szereljük át és 1GHz frekvencián működtetjük, 800 mV tápfeszültségről. Feltételezzük, hogy a processzorok fogyasztásának nagy részét a töltéspumpálás okozza. Mekkora lesz a módosított rendszer fogyasztása? (W)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "2.8209366391184574"
          }
        ]
      },
      {
        "question": "Egy rendszerben a mikroprocesszor magfeszültsége 3GHz-en 1.1V, ebben az esetben a processzor fogyasztása 9 W. A rendszert 3 processzorossá szereljük át és 1GHz frekvencián működtetjük, 720 mV tápfeszültségről. Feltételezzük, hogy a processzorok fogyasztásának nagy részét a töltéspumpálás okozza. Mekkora lesz a módosított rendszer fogyasztása? (W)",
        "type": "radio",
        "answers": [
          {
            "text": "Egyik válasz sem helyes",
            "value": false
          },
          {
            "text": "5.89",
            "value": false
          },
          {
            "text": "3.86",
            "value": true
          },
          {
            "text": "11.57",
            "value": false
          }
        ]
      },
      {
        "question": "Egy médiaszerver processzorát 9%-al nagyobb órajellel működtetjük, a mag feszültségét emiatt 1.2V-ról 1.3V-ra növeljük. Feltételezve, hogy a fogyasztás nagy részét a töltéspumpálás okozza, mekkora lesz a szerver eredetileg 700Ft-os havi villanyszámlája?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "895.4652777777779"
          }
        ]
      },
      {
        "question": "Az ábra 40 év mikroprocesszor fejlődést mutat. Egészítsd ki a lenti mondatot a következő szavakból választva: exponenciálisan/lineárisan/nem változik/növekszik/csökken!",
        "image": "images/microprocessor.data.png",
        "type": "text",
        "answers": [
          {
            "text": "A tranzisztorok száma "
          },
          {
            "text": "",
            "value": "exponenciálisan"
          },
          {
            "text": " növekszik, ahogy a Moore törvény diktálja. Az órajelfrekvencia és felvett teljesítmény 2005 óta "
          },
          {
            "text": "",
            "value": "nem változik"
          },
          {
            "text": "az energiahatékonyság viszont "
          },
          {
            "text": "",
            "value": "növekszik"
          }
        ]
      },
      {
        "question": "Milyen kristályszerkezetek láthatóak a képen?",
        "image": "images/monopoliamorf.png",
        "type": "text",
        "answers": [
          {
            "text": "1. ábra: "
          },
          {
            "text": "",
            "value": "monokristály"
          },
          {
            "text": "2. ábra: "
          },
          {
            "text": "",
            "value": "polikristály"
          },
          {
            "text": "3. ábra: "
          },
          {
            "text": " ",
            "value": "amorf"
          }
        ]
      }
    ]
  },
  {
    "id": "KHF2",
    "title": "MOS tranzisztorok, CMOS áramkörök",
    "tasks": [
      {
        "question": "Milyen vezetési típusú tranzisztorokat tartalmaz a statikus CMOS logikai kapukban a pull-up network?",
        "type": "radio",
        "answers": [
          {
            "text": "pMOS",
            "value": true
          },
          {
            "text": "nMOS",
            "value": false
          },
          {
            "text": "cMOS",
            "value": false
          },
          {
            "text": "dMOS",
            "value": false
          }
        ]
      },
      {
        "question": "Egészítse ki a latch kapcsolási rajzát! Alaposan nézze meg a latch vezérlő jeleit! (Az invertált jelet a / jelöli, azaz /Q a Q inverze)"
      },
      {
        "question": "Mi lesz a kimenet logikai értéke, ha EN=1, A=0?",
        "image": "images/c2mos.PNG",
        "type": "select",
        "answers": [
          {
            "text": " ",
            "value": false
          },
          {
            "text": "1",
            "value": true
          },
          {
            "text": "HZ",
            "value": false
          },
          {
            "text": "0",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz CMOS transzfer kapura?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Bizonyos függvényeket, például multiplexer jellegű funkciókat könnyebb megvalósítani, de több tranzisztort fognak tartalmazni.",
            "value": false
          },
          {
            "text": "Átengedéshez a pMOS 0-t, az nMOS logikai 1 vezérlést kap.",
            "value": true
          },
          {
            "text": "A pMOS tranzisztor ugyanolyan vezérlést kap, mint az nMOS",
            "value": false
          },
          {
            "text": "Párhuzamosan kapcsolt nMOS és pMOS tranzisztorból áll.",
            "value": true
          },
          {
            "text": "Bizonyos függvényeket, például multiplexer jellegű funkciókat könnyebb megvalósítani, és noha több tranzisztort fog tartalmazni, mint a statikus CMOS megvalósítás, cserébe jóval gyorsabb lesz.",
            "value": false
          },
          {
            "text": "A pMOS tranzisztor ellentétes vezérlést kap, mint az nMOS",
            "value": true
          },
          {
            "text": "Bizonyos függvényeket, például multiplexer jellegű funkciókat könnyebb megvalósítani, és kevesebb tranzisztort fog tartalmazni, mint a statikus CMOS megvalósítás",
            "value": true
          },
          {
            "text": "Sorosan kapcsolt nMOS és pMOS tranzisztorból áll.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a kétbemenetű statikus CMOS NAND kapura?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A pull-up network két sorba kapcsolt nMOS tranzisztorból áll.",
            "value": false
          },
          {
            "text": "A pMOS és nMOS tranzisztorok száma megegyezik.",
            "value": true
          },
          {
            "text": "Összesen 4 tranzisztort tartalmaz.",
            "value": true
          },
          {
            "text": "A pull-down network két sorba kapcsolt nMOS tranzisztorból áll",
            "value": true
          }
        ]
      },
      {
        "question": "Milyen tárolóra jellemző hullámformát lát?",
        "image": "images/wave.PNG",
        "type": "radio",
        "answers": [
          {
            "text": "Az ábra alapján nem dönthető el",
            "value": false
          },
          {
            "text": "órajel felfutó élére szinkronizált flip-flop",
            "value": true
          },
          {
            "text": "órajel negáltjára engedélyezett latch",
            "value": false
          },
          {
            "text": "órajel lefutó élére szinkronizált latch",
            "value": false
          },
          {
            "text": "órajelre engedélyezett latch",
            "value": false
          }
        ]
      },
      {
        "question": "Milyen logikai függvényt valósít meg az alábbi kapu?",
        "image": "images/ABorCD.png",
        "type": "radio",
        "answers": [
          {
            "text": "$$ AB+CD $$",
            "value": false
          },
          {
            "text": "$$ \\over{(A+B)(C+D)} $$",
            "value": false
          },
          {
            "text": "$$ (A+B)(C+D) $$",
            "value": false
          },
          {
            "text": "$$ \\over{AB+CD} $$",
            "value": true
          }
        ]
      },
      {
        "question": "Milyen logikai függvényt valósít meg az alábbi kapcsolás? A kapcsolási rajz nem hibás, viszont trükkös!",
        "image": "images/trukkos.png",
        "type": "checkbox",
        "answers": [
          {
            "text": "Kizáró vagy (XOR)",
            "value": false
          },
          {
            "text": "Félösszeadó.",
            "value": false
          },
          {
            "text": "Ekvivalencia. (kizáró vagy ellentettje, NXOR)",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz CMOS komplex kapukra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nem alapvető logikai függvényeket lehet tranzisztor szinten megvalósítani",
            "value": true
          },
          {
            "text": "A többszintű realizációhoz képest a késleltetés kedvezőbb, azaz nagyobb lesz.",
            "value": false
          },
          {
            "text": "A pull-up és a pull-down hálózat topológiája általában megegyezik.",
            "value": false
          },
          {
            "text": "A pull-down network n csatornás tranzisztorokból áll, annyi darab, ahány bemenete van a függvénynek.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a CMOS dominó logikára?",
        "type": "checkbox",
        "answers": [
          {
            "text": "általában kevesebb tranzisztor szükséges, mint statikus CMOS esetben",
            "value": true
          },
          {
            "text": "A pull-down network mindenféleképpen eltávolítja a kimeneten lévő szórt kapacitás töltését",
            "value": false
          },
          {
            "text": "gyorsabb, mint a statikus CMOS",
            "value": true
          },
          {
            "text": "nincs szükség előtöltési fázisra",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a kétbemenetű statikus CMOS NOR kapura?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A pull-down network két sorba kapcsolt nMOS tranzisztorból áll",
            "value": false
          },
          {
            "text": "A pMOS és nMOS tranzisztorok száma megegyezik.",
            "value": true
          },
          {
            "text": "Összesen 4 tranzisztort tartalmaz.",
            "value": true
          },
          {
            "text": "A pull-up network két sorba kapcsolt pMOS tranzisztorból áll.",
            "value": true
          }
        ]
      },
      {
        "question": "Egy kétbemenetű NAND kapu mindkét bemenete 0.3 valószínűséggel változik meg. Mekkora a valószínűsége, hogy a kimenet megváltozik?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.255"
          }
        ]
      },
      {
        "question": "Mi igaz statikus CMOS komplex kapukra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A pull-up network a pull-down network tükörképe.",
            "value": false
          },
          {
            "text": "A többszintű realizációhoz képest kevesebb tranzisztorral megvalósítható a logikai függvény",
            "value": true
          },
          {
            "text": "A többszintű realizációhoz képest a késleltetés kedvezőbb, azaz kisebb lesz.",
            "value": true
          },
          {
            "text": "Egy n bemenetű komplex kapu 2n tranzisztort tartalmaz.",
            "value": true
          }
        ]
      },
      {
        "question": "Hány tranzisztor szükséges a D F/F megvalósításához statikus CMOS technológiában?",
        "image": "images/d_flip_flop.png",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "24"
          }
        ]
      },
      {
        "question": "Mi lesz a kimenet logikai értéke, ha EN=0, A=0?",
        "image": "images/c2mos.PNG",
        "type": "select",
        "answers": [
          {
            "text": " ",
            "value": false
          },
          {
            "text": "HZ",
            "value": true
          },
          {
            "text": "0",
            "value": false
          },
          {
            "text": "1",
            "value": false
          }
        ]
      },
      {
        "question": "Egy kétbemenetű NAND kapu mindkét bemenete 0.45 valószínűséggel változik meg. Mekkora a valószínűsége, hogy a kimenet megváltozik?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.34875"
          }
        ]
      },
      {
        "question": "Milyen vezetési típusú tranzisztorokat tartalmaz a statikus CMOS logikai kapukban a pull-down network?",
        "type": "radio",
        "answers": [
          {
            "text": "cMOS",
            "value": false
          },
          {
            "text": "nMOS",
            "value": true
          },
          {
            "text": "pMOS",
            "value": false
          },
          {
            "text": "dMOS",
            "value": false
          }
        ]
      },
      {
        "question": "Egy kétbemenetű NAND kapu mindkét bemenete 0.5 valószínűséggel változik meg. Mekkora a valószínűsége, hogy a kimenet megváltozik?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.375"
          }
        ]
      },
      {
        "question": "Egy kétbemenetű NOR kapu mindkét bemenete 0.3 valószínűséggel változik meg. Mekkora a valószínűsége, hogy a kimenet megváltozik?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.255"
          }
        ]
      },
      {
        "question": "Egy kétbemenetű NAND kapu mindkét bemenete 0.35 valószínűséggel változik meg. Mekkora a valószínűsége, hogy a kimenet megváltozik?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.28875"
          }
        ]
      },
      {
        "question": "Egy CMOS komplex kapuval megvalósított összeadó esetén az átvitel (carry) késleltetése 200 ps, az összeg pedig 200 ps idő alatt készül el. Körülbelül mekkora maximális frekvenciával használhatunk egy 8 bites CMOS ripple-carry összeadót?  A választ MHz-ben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "555.56"
          }
        ]
      },
      {
        "question": "Egy kétbemenetű NAND kapu mindkét bemenete 0.25 valószínűséggel változik meg. Mekkora a valószínűsége, hogy a kimenet megváltozik?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.21875"
          }
        ]
      },
      {
        "question": "Hogyan kell a flip-flop-ot vezérelni, hogy az órajel lefutó élére legyen érzékeny? (az órajelet C, az órajel negáltját a /C jelöli)",
        "image": "images/cmos-dynamic-ff.png",
        "type": "text",
        "answers": [
          {
            "text": "1."
          },
          {
            "text": "",
            "value": "/C"
          },
          {
            "text": "2."
          },
          {
            "text": "",
            "value": "C"
          },
          {
            "text": "3."
          },
          {
            "text": " ",
            "value": "C"
          },
          {
            "text": "4."
          },
          {
            "text": " ",
            "value": "/C"
          }
        ]
      },
      {
        "question": "Egészítse ki a latch kapcsolási rajzát! Alaposan nézze meg a latch vezérlő jeleit! (Q a kimenet, EN az engedélyező jel, az invertált jelet a / jelöli, azaz /Q a Q inverze)",
        "image": "images/dlatch.png",
        "type": "text",
        "answers": [
          {
            "text": "1."
          },
          {
            "text": "",
            "value": "/Q"
          },
          {
            "text": "2."
          },
          {
            "text": "",
            "value": "Q"
          },
          {
            "text": "3."
          },
          {
            "text": " ",
            "value": "EN"
          },
          {
            "text": "4."
          },
          {
            "text": " ",
            "value": "/EN"
          }
        ]
      }
    ]
  },
  {
    "id": "KHF3",
    "title": "Digitális rendszertervezés",
    "tasks": [
      {
        "question": "A HDL nyelvekre igaz, hogy",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nem programozási nyelvek",
            "value": true
          },
          {
            "text": "HDL program helyett HDL modell a helyes szakkifejezés",
            "value": true
          },
          {
            "text": "Hasonló nyelvi szerkezeteket használnak, mint a programozási nyelvek, de eltérő jelentéssel.",
            "value": true
          },
          {
            "text": "Az egymást követő utasítások sorrendben hajtódnak végre",
            "value": false
          },
          {
            "text": "programozási nyelvek",
            "value": false
          },
          {
            "text": "HDL program futtatása helyett a helyes szakkifejezés a HDL szimuláció",
            "value": true
          },
          {
            "text": "Hasonló nyelvi szerkezeteket használnak, mint a programozási nyelvek",
            "value": true
          },
          {
            "text": "Eredetileg hardverleírásra fejlesztették ki, bár más célokra is használjuk",
            "value": false
          }
        ]
      },
      {
        "question": "Az ekvivalens kapuszám (gate equivalent)",
        "type": "radio",
        "answers": [
          {
            "text": "Megadja, hogy hány standard könyvtárbeli kaput használtunk fel.",
            "value": false
          },
          {
            "text": "Megadja, hogy a digitális terv logikailag hány bemenetű NAND kapuval valósítható meg",
            "value": false
          },
          {
            "text": "Megadja, hogy a digitális terv logikailag hány kétbemenetű NAND kapuval valósítható meg",
            "value": false
          },
          {
            "text": "Megadja, hogy az elhelyezett cellák területe hányszorosa a kétbemenetű NAND kapu által elfoglalt területnek.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a szintézisre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Amennyiben a szintézis automatikusan történik, akkor emberi felügyeletet és kényszerek megadását igényli.",
            "value": true
          },
          {
            "text": "Alacsonyabb absztrakciós szintről kerülünk magasabb absztrakciós szintre",
            "value": false
          },
          {
            "text": "Csak magasabb absztrakciós szinten végzik gépi úton.",
            "value": false
          },
          {
            "text": "Minden esetben számítógépes programok végzik",
            "value": false
          },
          {
            "text": "Alacsonyabb absztrakciós szinten egyre inkább gépi úton történik",
            "value": true
          },
          {
            "text": "Történhet emberi vagy gépi úton",
            "value": true
          },
          {
            "text": "Általában a szintézishez nincs szükség emberi felügyeletre, emberi tevékenységet, beavatkozást nem igényel.",
            "value": false
          },
          {
            "text": "Magasabb absztrakciós szintről kerülünk alacsonyabb absztrakciós szintre",
            "value": true
          }
        ]
      },
      {
        "question": "A magas szintű szintézis:",
        "type": "checkbox",
        "answers": [
          {
            "text": "Vezérlés jellegű funkció esetén a feladat állapotgépek és a hozzátartozó logika megvalósítása",
            "value": true
          },
          {
            "text": "Automatikus HLS esetén az újrafelhasználás könnyebb.",
            "value": true
          },
          {
            "text": "Történhet ember által, vagy számítógépes programmal",
            "value": true
          },
          {
            "text": "Logikai kapuk kapcsolását állítja elő",
            "value": false
          },
          {
            "text": "A kimenetük RTL HDL kód",
            "value": true
          },
          {
            "text": "Vezérlés jellegű funkció esetén a feladat a mikroarchitektúra kiválasztása",
            "value": false
          },
          {
            "text": "Időzítésfüggetlen leírást generál, az ütemezés megvalósítása az alacsonyabb szintek feladata",
            "value": false
          },
          {
            "text": "A magas szintű szintézer programok többszörös tervezői produktivitást igérnek",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz SystemC-re?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Bit szinten pontosan, de késleltetésmentesen írható le a hardver működése",
            "value": false
          },
          {
            "text": "Tartalmaz egy beépített szimulációs kernelt, így a szimuláció sebessége nagy",
            "value": true
          },
          {
            "text": "Fő előny, hogy a teljes C++ eszközkészlet rendelkezésre áll",
            "value": true
          },
          {
            "text": "Mivel a C nyelven alapul, sokkal tömörebb leírást eredményez, mint a hardver leíró nyelvek.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz hard IP-re?",
        "type": "checkbox",
        "answers": [
          {
            "text": "RTL leírás, amelyet szintetizálni kell.",
            "value": false
          },
          {
            "text": "Adott félvezetőgyár adott technológiájához kötődik",
            "value": true
          },
          {
            "text": "Általában rosszabb minőségű, mint a soft IP",
            "value": false
          },
          {
            "text": "A késleltetés garantált",
            "value": true
          }
        ]
      },
      {
        "question": "Csak a fizikai tervezés befejezése után állnak rendelkezésre pontos késleltetési adatok.",
        "type": "radio",
        "answers": [
          {
            "text": "Igaz",
            "value": true
          },
          {
            "text": "Hamis",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz logikai szintézisre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nem tudja figyelembe venni az időzítési követelményeket.",
            "value": false
          },
          {
            "text": "Ha kifejtjük a hierarchiát, a szintézis gyorsabb lesz, mivel nem kell a modulokkal foglalkozni.",
            "value": false
          },
          {
            "text": "Pontos időzítési adatok állnak rendelkezésére, így a szintetizált áramkör garantáltan teljesíti az időzítési követelményeket.",
            "value": false
          },
          {
            "text": "Kimenete strukturális HDL, ami csak a cellakönyvtárbeli elemeket tartalmazza.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a modern digitális tervezésre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A tervezés egyre magasabb absztrakciós szinten történik",
            "value": true
          },
          {
            "text": "A jelenlegi bonyolultság mellett az automatikus eszközök használata kikerülhetetlen.",
            "value": true
          },
          {
            "text": "A tervezés több, egymást követő lépésből áll, amelyek során az emberi tényező szerepe egyre növekszik",
            "value": false
          },
          {
            "text": "Mivel a fizikai szintre történő leképezés a legkritikusabb, ezt mindenféleképp ember végzi el.",
            "value": false
          }
        ]
      },
      {
        "question": "A logikai szintézis befejezése után pontos késleltetési adatok állnak rendelkezésre.",
        "type": "radio",
        "answers": [
          {
            "text": "Igaz",
            "value": false
          },
          {
            "text": "Hamis",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz soft IP-re?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Technológia független.",
            "value": true
          },
          {
            "text": "Hordozható különböző gyártók között",
            "value": true
          },
          {
            "text": "RTL leírás, amelyet szintetizálni kell.",
            "value": true
          },
          {
            "text": "Sem az időzítés, sem az elfoglalt terület nem ismert előre.",
            "value": true
          }
        ]
      },
      {
        "question": "A soft IP core tetszőleges technológiára szintetizálható",
        "type": "radio",
        "answers": [
          {
            "text": "Igaz",
            "value": true
          },
          {
            "text": "Hamis",
            "value": false
          }
        ]
      },
      {
        "question": "Adja meg a digitális tervezés lépéseit, sorrendben! (Lehetőségek: Huzalozás/Programozás/Logikai szintézis/Magasszintű szintézis/Elhelyezés)",
        "type": "text",
        "answers": [
          {
            "text": "1."
          },
          {
            "text": "",
            "value": "Magasszintű szintézis"
          },
          {
            "text": "2."
          },
          {
            "text": "",
            "value": "Logikai szintézis"
          },
          {
            "text": "3."
          },
          {
            "text": " ",
            "value": "Elhelyezés"
          },
          {
            "text": "4."
          },
          {
            "text": " ",
            "value": "Huzalozás"
          }
        ]
      },
      {
        "question": "Válassza ki a digitális tervezés logikai szintjére jellemző tulajdonságot!",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "A fizikai terv",
            "value": false
          },
          {
            "text": "Logikai kapukat és összeköttetéseit definiálja",
            "value": true
          },
          {
            "text": "A funkció viselkedési szintű modellezése",
            "value": false
          },
          {
            "text": "Regisztereket, az adatátvitelt köztük definiálja",
            "value": false
          }
        ]
      },
      {
        "question": "Válassza ki a digitális tervezés áramköri szintjére jellemző tulajdonságot!",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "A fizikai terv",
            "value": true
          },
          {
            "text": "Logikai kapukat és összeköttetéseit definiálja",
            "value": false
          },
          {
            "text": "A funkció viselkedési szintű modellezése",
            "value": false
          },
          {
            "text": "Regisztereket, az adatátvitelt köztük definiálja",
            "value": false
          }
        ]
      },
      {
        "question": "Válassza ki a digitális tervezés regiszter-transzfer szintjére jellemző tulajdonságot!",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "A fizikai terv",
            "value": false
          },
          {
            "text": "Logikai kapukat és összeköttetéseit definiálja",
            "value": false
          },
          {
            "text": "A funkció viselkedési szintű modellezése",
            "value": false
          },
          {
            "text": "Regisztereket, az adatátvitelt köztük definiálja",
            "value": true
          }
        ]
      },
      {
        "question": "Válassza ki a digitális tervezés algoritmus szintjére jellemző tulajdonságot!",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "A fizikai terv",
            "value": false
          },
          {
            "text": "Logikai kapukat és összeköttetéseit definiálja",
            "value": false
          },
          {
            "text": "A funkció viselkedési szintű modellezése",
            "value": true
          },
          {
            "text": "Regisztereket, az adatátvitelt köztük definiálja",
            "value": false
          }
        ]
      },
      {
        "question": "Adja meg a logikai szintézis lépéseit, sorrendben! (Lehetőségek: Ütemezés/Hierarchia kifejtése/Leképezés makrocellára/Erőforrás-vezérlési állapot hozzárendelés/Logikai kifejezések optimalizálása/HDL beolvasás, optimalizálás/Állapotgépek konstruálása)",
        "type": "text",
        "answers": [
          {
            "text": "1."
          },
          {
            "text": "",
            "value": "HDL beolvasás, optimalizálás"
          },
          {
            "text": "2."
          },
          {
            "text": "",
            "value": "Hierarchia kifejtése"
          },
          {
            "text": "3."
          },
          {
            "text": " ",
            "value": "Logikai kifejezések optimalizálása"
          },
          {
            "text": "4."
          },
          {
            "text": " ",
            "value": "Leképezés makrocellára"
          }
        ]
      }
    ]
  },
  {
    "id": "KHF4",
    "title": "Memóriák",
    "tasks": [
      {
        "question": "Mi igaz általában a félvezető memóriák felépítésére?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A cella tranzisztorai a lehető legkisebb méretűek, hogy felületegységenként minél többet lehessen elhelyezni.",
            "value": true
          },
          {
            "text": "Az elemi cella felel egy vagy több bit információ tárolásáért.",
            "value": true
          },
          {
            "text": "A tárolás egy memória mátrixban történik.",
            "value": true
          },
          {
            "text": "Az elemi cellát a bitvonallal aktiváljuk.",
            "value": false
          },
          {
            "text": "Az elemi cellát a szóvonallal aktiváljuk.",
            "value": true
          },
          {
            "text": "A félvezető memória belső működése nem teljesen digitális.",
            "value": true
          },
          {
            "text": "A cella tranzisztorai nagyméretűek, hogy a hosszú bitvonalakat könnyen meg tudják hajtani.",
            "value": false
          },
          {
            "text": "Az elemi cella mindig egy bit információt tárol.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a pszeudó nMOS kapukra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A logikai 0 nem 0V, hanem egy ehhez közelálló, 100mV nagyságrendű feszültség.",
            "value": true
          },
          {
            "text": "Egy hárombemenetű NAND kapu 3 nMOS és egy pMOS tranzisztorral valósítható meg.",
            "value": true
          },
          {
            "text": "A pMOS tranzisztor nem vezéreljük, a gate-je tápfeszültségre van kötve.",
            "value": false
          },
          {
            "text": "Statikus fogyasztása van, ha a kimenet logikai 0, mivel ilyenkor áramút van tápfeszültség és a föld között.",
            "value": true
          },
          {
            "text": "A logikai 0 nem 0V, hanem a tápfeszültség.",
            "value": false
          },
          {
            "text": "Egy hárombemenetű NOR kapu 3 nMOS és 3 pMOS tranzisztorral valósítható meg.",
            "value": false
          },
          {
            "text": "A pMOS tranzisztor nem vezéreljük, a gate-je 0V-ra van kötve.",
            "value": true
          },
          {
            "text": "Csak dinamikus fogyasztással kell számolni.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz flash EEPROM memóriákra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A NAND elrendezés inkább háttértárolásra alkalmasabb.",
            "value": true
          },
          {
            "text": "A törlés blokkokban történik.",
            "value": true
          },
          {
            "text": "A tranzisztorok elhasználódásából eredő problémákat magasabb szinten kell kezelni.",
            "value": true
          },
          {
            "text": "A NOR elrendezésben a véletlen elérés gyorsabb, emiatt program memóriának alkalmas.",
            "value": true
          },
          {
            "text": "Az információt valójában egy MOS tranzisztor feszültsége tárolja",
            "value": false
          },
          {
            "text": "Az alagútjelenség miatt egy keskeny szigetelő rétegen az elektronok át tudnak haladni.",
            "value": true
          },
          {
            "text": "A memória programozása a küszöbfeszültség megváltoztatását jelenti.",
            "value": true
          },
          {
            "text": "SLC memóriákban a tranzisztor a kiolvasás feszültségén vagy vezet, vagy nem vezet, programozástól függően.",
            "value": true
          },
          {
            "text": "A NOR elrendezés gyakoribb, mivel a cellaméret kisebb és emiatt nagy a sűrűség.",
            "value": false
          },
          {
            "text": "NAND elrendezésben egyszerre kb. 256-512 byte-os egységekben történik a programozás",
            "value": true
          },
          {
            "text": "Tranzisztoronként $$n$$ bit tárolásához $$2n$$ jól megkülönböztethető küszöbfeszültség szint szükséges.",
            "value": false
          },
          {
            "text": "Az információt valójában egy MOS tranzisztor küszöbfeszültsége tárolja",
            "value": true
          },
          {
            "text": "Az alagútjelenség hatására nagyenergiájú elektronok jelennek meg, amelyek keresztülhaladnak a szigetelőn.",
            "value": false
          },
          {
            "text": "MLC memóriákban a tranzisztor a kiolvasás feszültségén vagy vezet, vagy nem vezet, programozástól függően.",
            "value": false
          },
          {
            "text": "A programozási/törlési ciklusok száma korlátozott.",
            "value": true
          },
          {
            "text": "Az MLC flash memória jóval több programozás-törlési ciklust visel el, ezért az élettartama nagyobb.",
            "value": false
          },
          {
            "text": "A tartalmat rendszeresen frissíteni kell.",
            "value": false
          },
          {
            "text": "Tranzisztoronként $$n$$ bit tárolásához $$2^n$$ jól megkülönböztethető küszöbfeszültség szint szükséges.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz OTP ROM memóriákra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Banki alkalmazásokban használt leginkább.",
            "value": false
          },
          {
            "text": "Az információ tároló elem egy fuse vagy antifuse.",
            "value": true
          },
          {
            "text": "Az antifuse kiégetéskor (egy nagyobb energiájú impulzus rákapcsolása után) vezet.",
            "value": true
          },
          {
            "text": "A programozás végleges, a beírt tartalom megváltoztatása lehetetlen.",
            "value": true
          },
          {
            "text": "Kikapcsoláskor elveszítik tartalmukat.",
            "value": false
          },
          {
            "text": "A fuse kiégetéskor (egy nagyobb energiájú impulzus rákapcsolása után) vezet.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy 128Gbites MLC flash memória egy tranzisztora 8 állapotot tud tárolni. Mekkora méretű lenne egy ugyanilyen technológiával készült SLC memória? A választ Gbitben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "42.67"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 40fF, a teljesen feltöltött kapacitás feszültsége 1.6V. Hány elektron van a kapacitásban? Az elektron töltése $$1.6 \\cdot 10^{-19}C$$",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "400000"
          }
        ]
      },
      {
        "question": "Mi igaz maszk programozott ROM memóriákra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Már néhány ezer példány esetén is megéri, mert olcsóbb lesz, mint bármilyen más ROM memória.",
            "value": false
          },
          {
            "text": "Tipikus használata SoC-ben a mikrokód, look-up table stb.",
            "value": true
          },
          {
            "text": "Két elrendezése is lehetséges, a NOR illetve a NAND elrendezés",
            "value": true
          },
          {
            "text": "Az információ gyártáskor, a tokozást követően kerül bele.",
            "value": false
          },
          {
            "text": "Nagyon nagy sorozatú gyártás esetén gazdaságos.",
            "value": true
          },
          {
            "text": "Az információ gyártáskor kerül bele.",
            "value": true
          },
          {
            "text": "Az információhoz egy bináris maszkot rendelnek és ezzel történik a programozás.",
            "value": false
          },
          {
            "text": "Két elrendezése is lehetséges, az OR illetve AND elrendezés",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz dinamikus RAM memóriára?",
        "type": "checkbox",
        "answers": [
          {
            "text": "DRAM írásakor sérül a cellában lévő kapacitás, ezért az írások száma korlátozott.",
            "value": false
          },
          {
            "text": "Rendszeresen frissíteni kell.",
            "value": true
          },
          {
            "text": "A kiolvasás destruktív, azaz a cellából kiolvasott információt vissza kell írni.",
            "value": true
          },
          {
            "text": "Az elemi cella 1 tranzisztort és egy tároló kapacitást tartalmaz",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz statikus RAM memóriára?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Sem az írás, sem az olvasások száma nincs korlátozva",
            "value": true
          },
          {
            "text": "Rendszeresen frissíteni kell.",
            "value": false
          },
          {
            "text": "A cella tárolási funkcióját két keresztbecsatolt inverter valósítja meg.",
            "value": true
          },
          {
            "text": "Az elemi cella 1 tranzisztort és egy tároló kapacitást tartalmaz",
            "value": false
          },
          {
            "text": "Körülbelül 10 millószor írható mindösszesen.",
            "value": false
          },
          {
            "text": "Az elemi cella 6 tranzisztort tartalmaz.",
            "value": true
          },
          {
            "text": "A tápfeszültség eltűnése után is megőrzi a tartalmát.",
            "value": false
          },
          {
            "text": "Egy bitvonalat használ csak, amelyen kiolvasáskor töltésmegosztás történik.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz tartalommal címezhető memóriákra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A működés gyors, mivel teljesen párhuzamos.",
            "value": true
          },
          {
            "text": "A tárolt adat címét keressük.",
            "value": true
          },
          {
            "text": "A keresési idő független attól, hogy a keresett adat fizikailag milyen címen található.",
            "value": true
          },
          {
            "text": "Önmagában meg lehet valósítani egy HW asszociatív tömböt",
            "value": false
          },
          {
            "text": "A keresési idő függ attól, hogy a keresett adat fizikailag milyen címen található.",
            "value": false
          },
          {
            "text": "Ha n elemet tartalmaz, a keresés log2(n) órajel alatt lezajlik.",
            "value": false
          },
          {
            "text": "Asszociatív tömb megvalósításához egy \"hagyományos memória\" is szükséges.",
            "value": true
          },
          {
            "text": "A működés gyors, mivel soronként halad végig a memória mátrixon.",
            "value": false
          }
        ]
      },
      {
        "question": "Milyen nagyságrendben van a DRAM cella információtároló kapacitása?",
        "type": "checkbox",
        "answers": [
          {
            "text": "$$10^{-15}F$$",
            "value": true
          },
          {
            "text": "$$10^{-6}F$$",
            "value": false
          },
          {
            "text": "$$10^{-9}F$$",
            "value": false
          },
          {
            "text": "$$1000F$$",
            "value": false
          },
          {
            "text": "uF",
            "value": false
          },
          {
            "text": "nF",
            "value": false
          },
          {
            "text": "fF",
            "value": true
          },
          {
            "text": "pF",
            "value": false
          }
        ]
      },
      {
        "question": "Mi lesz a bitvonalak logikai értéke, ha a WL[2] szóvonalhoz tartozó elemi cellákat szeretnénk kiolvasni? A választ egy négyjegyű, kettes számrendszerbeli számként adja meg, BL[0]..BL[3] sorrendben, pl. 1100.",
        "image": "images/nand.rom.png",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0101"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 60fF, a teljesen feltöltött kapacitás feszültsége 1.5V. Hány elektron van a kapacitásban? Az elektron töltése \\(1.6 \\cdot 10^{-19}C \\)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "562500"
          }
        ]
      },
      {
        "question": "Mi lesz a bitvonalak logikai értéke, ha a WL[2] szóvonalat aktiváltuk? A választ egy négyjegyű, kettes számrendszerbeli számként adja meg, BL[0]..BL[3] sorrendben, pl. 0101.",
        "image": "images/nor.rom.png",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1000"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 60fF, a teljesen feltöltött kapacitás feszültsége 1.4V. Mennyi idő alatt csökken a tárolókapacitás feszültsége a felére, ha a cella szivárgási árama 0.5pA? A választ ms mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "84"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 60fF, a teljesen feltöltött kapacitás feszültsége 1.7V. Hány elektron van a kapacitásban? Az elektron töltése $$1.6 \\cdot 10^{-19}C$$",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "637500"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 40fF, a teljesen feltöltött kapacitás feszültsége 1.4V. Mennyi idő alatt csökken a tárolókapacitás feszültsége a felére, ha a cella szivárgási árama 0.5pA? A választ ms mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "56"
          }
        ]
      },
      {
        "question": "Egy 256Gbites MLC flash memória egy tranzisztora 8 állapotot tud tárolni. Mekkora méretű lenne egy ugyanilyen technológiával készült SLC memória? A választ Gbitben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "85.3"
          }
        ]
      },
      {
        "question": "Egy 64Gbites MLC flash memória egy tranzisztora 8 állapotot tud tárolni. Mekkora méretű lenne egy ugyanilyen technológiával készült SLC memória? A választ Gbitben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "21.33"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 50fF, a teljesen feltöltött kapacitás feszültsége 1.5V. Mennyi idő alatt csökken a tárolókapacitás feszültsége a felére, ha a cella szivárgási árama 0.5pA? A választ ms mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "75"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 40fF, a teljesen feltöltött kapacitás feszültsége 1.4V. Hány elektron van a kapacitásban? Az elektron töltése $$1.6 \\cdot 10^{-19}C$$",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "350000"
          }
        ]
      },
      {
        "question": "Feltételezzük, hogy egy DRAM cella tárolókapacitása 60fF, a teljesen feltöltött kapacitás feszültsége 1.6V. Hány elektron van a kapacitásban? Az elektron töltése $$1.6 \\cdot 10^{-19}C$$",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "600000"
          }
        ]
      }
    ]
  },
  {
    "id": "KHF5",
    "title": "ASIC (Application Specific Integrated Circuit)",
    "tasks": [
      {
        "question": "A programozható logikai eszközök:",
        "type": "checkbox",
        "answers": [
          {
            "text": "Statikus RAM alapú konfigurálás esetén a rendszer működés közben újrakonfigurálható.",
            "value": true
          },
          {
            "text": "A konfigurálás egy maszk programozásával történik",
            "value": false
          },
          {
            "text": "Statikus RAM alapú konfigurálás esetén a rendszer indulásakor ezt fel kell tölteni pl. egy flash EEPROM-ból.",
            "value": true
          },
          {
            "text": "A logikai funkció adott, az alapkapuk, de az összeköttetés programozható.",
            "value": false
          }
        ]
      },
      {
        "question": "Kereskedelmi forgalomban szabadon kapható programozható logikai eszközökre igaz, hogy",
        "type": "checkbox",
        "answers": [
          {
            "text": "A non volatile konfiguráció minden esetben végleges, azt megváltoztatni nem lehet.",
            "value": false
          },
          {
            "text": "A nem sérülékeny (non-volatile) programozás statikus RAM alapú",
            "value": false
          },
          {
            "text": "A programozás elektromos úton történik.",
            "value": true
          },
          {
            "text": "A logikai funkció és az összeköttetés programozható.",
            "value": true
          }
        ]
      },
      {
        "question": "Az SRAM alapú konfigurálásra igaz, hogy",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nem sérülékeny",
            "value": false
          },
          {
            "text": "Előny, hogy kis területet, mindössze 6 tranzisztornyi helyet foglal.",
            "value": false
          },
          {
            "text": "Tetszőlegesen sokszor újraprogramozható",
            "value": true
          },
          {
            "text": "Nagyon nehezen visszafejthető, így titkosításra nincs szükség.",
            "value": false
          },
          {
            "text": "Sérülékeny",
            "value": true
          },
          {
            "text": "Nem igényel különleges technológiát.",
            "value": true
          },
          {
            "text": "A programozási ciklusok száma korlátozott.",
            "value": false
          },
          {
            "text": "A programozás megvalósítása nagy chip területet foglal",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz standard cellás ASIC áramkörökre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A tervezés a standard cellák elhelyezéséből és huzalozásából áll.",
            "value": true
          },
          {
            "text": "A cellakönyvtár elemei előre tervezettek.",
            "value": true
          },
          {
            "text": "A cellák magassága adott értékű, szélessége változhat a logikai funkció függvényében.",
            "value": true
          },
          {
            "text": "Standard cella esetén a cellák maszkjai nem kell legyártani, ezért a gyártás sokkal olcsóbb is lehet.",
            "value": false
          },
          {
            "text": "A cellák szélessége és magassága adott értékű",
            "value": false
          },
          {
            "text": "A cellakönyvtárat általában önkéntesek fejlesztik és tartják karban.",
            "value": false
          },
          {
            "text": "Az összeköttetések helye (táp, föld, be és kimenetek) előre rögzítettek.",
            "value": true
          },
          {
            "text": "A cellák csak alapkapukat tartalmaznak (NAND, NOR, inverter)",
            "value": true
          },
          {
            "text": "Mivel csak kapuk állnak rendelkezésre, a tervezéshez csak struktúrális (kapuszintű) leírás használható.",
            "value": false
          },
          {
            "text": "Az elrendezés szabályos: a cellákat sorokban helyezik el, majd összehuzalozzák.",
            "value": true
          },
          {
            "text": "A standard cellakönyvtárat a félvezető gyár fejleszti.",
            "value": true
          },
          {
            "text": "Minden maszkot le kell gyártani.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz gate-array áramkörökre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Sea of gates elrendezésben a chipen CMOS invertereket találunk, előre meghatározott mintázatban és pozícióban.",
            "value": false
          },
          {
            "text": "Kompromisszum eredménye, mert a felépítésből adódóan nem lehet kétbemenetű logikai kapuknál bonyolultabb kapukat készíteni.",
            "value": false
          },
          {
            "text": "Olcsóbb megoldás, mert a maszkok száma kevesebb.",
            "value": true
          },
          {
            "text": "Az áramkör végleges funkciójának kialakítása a fémezés meghatározásával történik.",
            "value": true
          },
          {
            "text": "Kompromisszum eredménye, mert sem az elkészített kapuk, sem a huzalozás nem optimális.",
            "value": true
          },
          {
            "text": "Az áramkör végleges funkciójának kialakítása fuse-ok vagy antifuse-ok kiégetésével történik.",
            "value": false
          },
          {
            "text": "Sea of gates elrendezésben a chipen n és p csatornás MOS tranzisztorokat találunk, előre meghatározott mintázatban és pozícióban.",
            "value": true
          },
          {
            "text": "A kapuk összekötésével tranzisztorokat lehet kialakítani.",
            "value": false
          },
          {
            "text": "Az áramkör végleges funkciójának kialakítása elektromos úton történik",
            "value": false
          },
          {
            "text": "Kompromisszum eredménye, mert általában nem lehet a teljes rendelkezésre álló területet kihasználni",
            "value": true
          },
          {
            "text": "A késleltetés nagyobb, mint cellás áramkör esetében, mert sem a kapuk, sem a huzalozás nem optimális.",
            "value": true
          }
        ]
      },
      {
        "question": "Strukturált ASIC",
        "type": "checkbox",
        "answers": [
          {
            "text": "Sokkal kisebb területen valósítható meg.",
            "value": true
          },
          {
            "text": "Fémezés maszkjával konfigurálható.",
            "value": true
          },
          {
            "text": "A késleltetés nagyobb lesz, mint FPGA esetén.",
            "value": false
          },
          {
            "text": "Hard IP blokkokat és konfigurálható logikát és összeköttetéseket tartalmaz.",
            "value": true
          },
          {
            "text": "Soft IP blokkokat és konfigurálható logikát és összeköttetéseket tartalmaz.",
            "value": false
          },
          {
            "text": "A megvalósított rendszer kisebb fogyasztású lesz, mint FPGA esetén.",
            "value": true
          },
          {
            "text": "A megvalósított rendszer maximális órajelfrekvenciája nagyobb lesz, mint FPGA esetén.",
            "value": true
          },
          {
            "text": "SRAM vagy EEPROM alapon konfigurálható.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz ASIC áramkörökre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Részben előre tervezettek",
            "value": true
          },
          {
            "text": "A sorozatszám igen széles határok között változhat (1 - több millió)",
            "value": true
          },
          {
            "text": "Részben előre gyártottak",
            "value": true
          },
          {
            "text": "Nagyon nagy számban gyártják",
            "value": false
          }
        ]
      },
      {
        "question": "Anti-fuse alapú konfigurálásra igaz, hogy",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nagy nehézségek árán fejthető vissza",
            "value": true
          },
          {
            "text": "Kis helyet foglal.",
            "value": true
          },
          {
            "text": "Újrakonfigurálható",
            "value": false
          },
          {
            "text": "Sérülékeny",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz komplex programozható logikai eszközre (CPLD)?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nincs szükség külső konfiguráló memóriára, a reset után rögtön működik.",
            "value": true
          },
          {
            "text": "Általában EEPROM segítségével konfigurálható.",
            "value": true
          },
          {
            "text": "A logikai függvények megvalósítása ÉS mátrixszal történik",
            "value": true
          },
          {
            "text": "A CPLD feladata általában a segédlogika előállítása.",
            "value": true
          },
          {
            "text": "A legnagyobb bonyolultságú PLD, innen ered a név is.",
            "value": false
          },
          {
            "text": "A logikai függvények megvalósítása LUT-tal történik.",
            "value": false
          },
          {
            "text": "Általában SRAM segítségével konfigurálható.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz FPGA-kra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A kombinációs logika megvalósítására LUT-ot használnak.",
            "value": true
          },
          {
            "text": "Modern FPGA-kban a logikai blokk viszonylag egyszerű felépítésű, de az áramkör sok logikai blokkot tartalmaz.",
            "value": true
          },
          {
            "text": "A konfiguráló erőforrások a chip kis részét foglalják csak el.",
            "value": false
          },
          {
            "text": "A konfigurálható logikai blokkokkal minden logika hatékonyan valósítható meg.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz SoC áramkörökre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Mivel egy chipen van a rendszer megvalósítva, a késleltetés és a fogyasztás is kedvezőbb lesz.",
            "value": true
          },
          {
            "text": "A memóriák integrálása nem mindig lehetséges, ezért gyakran pl. a DRAM-ot az SoC tetejére szerelik pl. package on package technológiával.",
            "value": true
          },
          {
            "text": "Mivel több integrált áramkör helyett 1-2 készül, a rendszer sokkal kisebb méretű is lehet.",
            "value": true
          },
          {
            "text": "Mivel az összes funkciót egy chipre integrálják, a rendszer összeszerelési költsége sokkal kisebb lesz.",
            "value": true
          },
          {
            "text": "Mivel egy chipen van a rendszer megvalósítva, kisebb méretű lesz.",
            "value": true
          },
          {
            "text": "Több kisebb helyett egy nagy integrált áramkört kell gyártani, így annak gyártási kihozatala jobb lesz.",
            "value": false
          },
          {
            "text": "Egy teljes rendszert valósítanak meg egy integrált áramkörben.",
            "value": true
          },
          {
            "text": "Az analóg áramköri részleteket külön kell megvalósítani.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy FPGA-s megvalósítású rendszert ugyanazon a technológián alapuló standard cellás ASIC-re terveznek át. Várhatóan növekszik vagy csökken a chip területe?",
        "type": "radio",
        "answers": [
          {
            "text": "nem változik",
            "value": false
          },
          {
            "text": "csökken",
            "value": true
          },
          {
            "text": "a kérdés csak a pontos technológia ismeretében dönthető el",
            "value": false
          },
          {
            "text": "növekszik",
            "value": false
          }
        ]
      },
      {
        "question": "Egy FPGA-s digitális rendszert ugyanolyan technológián alapuló standard cellás áramkörre terveznek át. Várhatóan kisebb vagy nagyobb lesz az áttervezett rendszer fogyasztása?",
        "type": "radio",
        "answers": [
          {
            "text": "növekszik",
            "value": false
          },
          {
            "text": "a kérdés csak a pontos technológia ismeretében dönthető el",
            "value": false
          },
          {
            "text": "csökken",
            "value": true
          },
          {
            "text": "nem változik",
            "value": false
          }
        ]
      },
      {
        "question": "Az alábbi állítások közül melyekben igaz az állítás és a magyarázat is?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Anti-fuse alapú konfigurálás esetén lesz a PLD a leggyorsabb, mert az anti-fuse kiégetése kevés energiát igényel.",
            "value": false
          },
          {
            "text": "Az anti-fuse alapú konfigurálás nehezen visszafejthető, mert az átégetett anti-fuse-okat kellene valamilyen módszerrel feltérképezni.",
            "value": true
          },
          {
            "text": "Az SRAM alapú konfigurálás gyakori, mivel standard CMOS technológián megvalósítható, nincs szükség speciális technológiára.",
            "value": true
          },
          {
            "text": "A flash alapú konfigurálás a legkorszerűbb, mert egy tranzisztor tárolja az információt.",
            "value": false
          }
        ]
      }
    ]
  },
  {
    "id": "KHF6",
    "title": "I/O, órajel, buszok, tápellátás",
    "tasks": [
      {
        "question": "Mi igaz oszcillátorokra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Az oszcillátornak nincs stabil állapota, periodikus jelet állít elő.",
            "value": true
          },
          {
            "text": "A kristályoszcillátor frekvenciáját az alkalmazott kristályos anyag sűrűsége szabja meg.",
            "value": false
          },
          {
            "text": "Az RC oszcillátor nagyon pontos és szinte hőmérsékletfüggetlen, ezért is alkalmazzák az integrált áramkörön belül órajel előállításra.",
            "value": false
          },
          {
            "text": "RC oszcillátorok esetén a rezgési frekvenciát ellenállások és kapacitások határozzák meg.",
            "value": true
          },
          {
            "text": "A kristályoszcillátor frekvenciáját az alkalmazott kristály mérete szabja meg.",
            "value": true
          },
          {
            "text": "Az RC oszcillátor egyszerű felépítésű és gyors indulású, ezért is alkalmazzák az integrált áramkörön belül órajel előállításra.",
            "value": true
          },
          {
            "text": "RC oszcillátorok esetén a rezgési frekvenciát induktivitások és kapacitások határozzák meg.",
            "value": false
          },
          {
            "text": "RC oszcillátorok esetén a rezgési frekvenciát ellenállások és induktivitások határozzák meg.",
            "value": false
          },
          {
            "text": "A kristályoszcillátor frekvenciáját az alkalmazott kristály anyaga szabja meg.",
            "value": false
          },
          {
            "text": "A kristályoszcillátorok jóval pontosabbak, mint az RC oszcillátorok.",
            "value": true
          },
          {
            "text": "0.1%-os pontosság 1000 ppm-nek felel meg.",
            "value": true
          }
        ]
      },
      {
        "question": "Jelölje meg az igaz állításokat az ábra alapján!",
        "image": "images/cmos.pp.png",
        "type": "checkbox",
        "answers": [
          {
            "text": "Ha En=1 és In=0, akkor a kimeneti nMOS tranzisztor vezet",
            "value": true
          },
          {
            "text": "A kapcsolási rajzon szereplő kondenzátort kívülről kell az áramkörhöz kapcsolni.",
            "value": false
          },
          {
            "text": "Ha nem engedélyezett (En=0) , akkor egyik kimeneti tranzisztor sem vezet.",
            "value": true
          },
          {
            "text": "Ha engedélyezett (En=1) akkor a kimenet a bemenet negáltja",
            "value": false
          },
          {
            "text": "Ha nem engedélyezett (En=0) , akkor mindkét kimeneti tranzisztor vezet.",
            "value": false
          },
          {
            "text": "Ha engedélyezett (En=1) akkor a kimenet megegyezik a bemenettel.",
            "value": true
          },
          {
            "text": "A kapcsolási rajzon szereplő kondenzátor az áramkör kapacitív terhelését modellezi, nem külön alkatrész.",
            "value": true
          },
          {
            "text": "Ha En=1 és In=1, akkor a kimeneti pMOS tranzisztor vezet",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a Schmitt triggerre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A komparálási feszültség akkor magasabb, ha a bemenet magas szintű.",
            "value": false
          },
          {
            "text": "Az áramkör bemenetein alkalmazzák.",
            "value": true
          },
          {
            "text": "A kimeneten lévő zajt teljesen elnyomja.",
            "value": false
          },
          {
            "text": "A Schmitt trigger egy hiszterézises inverter, a hiszterézis a tápfeszültség fele általában.",
            "value": false
          },
          {
            "text": "A Schmitt trigger egy hiszterézises inverter, a hiszterézis 100-200mV általában.",
            "value": true
          },
          {
            "text": "A komparálási feszültség akkor magasabb, ha a bemenet alacsony szintű.",
            "value": true
          },
          {
            "text": "A bemeneten alkalmazzák, zajcsökkentés céljából.",
            "value": true
          },
          {
            "text": "Az áramkör kimenetein alkalmazzák.",
            "value": false
          }
        ]
      },
      {
        "question": "Jelölje meg azokat a diódákat, amelyek a bemeneti váltakozó feszültség negatív félperiódusában vezetnek! (a \"-\" jelölt pont negatívabb, mint a másik) Ügyeljen arra, hogy ne a címkét, hanem a célkeresztet tegye a diódára!"
      },
      {
        "question": "Mi igaz soros buszokra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Az órajel általában az adatba ágyazott.",
            "value": true
          },
          {
            "text": "Az elektromos összeköttetés nagyon egyszerű.",
            "value": true
          },
          {
            "text": "A protokoll általában sokkal egyszerűbb, mint párhuzamos buszok esetében.",
            "value": false
          },
          {
            "text": "Mivel nagy sávszélességűek, ezért leginkább a memória buszok esetén alkalmaznak soros átvitelt.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy 20 ppm  pontosságú, 32.768kHz frekvenciájú kristályon alapuló valósidejű órát (RTC) tartalmazó rendszer esetén milyen gyakran kell időt szinkronizálni, ha azt szeretnénk, hogy az eltérés 1 másodpercnél kisebb legyen? A választ óra mértékegységben adja meg, 1 tizedes jegy pontossággal!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "13.9"
          }
        ]
      },
      {
        "question": "Mekkora a 230V effektív feszültségű szinuszos váltakozó feszültség amplitúdója? A választ Volt mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "325.27"
          }
        ]
      },
      {
        "question": "Mi igaz a transzformátorra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A szekunder oldali teljesítmény a nagyobb, a veszteségek miatt.",
            "value": false
          },
          {
            "text": "A két oldal feszültségének aránya a menetszámok arányával egyezik meg.",
            "value": true
          },
          {
            "text": "A feszültség növelés és csökkentés is egyaránt előfordul a gyakorlatban.",
            "value": true
          },
          {
            "text": "Csak váltakozó feszültségen működik",
            "value": true
          },
          {
            "text": "Csak a feszültség csökkentésére szolgál, feszültség növelésre alkalmatlan.",
            "value": false
          },
          {
            "text": "A két oldal áramának aránya a menetszámok arányával egyezik meg.",
            "value": false
          },
          {
            "text": "Csak egyenfeszültségen működik",
            "value": false
          },
          {
            "text": "A primer oldali teljesítmény a nagyobb, a veszteségek miatt.",
            "value": true
          }
        ]
      },
      {
        "question": "Milyen nagyságrendben van egy ember vagy más feltöltött tárgy által okozott elektrosztatikus kisülés feszültsége?",
        "type": "radio",
        "answers": [
          {
            "text": "MV",
            "value": false
          },
          {
            "text": "V",
            "value": false
          },
          {
            "text": "mV",
            "value": false
          },
          {
            "text": "kV",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz az órajelre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Kapcsolási valószínűsége 1.",
            "value": true
          },
          {
            "text": "Aszinkron digitális hálózatokban alapvető fontosságú.",
            "value": false
          },
          {
            "text": "RC ventillátorokkal állítják elő",
            "value": false
          },
          {
            "text": "A nem használt áramköri részletek órajelének kikapcsolásával sok energia takarítható meg.",
            "value": true
          },
          {
            "text": "Szinkron digitális hálózatokban alapvető fontosságú.",
            "value": true
          },
          {
            "text": "A nem használt áramköri részletek órajelének kikapcsolásával csak kevés energia takarítható meg, de sok kicsi sokra mehet.",
            "value": false
          },
          {
            "text": "Oszcillátorokkal állítják elő",
            "value": true
          },
          {
            "text": "Kapcsolási valószínűsége 0.5",
            "value": false
          }
        ]
      },
      {
        "question": "Egy 20 ppm pontosságú, 32768Hz frekvenciájú kristályon alapuló valósidejű óra maximum mennyit késik vagy siet egy nap alatt?  A választ ms mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1728"
          }
        ]
      },
      {
        "question": "Mi igaz open-drain működésre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Csak az nMOS tranzisztort vezéreljük.",
            "value": true
          },
          {
            "text": "A logika 0 szint nem 0V, hanem egy 0V környéki kis feszültség lesz.",
            "value": true
          },
          {
            "text": "Felhúzó ellenállást igényel",
            "value": true
          },
          {
            "text": "Ha kimenet logikai 1, akkor statikus fogyasztása van.",
            "value": false
          },
          {
            "text": "Csak a pMOS tranzisztort vezéreljük.",
            "value": false
          },
          {
            "text": "A logika 0 szint nem 0V, hanem a tápfeszültség fele lesz.",
            "value": false
          },
          {
            "text": "Ha kimenet alacsony szintű, statikus fogyasztása van.",
            "value": true
          }
        ]
      },
      {
        "question": "Mekkora a 220V effektív feszültségű szinuszos váltakozó feszültség amplitúdója? A választ Volt mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "311.13"
          }
        ]
      },
      {
        "question": "Mi igaz DC/DC konverzióra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Váltakozó feszültség és egyenfeszültség megváltoztatására egyaránt alkalmas.",
            "value": false
          },
          {
            "text": "Kevés alkatrésszel megvalósítható.",
            "value": true
          },
          {
            "text": "Kis méretű és jó hatásfokú.",
            "value": true
          },
          {
            "text": "Induktivitást vagy kapacitást használ energiatároló elemként.",
            "value": true
          }
        ]
      },
      {
        "question": "Egy Power-over-Ethernet rendszerben 48V-os egyenfeszültséget használnak. Mekkora lesz az eszköz feszültsége, ha az eszközig vezető  UTP kábel hossza 100 méter, egy érpár ellenállása  40 Ohm/km, az eszköz teljesítménye pedig 20W? (A tápfeszültség továbbítása 1-1 érpáron történik)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "44.4"
          }
        ]
      },
      {
        "question": "Egy Power-over-Ethernet rendszerben 48V-os egyenfeszültséget használnak. Mekkora az áramerősség a kábelen, ha az eszközig vezető  UTP kábel hossza 100 méter, egy érpár ellenállása  50 Ohm/km, az eszköz teljesítménye pedig 20 W? (A tápfeszültség továbbítása 1-1 érpáron történik) A választ mA mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "460.92"
          }
        ]
      },
      {
        "question": "Egy Power-over-Ethernet rendszerben 48V-os egyenfeszültséget használnak. Mekkora az áramerősség a kábelen, ha az eszközig vezető  UTP kábel hossza 100 méter, egy érpár ellenállása  50 Ohm/km, az eszköz teljesítménye pedig 25 W? (A tápfeszültség továbbítása 1-1 érpáron történik) A választ mA mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "594"
          }
        ]
      },
      {
        "question": "Egy 5 ppm pontosságú, 32768Hz frekvenciájú kristályon alapuló valósidejű óra maximum mennyit késik vagy siet egy nap alatt?  A választ ms mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "432"
          }
        ]
      },
      {
        "question": "Egy 15 ppm pontosságú, 32768Hz frekvenciájú kristályon alapuló valósidejű óra maximum mennyit késik vagy siet egy nap alatt?  A választ ms mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1296"
          }
        ]
      },
      {
        "question": "Jelölje meg azokat a diódákat, amelyek a bemeneti váltakozó feszültség negatív félperiódusában vezetnek! (a '-' jelölt pont negatívabb, mint a másik)",
        "image": "images/graetz.png",
        "type": "checkbox",
        "answers": [
          {
            "text": "1. dióda",
            "value": false
          },
          {
            "text": "2. dióda",
            "value": true
          },
          {
            "text": "3. dióda",
            "value": true
          },
          {
            "text": "4. dióda",
            "value": false
          }
        ]
      }
    ]
  },
  {
    "id": "KHF7",
    "title": "Érzékelők (szenzorok)",
    "tasks": [
      {
        "question": "Mi igaz CMOS (APS) képérzékelőkre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A feldolgozó elektronika csökkenti a kitöltést (fill-factor)",
            "value": true
          },
          {
            "text": "Az érzékelés elve egy megvilágított pn átmenet záróirányú árama",
            "value": true
          },
          {
            "text": "A sötétáram jóval kisebb, mint a fotoáram.",
            "value": true
          },
          {
            "text": "A fotoáram a megvilágítással exponenciálisan arányos",
            "value": false
          },
          {
            "text": "A fotoáram a megvilágítással közel egyenesen arányos",
            "value": true
          },
          {
            "text": "Az érzékelés elve egy megvilágított pn átmenet nyitóirányú árama",
            "value": false
          },
          {
            "text": "A sötétáram és fotoáram gyakorlatilag hasonló nagyságrendű.",
            "value": false
          },
          {
            "text": "A kiolvasás sorról sorra történik",
            "value": true
          }
        ]
      },
      {
        "question": "Párosítsa össze a megadott szenzor (BOSCH BMP388) adatait!"
      },
      {
        "question": "Mi igaz a megadott egyenlettel modellezett feszültségkimenetű hőmérsékletmérő szenzor transzfer karakterisztikájára? (a hőmérséklet Celsius fokban értendő) $$V= 0.69 - 0.0015T$$",
        "type": "checkbox",
        "answers": [
          {
            "text": "Nagyobb feszültséghez alacsonyabb hőmérséklet tartozik.",
            "value": true
          },
          {
            "text": "A szenzor lineáris",
            "value": true
          },
          {
            "text": "Az offszet 0.015V",
            "value": false
          },
          {
            "text": "Az érzékenység 690mV/°C",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz általánosságban egy szenzor transzfer karakterisztikájára?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A (kimeneti) offszet a gerjesztetlen bemenet esetén a kimeneti jel értéke.",
            "value": true
          },
          {
            "text": "A kimeneti teljes tartomány a bemeneti teljes tartomány pár százszorosa",
            "value": false
          },
          {
            "text": "Az érzékenység a transzfer karakterisztika adott pontban vett meredeksége (deriváltja)",
            "value": true
          },
          {
            "text": "Lineáris",
            "value": false
          }
        ]
      },
      {
        "question": "Melyek az intelligens szenzorokkal szemben elvárt legfontosabb követelmények?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Egyedi beállíthatóság",
            "value": false
          },
          {
            "text": "Hőmérsékletfüggetlenség",
            "value": false
          },
          {
            "text": "Tömeggyárthatóság",
            "value": true
          },
          {
            "text": "CMOS kompatibilitás",
            "value": true
          },
          {
            "text": "Lineáris karakterisztika",
            "value": false
          },
          {
            "text": "Lehetőség szerint minimális külső alkatrész",
            "value": true
          }
        ]
      },
      {
        "question": "Mi a fő különbség a CCD illetve a CMOS (APS) képérzékelők között?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A CCD kiolvasása gyors, az egyes pixelek elérése véletlen.",
            "value": false
          },
          {
            "text": "A CCD érzékelők kvantumhatásfoka és kitöltési tényezője nagyobb, mint a CMOS érzékelőké.",
            "value": true
          },
          {
            "text": "CCD esetén a megvilágítással arányos töltés keletkezik, amely MOS kapacitásokkal mozgatható.",
            "value": true
          },
          {
            "text": "A CMOS kisebb fogyasztású",
            "value": true
          },
          {
            "text": "CCD esetén a teljes rendszert egy chipre tudják integrálni.",
            "value": false
          },
          {
            "text": "CMOS esetben a kiolvasás gyorsabb.",
            "value": true
          },
          {
            "text": "A CCD a félvezetőkben fény hatására történő generáció jelenségén alapul, míg a CMOS érzékelő tranzisztorokból áll.",
            "value": false
          },
          {
            "text": "A CMOS (APS) érzékelő könnyebben gyártható, mivel ugyanazzal a technológiával készül mint az integrált áramkör.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a megadott egyenlettel modellezett feszültségkimenetű hőmérsékletmérő szenzor transzfer karakterisztikájára? (a hőmérséklet Celsius fokban értendő) $$V= 0.7 - 0.002T$$",
        "type": "checkbox",
        "answers": [
          {
            "text": "Az érzékenység abszolút értéke 2mV/°C",
            "value": true
          },
          {
            "text": "Az offszet 0.7V",
            "value": true
          },
          {
            "text": "Nagyobb feszültséghez magasabb hőmérséklet tartozik.",
            "value": false
          },
          {
            "text": "A szenzor nemlineáris",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz szenzorokra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Az aktív szenzorok a mérendő mennyiség energiáját alakítják át.",
            "value": false
          },
          {
            "text": "A szenzorok általában elektromos jellé alakítják a mérendő mennyiséget.",
            "value": true
          },
          {
            "text": "A direkt szenzorok a mérendő mennyiséget közvetlenül alakítják elektromos jellé",
            "value": true
          },
          {
            "text": "Abszolút szenzor esetén a kimenet a mért fizikai mennyiség abszolút értéke",
            "value": false
          },
          {
            "text": "Relatív szenzor esetén a kimenet a mért fizikai mennyiség és egy adott referencia különbsége",
            "value": true
          },
          {
            "text": "Komplex szenzorokban több, egymást követő átalakítás történik",
            "value": true
          },
          {
            "text": "A szenzorok mindig elektromos jellé alakítják a mérendő mennyiséget.",
            "value": false
          },
          {
            "text": "A passzív szenzorok a mérendő mennyiség energiáját alakítják át, külön energiaellátást nem igényelnek.",
            "value": true
          }
        ]
      },
      {
        "question": "Egy modernebb (kisebb MFS) technológiára áttérve melyik paramétere fog javulni egy CMOS képérzékelőnek?",
        "type": "radio",
        "answers": [
          {
            "text": "Kvantum hatásfok.",
            "value": false
          },
          {
            "text": "Jel/zaj viszony.",
            "value": false
          },
          {
            "text": "Kitöltés (fill factor).",
            "value": true
          },
          {
            "text": "A felsoroltak közül egyik sem.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz pn átmenet (dióda) hőmérsékletfüggésére?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Adott nyitó feszültség mellett a pn átmenet árama kb. 2mA-t csökken 1°C hőmérséketnövekedés hatására.",
            "value": false
          },
          {
            "text": "Széles hőmérséklettartományban lineárisnak tekinthető.",
            "value": true
          },
          {
            "text": "Adott nyitóirányú áram mellett a pn átmenet feszültsége kb. 2mV-ot nő 1°C hőmérséketnövekedés hatására.",
            "value": false
          },
          {
            "text": "Lehetővé teszi, hogy megmérhessük a chip belső hőmérsékletét közvetlenül.",
            "value": true
          },
          {
            "text": "Adott nyitóirányú áram mellett a pn átmenet feszültsége kb. 2mV-ot csökken 1K hőmérsékletnövekedés hatására.",
            "value": true
          },
          {
            "text": "Meglehetősen nemlineáris, korrekció szükséges",
            "value": false
          },
          {
            "text": "Adott nyitó feszültség mellett a pn átmenet árama kb. 2mA-t növekszik 1°C hőmérséketnövekedés hatására.",
            "value": false
          }
        ]
      },
      {
        "question": "A következő táblázat egy hőmérsékletmérő szenzor feszültségét tartalmazza, a hőmérséklet függvényében.",
        "image": "images/temp-sensor.png",
        "type": "text",
        "answers": [
          {
            "text": "Lineáris közelítést alkalmazva határozza meg a szenzor érzékenységét! Az eredményt mV/K mértékegységben adja meg, előjelhelyesen!"
          },
          {
            "text": "",
            "value": "-1.903"
          },
          {
            "text": "Elsőfokú közelítést alkalmazva, mekkora lesz a szenzor feszültsége 140 °C hőmérsékleten? A választ V mértékegységben adja meg!"
          },
          {
            "text": "",
            "value": "0.4374"
          },
          {
            "text": "Lineáris közelítést alkalmazva határozza meg a szenzor offsetjét! Az eredményt V mértékegységben adja meg, előjelhelyesen!"
          },
          {
            "text": "",
            "value": "0.7048"
          },
          {
            "text": "Másodfokú polinommal történő közelítést alkalmazva mekkora lesz a maximális eltérés a mért pontokban? A választ mV mértékegységben adja meg!"
          },
          {
            "text": "",
            "value": "1.2437"
          },
          {
            "text": "Lineáris közelítést alkalmazva, mekkora lesz a szenzor hőmérséklete, ha 0.69 feszültséget mértünk? A választ °C mértékegységben adja meg!"
          },
          {
            "text": "",
            "value": "7.8"
          },
          {
            "text": "Elsőfokú közelítést alkalmazva, mekkora lesz a szenzor feszültsége -25 °C hőmérsékleten? A választ V mértékegységben adja meg!"
          },
          {
            "text": "",
            "value": "0.7523"
          },
          {
            "text": "Másodfokú polinommal történő közelítést alkalmazva, mekkora lesz a szenzor feszültsége 70 °C hőmérsékleten? A választ V mértékegységben adja meg!"
          },
          {
            "text": "",
            "value": "0.5550"
          },
          {
            "text": "Lineáris közelítést alkalmazva mekkora lesz a maximális eltérés a mért pontokban? A választ mV mértékegységben adja meg!"
          },
          {
            "text": "",
            "value": "2.6097"
          }
        ]
      },
      {
        "question": "A megadott szenzor (BOSCH BMP388) milyen típusú adatára vonatkozik a következő mennyiség? 300..1250hPa",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Hosszú távú stabilitás",
            "value": false
          },
          {
            "text": "Legnagyobb mintavételezési frekvencia",
            "value": false
          },
          {
            "text": "Bemeneti érzékelési tartomány",
            "value": true
          },
          {
            "text": "Pontosság",
            "value": false
          }
        ]
      },
      {
        "question": "A megadott szenzor (BOSCH BMP388) milyen típusú adatára vonatkozik a következő mennyiség? +- 0,4hPa",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Hosszú távú stabilitás",
            "value": false
          },
          {
            "text": "Legnagyobb mintavételezési frekvencia",
            "value": false
          },
          {
            "text": "Bemeneti érzékelési tartomány",
            "value": false
          },
          {
            "text": "Pontosság",
            "value": true
          }
        ]
      },
      {
        "question": "A megadott szenzor (BOSCH BMP388) milyen típusú adatára vonatkozik a következő mennyiség? +-0,33hPa (12 hónapra)",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Hosszú távú stabilitás",
            "value": true
          },
          {
            "text": "Legnagyobb mintavételezési frekvencia",
            "value": false
          },
          {
            "text": "Bemeneti érzékelési tartomány",
            "value": false
          },
          {
            "text": "Pontosság",
            "value": false
          }
        ]
      },
      {
        "question": "A megadott szenzor (BOSCH BMP388) milyen típusú adatára vonatkozik a következő mennyiség? 200Hz",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Hosszú távú stabilitás",
            "value": false
          },
          {
            "text": "Legnagyobb mintavételezési frekvencia",
            "value": true
          },
          {
            "text": "Bemeneti érzékelési tartomány",
            "value": false
          },
          {
            "text": "Pontosság",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik fizikai jelenség, elv tartozik a következő érzékelő gyakorlati megvalósításához? Mágneses tér érzékelése",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Piezorezisztivitás",
            "value": false
          },
          {
            "text": "Mozgó tömeg elmozdulása",
            "value": false
          },
          {
            "text": "Hall-effektus",
            "value": true
          },
          {
            "text": "Közeli infravörös fény reflexiója",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik fizikai jelenség, elv tartozik a következő érzékelő gyakorlati megvalósításához? Membrános nyomásérzékelés",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Piezorezisztivitás",
            "value": true
          },
          {
            "text": "Mozgó tömeg elmozdulása",
            "value": false
          },
          {
            "text": "Hall-effektus",
            "value": false
          },
          {
            "text": "Közeli infravörös fény reflexiója",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik fizikai jelenség, elv tartozik a következő érzékelő gyakorlati megvalósításához? Közelség érzékelés (proximity)",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Piezorezisztivitás",
            "value": false
          },
          {
            "text": "Mozgó tömeg elmozdulása",
            "value": false
          },
          {
            "text": "Hall-effektus",
            "value": false
          },
          {
            "text": "Közeli infravörös fény reflexiója",
            "value": true
          }
        ]
      },
      {
        "question": "Melyik fizikai jelenség, elv tartozik a következő érzékelő gyakorlati megvalósításához? Gyorsulásmérő",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Piezorezisztivitás",
            "value": false
          },
          {
            "text": "Mozgó tömeg elmozdulása",
            "value": true
          },
          {
            "text": "Hall-effektus",
            "value": false
          },
          {
            "text": "Közeli infravörös fény reflexiója",
            "value": false
          }
        ]
      }
    ]
  },
  {
    "id": "KHF8",
    "title": "Fényemittáló diódák, kijelzők, érintőképernyők",
    "tasks": [
      {
        "question": "Mi igaz LCD kijelzőkre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A pixel a feszültség bekapcsolásával sötétíthető el.",
            "value": true
          },
          {
            "text": "Az elsötétítés a gyorsabb folyamat, mert a molekulák a térerősség irányába fordulnak.",
            "value": true
          },
          {
            "text": "A pixelek soronként címezhetők",
            "value": false
          },
          {
            "text": "Passzív mátrixú kijelzőben tranzisztorokat használnak az egyes pixelek kapcsolásához.",
            "value": false
          },
          {
            "text": "Aktív mátrixú kijelzőben tranzisztorokat használnak az egyes pixelek kapcsolásához.",
            "value": true
          },
          {
            "text": "A pixelek egyesével címezhetők.",
            "value": true
          },
          {
            "text": "A pixel a feszültség kikapcsolásával sötétíthető el.",
            "value": false
          },
          {
            "text": "Az elsötétítés lassabb folyamat, mert a molekulák a térerősség irányába fordulnak.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi a különbség TFT és AMOLED kijelzők között?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Az LCD kijelzők fogyasztása független a képtartalomtól.",
            "value": true
          },
          {
            "text": "Az LCD kijelzők hajlékonyabbak.",
            "value": false
          },
          {
            "text": "Az LCD kijelzők betekintési szöge kedvezőbb.",
            "value": false
          },
          {
            "text": "AMOLED kijelzők esetén nincs háttérvilágítás.",
            "value": true
          },
          {
            "text": "LCD esetén nincs háttérvilágítás.",
            "value": false
          },
          {
            "text": "Az AMOLED kijelzők gyorsabbak.",
            "value": true
          },
          {
            "text": "AMOLED kijelzők fogyasztása függ a képtartalomtól.",
            "value": true
          },
          {
            "text": "AMOLED kijelzők kontrasztaránya jobb.",
            "value": true
          }
        ]
      },
      {
        "question": "Hogyan állítanak elő fehér fényű LED fényforrásokat?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Piros vagy infravörös LED és fényporok alkalmazásával",
            "value": false
          },
          {
            "text": "A tiltott sávszélesség megfelelő beállításával.",
            "value": false
          },
          {
            "text": "vörös, zöld és kék LED-ek alkalmazásával",
            "value": true
          },
          {
            "text": "Kék vagy ultraviola LED és fényporok alkalmazásával",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a fényáramra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Mértékegysége a lumen (lm)",
            "value": true
          },
          {
            "text": "Mértékegysége a W.",
            "value": false
          },
          {
            "text": "Mértékegysége a lux [lx]",
            "value": false
          },
          {
            "text": "Az emberi szem által érzékelt fény teljesítménye.",
            "value": true
          }
        ]
      },
      {
        "question": "Egy 10%-os kitöltésű oldal esetén az AMOLED e-book olvasó kijelzőjének fogyasztása 100 mW. Mekkora lesz a fogyasztás, ha invertálva (fehér betűk fekete háttéren) jelenítjük meg az oldalt?  A választ mW mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "11.11"
          }
        ]
      },
      {
        "question": "A megadott karakterisztikájú LED-et 2.5V tápfeszültségről szeretnénk 20mA árammal működtetni. Mekkora legyen az előtét ellenállás?",
        "image": "images/chipled.png",
        "type": "radio",
        "answers": [
          {
            "text": "0.125kΩ",
            "value": false
          },
          {
            "text": "8.00kΩ",
            "value": false
          },
          {
            "text": "5.00 kΩ",
            "value": false
          },
          {
            "text": "0.0250kΩ",
            "value": true
          }
        ]
      },
      {
        "question": "Milyen memória áramkörhöz hasonlít az aktív mátrix (TFT) kijelző működési elve?",
        "type": "radio",
        "answers": [
          {
            "text": "SRAM",
            "value": false
          },
          {
            "text": "DRAM",
            "value": true
          },
          {
            "text": "FeRAM",
            "value": false
          },
          {
            "text": "Flash",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz a LED-re?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Karakterisztikája lineáris.",
            "value": false
          },
          {
            "text": "Elektromos (áramköri) szempontból nincs különbség a félvezető dióda és a LED között.",
            "value": true
          },
          {
            "text": "pn átmenet, amely nyitóirányú áram hatására fényt bocsát ki.",
            "value": true
          },
          {
            "text": "pn átmenet, amely záróirányú feszültség hatására fényt bocsát ki.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy OHL00485 sorozatú LED-et 3.3V-os feszültségről működtetünk egy 275Ω-os előtétellenállás segítségével. A LED árama 2mA. Milyen színű a LED?  A LED karakterisztikája:",
        "image": "images/ohl00485.png",
        "type": "radio",
        "answers": [
          {
            "text": "kék",
            "value": true
          },
          {
            "text": "piros",
            "value": false
          },
          {
            "text": "zöld",
            "value": false
          },
          {
            "text": "ahány éves a kapitány.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy OHL00485 sorozatú LED-et 5V-os feszültségről működtetünk egy 200Ω-os előtétellenállás segítségével. A LED árama 10mA. Milyen színű a LED?  A LED karakterisztikája:",
        "image": "images/ohl00485.png",
        "type": "radio",
        "answers": [
          {
            "text": "kék",
            "value": false
          },
          {
            "text": "fehér",
            "value": false
          },
          {
            "text": "zöld",
            "value": true
          },
          {
            "text": "ahány éves a kapitány.",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik állítás igaz LED fényforrásokra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A LED-ek alkalmazásának legfőbb oka a gyors ki és bekapcsolási idejük.",
            "value": false
          },
          {
            "text": "Noha a LED-ek fényhasznosítása minden más fényforrásnál kedvezőbb, a várható élettartam azonban alacsony.",
            "value": false
          },
          {
            "text": "A LED fényforrások fényhasznosítása minden más fényforrásnál kedvezőbb.",
            "value": true
          },
          {
            "text": "A LED-ek várható élettartama általában meghaladja a más elvű fényforrásokat.",
            "value": true
          }
        ]
      },
      {
        "question": "Egy 20%-os kitöltésű oldal esetén az AMOLED e-book olvasó kijelzőjének fogyasztása 200 mW. Mekkora lesz a fogyasztás, ha invertálva (fehér betűk fekete háttéren) jelenítjük meg az oldalt?  A választ mW mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "50"
          }
        ]
      },
      {
        "question": "A képen látható LED szalagon egy szegmensben 3 db LED és egy 300Ω-os ellenállás van sorba kapcsolva. A szalagon 36 LED van lábanként(foot), egy szegmens pedig 1” (inch) hosszú, a fogyasztás 2.88W/láb, a tápfeszültség 12V.  Mekkora egy LED üzemi árama? (az adatokból kiszámítható!)  Az eredményt mA-ben adja meg!",
        "image": "images/ledstrip.png",
        "noFilter": true,
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "20"
          }
        ]
      },
      {
        "question": "A megadott karakterisztikájú LED-et 5V tápfeszültségről szeretnénk 1mA árammal működtetni. Mekkora legyen az előtét ellenállás?",
        "image": "images/chipled.png",
        "type": "radio",
        "answers": [
          {
            "text": "2.78kΩ",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          },
          {
            "text": "3.20kΩ",
            "value": true
          },
          {
            "text": "9.00 kΩ",
            "value": false
          }
        ]
      },
      {
        "question": "A megadott karakterisztikájú LED-et 4.75V tápfeszültségről szeretnénk 20mA árammal működtetni. Mekkora legyen az előtét ellenállás?",
        "image": "images/chipled_2.png",
        "type": "radio",
        "answers": [
          {
            "text": "9.50 kΩ",
            "value": false
          },
          {
            "text": "0.138kΩ",
            "value": true
          },
          {
            "text": "0.238kΩ",
            "value": false
          },
          {
            "text": "4.21kΩ",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Kapacitásváltozáson alapul",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": false
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": true
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Szennyeződésre kevésbé érzékeny",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": true
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": false
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Indukción alapul",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": false
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": false
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": true
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Multitouch",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": false
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": true
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Csak egyszeres érintés detektálható",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": true
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": false
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Ipari környezetbe ajánlott",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": true
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": false
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          }
        ]
      },
      {
        "question": "Melyik érintőképernyő technológiára vonatkozik a következő tulajdonság? Ellenállásváltozáson alapul",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Rezisztív érintőképernyő",
            "value": true
          },
          {
            "text": "Kapacitív érintőképernyő",
            "value": false
          },
          {
            "text": "Mindkettő",
            "value": false
          },
          {
            "text": "Egyik sem",
            "value": false
          }
        ]
      }
    ]
  },
  {
    "id": "KHF9",
    "title": "AD/DA átalakítás",
    "tasks": [
      {
        "question": "Rakja sorrendbe az A/D átalakítás lépéseit!"
      },
      {
        "question": "Mi igaz szigma-delta AD átalakítókra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Egy impulzussorozatot állít elő, amelynek kitöltési tényezője arányos a bemeneti jellel.",
            "value": true
          },
          {
            "text": "Digitális áramkörökkel könnyen megvalósítható.",
            "value": true
          },
          {
            "text": "Nagy effektív bitszám érhető el.",
            "value": true
          },
          {
            "text": "Pontos alkatrészeket igényel.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz DA konverterekre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A párhuzamos átalakítás esetén egy párhuzamosan kapcsolt ellenálláslánccal történik a feszültség előállítása.",
            "value": false
          },
          {
            "text": "Szorzó típusú DA konverternek két bemenete van, a kimenet a bemenő jelek szorzatával arányos.",
            "value": false
          },
          {
            "text": "A töltésmegoszláson alapuló DA előnye, hogy egyforma kapacitásokat könnyű készíteni.",
            "value": true
          },
          {
            "text": "A létrahálózatos átalakítók kevesebb alkatrészt tartalmaznak, mint a direkt átalakító.",
            "value": true
          },
          {
            "text": "A párhuzamos átalakítás esetén egy sorosan kapcsolt ellenálláslánccal történik a feszültség előállítása.",
            "value": true
          },
          {
            "text": "Szorzó típusú DA konverter referencia feszültsége változtatható.",
            "value": true
          },
          {
            "text": "A direkt átalakítás hátránya, hogy sok és pontos alkatrészt igényel.",
            "value": true
          },
          {
            "text": "A kapcsolt áramokon alapuló DA átalakítás nagy sebességű és könnyen megvalósítható integrált áramkörökben.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz A/D architektúrákra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A sigma-delta átalakítók gyorsak, de bitszámuk viszonylag kicsi.",
            "value": false
          },
          {
            "text": "SAR architektúra mint bitszámban, mind sebességben közepes",
            "value": true
          },
          {
            "text": "A pipeline architektúrájú konverterek a leggyorsabbak",
            "value": true
          },
          {
            "text": "Vannak olyan AD architektúrák, amelyek egyszerre gyorsak és nagyfelbontásúak, ezek azonban drágák.",
            "value": false
          },
          {
            "text": "Szigma-delta átalakítókkal érhető el a legnagyobb (bitben mért) felbontás.",
            "value": true
          },
          {
            "text": "Az architektúra választás kompromisszum az átalakítás sebessége és felbontása között.",
            "value": true
          },
          {
            "text": "SAR átalakítóval érhető el a legnagyobb mintavételezési frekvencia",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz az anti-aliasing szűrőre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Feladata a jelből eltávolítani az esetleges nagyfrekvenciás komponenseket.",
            "value": true
          },
          {
            "text": "Felüláteresztő szűrő",
            "value": false
          },
          {
            "text": "Feladata a jelből eltávolítani a zajt.",
            "value": false
          },
          {
            "text": "Aluláteresztő szűrő.",
            "value": true
          }
        ]
      },
      {
        "question": "Legalább hány biten kell mintavételeznünk egy jelet, hogy a kvantálás jel/zaj viszonya 85 dB-nél jobb legyen? A választ bitben adja meg!",
        "type": "radio",
        "answers": [
          {
            "text": "14.00",
            "value": true
          },
          {
            "text": "13.00",
            "value": false
          },
          {
            "text": "A pontos A/D típustól függ.",
            "value": false
          },
          {
            "text": "13.83",
            "value": false
          }
        ]
      },
      {
        "question": "Egy unipoláris, 10 bites A/D konverter referencia feszültsége 4.096V. Milyen bit tartozik a bemenetre kapcsolt 3 V feszültséghez?",
        "type": "radio",
        "answers": [
          {
            "text": "750",
            "value": true
          },
          {
            "text": "375",
            "value": false
          },
          {
            "text": "732",
            "value": false
          },
          {
            "text": "44",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora a jel és a zaj teljesítményének (energiájának) aránya, ha a jel zaj viszony 40 dB?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "10000"
          }
        ]
      },
      {
        "question": "Mekkora az 8 bites A/D konverter LSB-je, ha az átalakító bipoláris és a referencia feszültsége 2.048V? A választ mV mértékegységben adja meg!",
        "type": "radio",
        "answers": [
          {
            "text": "16.0000",
            "value": true
          },
          {
            "text": "8.0000",
            "value": false
          }
        ]
      },
      {
        "question": "Egy unipoláris, 10 bites A/D konverter referencia feszültsége 4.096V. Milyen bit tartozik a bemenetre kapcsolt 3.9 V feszültséghez?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "975"
          }
        ]
      },
      {
        "question": "Mi igaz flash AD konverterre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A komparátorok kimenete kettes komplemens kód",
            "value": false
          },
          {
            "text": "8 bites felbontáshoz 255 komparátor szükséges",
            "value": true
          },
          {
            "text": "A referencia feszültséget egy áramosztó kapacitás lánccal egyenlő közökre osztjuk.",
            "value": false
          },
          {
            "text": "Az átalakítás egy lépésben történik",
            "value": true
          },
          {
            "text": "A komparátorok kimenete ún. termometrikus kód.",
            "value": true
          },
          {
            "text": "n bites átalakító esetén az átalakítás n+1 lépésben történik.",
            "value": false
          },
          {
            "text": "A referencia feszültséget egy feszültségosztó ellenállás lánccal egyenlő közökre osztjuk.",
            "value": true
          },
          {
            "text": "8 bites felbontáshoz 8 komparátor szükséges",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz mintavételezésre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "A diszkrét jelsorozat annál jobban közelíti az eredeti jelet, minél nagyobb a mintavételi frekvencia.",
            "value": true
          },
          {
            "text": "Ha a bemeneti jel spektruma korlátos, akkor a spektrum maximális frekvenciájával kell mintavételezni.",
            "value": false
          },
          {
            "text": "Ha a mintavételi frekvencia növekszik, akkor az egy másodperc alatt feldolgozandó digitális minták száma, azaz a számításigény is növekszik.",
            "value": true
          },
          {
            "text": "A diszkrét jelek mintavételezésével helyre tudjuk állítani a folytonos jel spektrumát.",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 8 bites A/D konverter full scale-je, ha az átalakító unipoláris és a referencia feszültsége 1.024? A választ V mértékegységben adja meg, lehetőleg pontosan!",
        "type": "radio",
        "answers": [
          {
            "text": "1.0200",
            "value": true
          },
          {
            "text": "1.0240",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 12 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 2.048? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.5"
          }
        ]
      },
      {
        "question": "Mekkora az 14 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 1.024? A választ μV  (mikrovolt) mértékegységben adja meg!",
        "type": "radio",
        "answers": [
          {
            "text": "125.0000",
            "value": false
          },
          {
            "text": "62.5000",
            "value": true
          }
        ]
      },
      {
        "question": "Mekkora a jel és a zaj effektív feszültségének aránya, ha a jel zaj viszony 20 dB?",
        "type": "checkbox",
        "answers": [
          {
            "text": "10.00",
            "value": true
          },
          {
            "text": "100.00",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora a jel és a zaj effektív feszültségének aránya, ha a jel zaj viszony 100 dB?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "100000"
          }
        ]
      },
      {
        "question": "Mekkora a jel és a zaj teljesítményének (energiájának) aránya, ha a jel zaj viszony 20 dB?",
        "type": "radio",
        "answers": [
          {
            "text": "100.00",
            "value": true
          },
          {
            "text": "10.00",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 12 bites A/D konverter LSB-je, ha az átalakító bipoláris és a referencia feszültsége 2.048V? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1"
          }
        ]
      },
      {
        "question": "Egy unipoláris, 10 bites A/D konverter referencia feszültsége 4.096V. Mekkora feszültség van a bemeneten, ha az AD konverter regiszterében 62 érték van?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.248"
          }
        ]
      },
      {
        "question": "Legalább mekkora mintavételezési frekvenciával kell mintavételeznünk egy jelet, amely spektruma 300 Hz -3.4 kHz között van?",
        "type": "radio",
        "answers": [
          {
            "text": "600.00 kHz",
            "value": false
          },
          {
            "text": "6.20 kHz",
            "value": false
          },
          {
            "text": "6.80 kHz",
            "value": true
          },
          {
            "text": "22.67 kHz",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 16 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 2.048? A választ μV  (mikrovolt) mértékegységben adja meg!",
        "type": "radio",
        "answers": [
          {
            "text": "62.5000",
            "value": false
          },
          {
            "text": "31.2500",
            "value": true
          }
        ]
      },
      {
        "question": "Egy unipoláris, 12 bites A/D konverter referencia feszültsége 4.096V. Mekkora feszültség van a bemeneten, ha az AD konverter regiszterében 3932 érték van?",
        "type": "radio",
        "answers": [
          {
            "text": "0.9600V",
            "value": false
          },
          {
            "text": "3.932V",
            "value": true
          },
          {
            "text": "7.864V",
            "value": false
          },
          {
            "text": "4.026V",
            "value": false
          }
        ]
      },
      {
        "question": "Egy unipoláris, 16 bites A/D konverter referencia feszültsége 4.096V. Milyen bit tartozik a bemenetre kapcsolt 3.2 V feszültséghez?",
        "type": "radio",
        "answers": [
          {
            "text": "781",
            "value": false
          },
          {
            "text": "25600",
            "value": false
          },
          {
            "text": "51200",
            "value": true
          },
          {
            "text": "328",
            "value": false
          }
        ]
      },
      {
        "question": "Egy 12 bites A/D konverterre SINAD= 66 dB. Mekkora az effektív bitszám? (a választ legalább 2 tizedes jegyre adja meg!)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "10.6710963"
          }
        ]
      },
      {
        "question": "Egy 12 bites D/A átalakító referencia feszültsége 4.096V.  Nagypontosságú voltmérővel a 0 kódra 0.5 mV feszültséget, a 4095 kódra pedig 4.13625V feszültséget mérünk.  Mekkora az erősítés?  A választ legalább 3 tizedes jegy pontossággal adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1.00995116"
          }
        ]
      },
      {
        "question": "Mekkora az 10 bites A/D konverter LSB-je, ha az átalakító bipoláris és a referencia feszültsége 1.024V? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "2"
          }
        ]
      },
      {
        "question": "Egy 14 bites D/A átalakító referencia feszültsége 4.096V.  Nagypontosságú voltmérővel a 0 kódra 0.3 mV feszültséget, a 4095 kódra pedig 4.13625V feszültséget mérünk.  Mekkora az offszet?  A választ mV-ban adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.3"
          }
        ]
      },
      {
        "question": "Mekkora az 10 bites A/D konverter full scale-je, ha az átalakító unipoláris és a referencia feszültsége 1.024? A választ V mértékegységben adja meg, lehetőleg pontosan!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1.023"
          }
        ]
      },
      {
        "question": "Mekkora az 18 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 1.024V? A választ μV  (mikrovolt) mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "3.90625"
          }
        ]
      },
      {
        "question": "Mekkora a jel és a zaj teljesítményének (energiájának) aránya, ha a jel zaj viszony 42 dB?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "15848.93192461114"
          }
        ]
      },
      {
        "question": "Egy unipoláris, 16 bites A/D konverter referencia feszültsége 4.096V. Mekkora feszültség van a bemeneten, ha az AD konverter regiszterében 21491 érték van?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "1.3431875"
          }
        ]
      },
      {
        "question": "Mekkora az 8 bites A/D konverter full scale-je, ha az átalakító unipoláris és a referencia feszültsége 2.048? A választ V mértékegységben adja meg, lehetőleg pontosan!",
        "type": "radio",
        "answers": [
          {
            "text": "2.0400",
            "value": true
          },
          {
            "text": "2.0480",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 18 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 4.096? A választ μV  (mikrovolt) mértékegységben adja meg!",
        "type": "radio",
        "answers": [
          {
            "text": "15.6250",
            "value": true
          },
          {
            "text": "31.2500",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 14 bites A/D konverter LSB-je, ha az átalakító bipoláris és a referencia feszültsége 4.096V? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.5"
          }
        ]
      },
      {
        "question": "Mekkora az 10 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 2.048? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "2"
          }
        ]
      },
      {
        "question": "Egy unipoláris, 12 bites A/D konverter referencia feszültsége 4.096V. Mekkora feszültség van a bemeneten, ha az AD konverter regiszterében 1234 érték van?",
        "type": "radio",
        "answers": [
          {
            "text": "2.468V",
            "value": false
          },
          {
            "text": "1.234V",
            "value": true
          },
          {
            "text": "1.264V",
            "value": false
          },
          {
            "text": "0.3013V",
            "value": false
          }
        ]
      },
      {
        "question": "Egy 12 bites A/D konverterre SINAD= 62 dB. Mekkora az effektív bitszám? (a választ legalább 2 tizedes jegyre adja meg!)",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "10.01"
          }
        ]
      },
      {
        "question": "Mekkora az 8 bites A/D konverter full scale-je, ha az átalakító unipoláris és a referencia feszültsége 4.096? A választ V mértékegységben adja meg, lehetőleg pontosan!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "4.080"
          }
        ]
      },
      {
        "question": "Mekkora az 18 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 4.096V? A választ μV  (mikrovolt) mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "15.625"
          }
        ]
      },
      {
        "question": "Egy 14 bites D/A átalakító referencia feszültsége 4,096V.  Nagypontosságú voltmérővel a 0 kódra 0.3 mV feszültséget, a 4095 kódra pedig 4,13625V feszültséget mérünk.  Mekkora az offszet?  A választ mV-ban adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.3"
          }
        ]
      },
      {
        "question": "Egy unipoláris, 10 bites A/D konverter referencia feszültsége 2.048V. Milyen bit tartozik a bemenetre kapcsolt 1.4 V feszültséghez?",
        "type": "radio",
        "answers": [
          {
            "text": "350",
            "value": false
          },
          {
            "text": "700",
            "value": true
          },
          {
            "text": "684",
            "value": false
          },
          {
            "text": "47",
            "value": false
          },
          {
            "text": "",
            "value": "700"
          }
        ]
      },
      {
        "question": "Az ábrán látható fokozatokat használva hány komparátort tartalmazna egy 10 bites pipeline A/D konverter?",
        "image": "images/pipeline.png",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "15"
          }
        ]
      },
      {
        "question": "Mekkora az 10 bites A/D konverter full scale-je, ha az átalakító unipoláris és a referencia feszültsége 4.096? A választ V mértékegységben adja meg, lehetőleg pontosan!",
        "type": "radio",
        "answers": [
          {
            "text": "4.0960",
            "value": false
          },
          {
            "text": "4.0920",
            "value": true
          }
        ]
      },
      {
        "question": "Egy unipoláris, 16 bites A/D konverter referencia feszültsége 8.192V. Mekkora feszültség van a bemeneten, ha az AD konverter regiszterében 63212 érték van?",
        "type": "radio",
        "answers": [
          {
            "text": "129.5V",
            "value": false
          },
          {
            "text": "7.902V",
            "value": true
          },
          {
            "text": "7.716V",
            "value": false
          },
          {
            "text": "15.80V",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 10 bites A/D konverter LSB-je, ha az átalakító bipoláris és a referencia feszültsége 4.096V? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "8"
          }
        ]
      },
      {
        "question": "Mekkora az 14 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 4.096? A választ μV  (mikrovolt) mértékegységben adja meg!",
        "type": "radio",
        "answers": [
          {
            "text": "250.0000",
            "value": true
          },
          {
            "text": "500.0000",
            "value": false
          }
        ]
      },
      {
        "question": "Mekkora az 12 bites A/D konverter LSB-je, ha az átalakító unipoláris és a referencia feszültsége 1.024? A választ mV mértékegységben adja meg!",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.25"
          }
        ]
      },
      {
        "question": "Rakja sorrendbe az A/D átalakítás lépéseit! (Lehetőségek: Kvantálás/Anti aliasing szűrés/Digitális kódolás/Mintavétel és tartás)",
        "type": "text",
        "answers": [
          {
            "text": "1."
          },
          {
            "text": "",
            "value": "Anti aliasing szűrés"
          },
          {
            "text": "2."
          },
          {
            "text": "",
            "value": "Mintavétel és tartás"
          },
          {
            "text": "3."
          },
          {
            "text": " ",
            "value": "Kvantálás"
          },
          {
            "text": "4."
          },
          {
            "text": " ",
            "value": "Digitális kódolás"
          }
        ]
      },
      {
        "question": "Párosítsa a színekhez a megfelelő tulajdonságú architektúrát! (Sigma-delta/SAR/Pipeline)",
        "image": "images/adcs.png",
        "noFilter": true,
        "type": "text",
        "answers": [
          {
            "text": "Narancssárga: "
          },
          {
            "text": "",
            "value": "Sigma-delta"
          },
          {
            "text": "Kék: "
          },
          {
            "text": "",
            "value": "SAR"
          },
          {
            "text": "Zöld: "
          },
          {
            "text": " ",
            "value": "Pipeline"
          }
        ]
      }
    ]
  },
  {
    "id": "KHF10",
    "title": "Teljesítmény és hőmérsékleti problémák",
    "tasks": [
      {
        "question": "Körülbelül mekkora teljesítmény távolítható el hagyományos eszközökkel  (nem extrém hűtőborda, léghűtés) egy integrált áramkörből?",
        "type": "radio",
        "answers": [
          {
            "text": "100-130W",
            "value": true
          },
          {
            "text": "100-130mW",
            "value": false
          },
          {
            "text": "10-13W",
            "value": false
          },
          {
            "text": "10-13kW",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz egy mikroprocesszor termikus tervezési teljesítményére? (TDP)",
        "type": "radio",
        "answers": [
          {
            "text": "A megengedett maximális elektromos teljesítmény, ami hővé alakítható.",
            "value": false
          },
          {
            "text": "Mértékegysége a J/K.",
            "value": false
          },
          {
            "text": "Az egy magra jutó maximális megengedett hőteljesítmény.",
            "value": false
          },
          {
            "text": "Az átlagos hőteljesítmény, amire a hűtési rendszert méretezni kell.",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz hősugárzásra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Anyagtranszport szükséges hozzá",
            "value": false
          },
          {
            "text": "Az abszolút hőmérséklet 4. hatványával arányos",
            "value": true
          },
          {
            "text": "Csak gravitációs tér jelenlétében jön létre.",
            "value": false
          },
          {
            "text": "Energiakiegyenlítődési folyamat",
            "value": true
          }
        ]
      },
      {
        "question": "Mi igaz a hővezetésre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Energiakiegyenlítődési folyamat",
            "value": true
          },
          {
            "text": "Gravitációs tér jelenléte szükséges hozzá",
            "value": false
          },
          {
            "text": "A hőmérsékletkülönbséggel arányos.",
            "value": true
          },
          {
            "text": "Az abszolút hőmérséklet 4. hatványával arányos",
            "value": false
          }
        ]
      },
      {
        "question": "Mi igaz kényszerített hűtésre?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Minden esetben halmazállapot változás is történik.",
            "value": false
          },
          {
            "text": "Az elszállított hő fordítottan arányos a hűtőközeg fajhőjével.",
            "value": false
          },
          {
            "text": "Az elszállított hő egyenesen arányos a tömegárammal.",
            "value": true
          },
          {
            "text": "Természetes energiakiegyenlítődési folyamat.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy mikroprocesszor adatai a következők: TDP=10W, Rthjc=0.5K/W. A processzorra egy  1 K/W hőellenállású hűtőrendszer kerül. A processzor felszíne 2.4 cm2, a processzor és a hűtőborda közé pedig átlagosan 27 μm vastagságú hővezető pasztát viszünk fel, amelynek hővezetési tényezője 1W/m∙K.  Jóleszazúgyis Béla szerelő mester rosszul viszi fel a hővezető zsírt, a felület egyharmad részén nem fedi a felszínt (itt levegő található, melynek hővezetését hanyagolja el!)  Hány fokot emelkedik a rosszul felvitt anyag miatt a processzor belső hőmérséklete?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "0.5625"
          }
        ]
      },
      {
        "question": "Egy mikroprocesszor adatai a következők: TDP=23W, Rthjc=0.5K/W. A processzorra egy  1 K/W hőellenállású hűtőrendszer kerül. A processzor felszíne 1.4 cm2, a processzor és a hűtőborda közé pedig átlagosan 29 μm vastagságú hővezető pasztát viszünk fel, amelynek hővezetési tényezője 1W/m∙K.  Mennyit változik a belső hőmérséklet, ha a hővezető zsír hővezetőképessége kiszáradás miatt felére csökken?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "4.76"
          }
        ]
      },
      {
        "question": "Mi igaz hőátadásra?",
        "type": "checkbox",
        "answers": [
          {
            "text": "Energiakiegyenlítődési folyamat",
            "value": true
          },
          {
            "text": "Az abszolút hőmérséklet 4. hatványával arányos",
            "value": false
          },
          {
            "text": "A természetes konvekció gravitációs tér jelenlétében jön létre.",
            "value": true
          },
          {
            "text": "Anyagtranszport szükséges hozzá",
            "value": true
          }
        ]
      },
      {
        "question": "A meghibásodás valószínűsége",
        "type": "radio",
        "answers": [
          {
            "text": "Nem függ a hőmérséklettől.",
            "value": false
          },
          {
            "text": "Exponenciálisan nő a hőmérséklet növekedésével.",
            "value": true
          },
          {
            "text": "Lineárisan nő a hőmérséklet növekedésével.",
            "value": false
          },
          {
            "text": "Négyzetesen nő a hőmérséklet növekedésével.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy mikroprocesszor hőellenállása Rthjc=0.6K/W. A processzorra egy  1 K/W hőellenállású hűtőrendszer kerül. A processzor felszíne 1.6 cm2, a processzor és a hűtőborda közé pedig átlagosan 25 μm vastagságú hővezető pasztát viszünk fel, amelynek hővezetési tényezője 1W/m∙K.  A mikroprocesszor környezetének hőmérséklete 25°C. Mekkora lehet a  maximális disszipáció, hogy a mikroprocesszor belső hőmérséklete a 105°C-ot ne lépje túl?",
        "type": "radio",
        "answers": [
          {
            "text": "50.00J",
            "value": false
          },
          {
            "text": "45.55W",
            "value": true
          },
          {
            "text": "Egyik sem.",
            "value": false
          },
          {
            "text": "59.79W",
            "value": false
          }
        ]
      },
      {
        "question": "Egy mikroprocesszor adatai a következők: TDP=13W, Rthjc=0.5K/W. A processzorra egy  1 K/W hőellenállású hűtőrendszer kerül. A processzor felszíne 2.3 cm2, a processzor és a hűtőborda közé pedig átlagosan 29 μm vastagságú hővezető pasztát viszünk fel, amelynek hővezetési tényezője 1W/m∙K.  Mekkora lesz a processzor belső hőmérséklete, ha környezetének hőmérséklete 22°C?",
        "type": "text",
        "answers": [
          {
            "text": "",
            "value": "43.14"
          }
        ]
      },
      {
        "question": "Egy mikroprocesszor hőellenállása Rthjc=0,5K/W. A processzorra egy  1 K/W hőellenállású hűtőrendszer kerül. A processzor felszíne 2,3 cm2, a processzor és a hűtőborda közé pedig átlagosan 29 μm vastagságú hővezető pasztát viszünk fel, amelynek hővezetési tényezője 1W/m∙K.  A mikroprocesszor környezetének hőmérséklete 22°C. Mekkora lehet a  maximális disszipáció, hogy a mikroprocesszor belső hőmérséklete a 91°C-ot ne lépje túl?",
        "type": "radio",
        "answers": [
          {
            "text": "42,43W",
            "value": true
          },
          {
            "text": "55,96W",
            "value": false
          },
          {
            "text": "46,00J",
            "value": false
          },
          {
            "text": "Egyik sem.",
            "value": false
          }
        ]
      },
      {
        "question": "Egy mikroprocesszor adatai a következők: TDP=11W, Rthjc=0,6K/W. A processzorra egy  1 K/W hőellenállású hűtőrendszer kerül. A processzor felszíne 2,1 cm2, a processzor és a hűtőborda közé pedig átlagosan 22 μm vastagságú hővezető pasztát viszünk fel, amelynek hővezetési tényezője 1W/m∙K.  Mekkora lesz a processzor belső hőmérséklete, ha környezetének hőmérséklete 30°C?",
        "type": "radio",
        "answers": [
          {
            "text": "31,70°C",
            "value": false
          },
          {
            "text": "48,80°C",
            "value": true
          },
          {
            "text": "18,80°C",
            "value": false
          },
          {
            "text": "Egyik sem.",
            "value": false
          }
        ]
      },
      {
        "question": "Mi az analógia az elektromos hálózatok és a hőtani problémák egyszerű koncentrált modellje között? Hőáram",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Kapacitás",
            "value": false
          },
          {
            "text": "Elektromos ellenállás",
            "value": false
          },
          {
            "text": "Feszültség",
            "value": false
          },
          {
            "text": "Hővezetés",
            "value": false
          },
          {
            "text": "Elektromos áram",
            "value": true
          },
          {
            "text": "Hősugárzás",
            "value": false
          }
        ]
      },
      {
        "question": "Mi az analógia az elektromos hálózatok és a hőtani problémák egyszerű koncentrált modellje között? Hőmérséklet",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Kapacitás",
            "value": false
          },
          {
            "text": "Elektromos ellenállás",
            "value": false
          },
          {
            "text": "Feszültség",
            "value": true
          },
          {
            "text": "Hővezetés",
            "value": false
          },
          {
            "text": "Elektromos áram",
            "value": false
          },
          {
            "text": "Hősugárzás",
            "value": false
          }
        ]
      },
      {
        "question": "Mi az analógia az elektromos hálózatok és a hőtani problémák egyszerű koncentrált modellje között? Hőellenállás",
        "type": "select",
        "answers": [
          {
            "text": "Choose...",
            "value": false
          },
          {
            "text": "Kapacitás",
            "value": false
          },
          {
            "text": "Elektromos ellenállás",
            "value": true
          },
          {
            "text": "Feszültség",
            "value": false
          },
          {
            "text": "Hővezetés",
            "value": false
          },
          {
            "text": "Elektromos áram",
            "value": false
          },
          {
            "text": "Hősugárzás",
            "value": false
          }
        ]
      }
    ]
  }
];