
    function aufruf() {

        let html
        let html2
        let html3
        let html4
        let html5
        let html6
        let html7
        let html8
        let html9
        let html10


        let fruit1 = [
            {name: "Name: Apfel", crop: "Pflanzenart: Baum", growsinaustria: "Wächst es in Österreich: Ja", taste: "Geschmack: " + 6, farmready: "Erntereif: Juli"}]


            let fruit2 = [
                {
                    name: "Name: Banane",
                    crop: "Pflanzenart: Baum",
                     growsinaustria: "Wächst es in Österreich: Nein",
                    taste: "Geschmack: " + 10,
                    farmready: "Erntereif: Ganzes Jahr"
                  }]

                  
                  let fruit3 = [{
                    name: "Name: Weintraube",
                    crop: "Pflanzenart: Strauch",
                     growsinaustria: "Wächst es in Österreich: Ja",
                    taste: "Geschmack: " + 8,
                    farmready: "Erntereif: Oktober"
                  }]

                  let fruit4 = [{
                    name: "Name: Kiwi",
                    crop: "Pflanzenart: Baum",
                     growsinaustria: "Wächst es in Österreich: Nein",
                    taste: "Geschmack: " + 6,
                    farmready: "Erntereif: Oktober - November"
                  }]
                  
                  
                  let fruit5 = [{
                    name: "Name: Melone",
                    crop: "Pflanzenart: Strauch",
                     growsinaustria: "Wächst es in Österreich: Ja",
                    taste: "Geschmack: " + 10,
                    farmready: "Erntereif: August"
                  }]

                  let fruit6 = [{
                    name: "Name: Pfirsich",
                    crop: "Pflanzenart: Baum",
                     growsinaustria: "Wächst es in Österreich: Ja",
                    taste: "Geschmack: " + 6,
                    farmready: "Erntereif: Juli"
                  }]

                  let fruit7 = [{
                    name: "Name: Birne",
                    crop: "Pflanzenart: Baum",
                     growsinaustria: "Wächst es in Österreich: Ja",
                    taste: "Geschmack: " + 7,
                    farmready: "Erntereif: August"
                  }]

                  let fruit8 = [{
                    name: "Name: Ananas",
                    crop: "Pflanzenart: Strauch",
                     growsinaustria: "Wächst es in Österreich: Nein",
                    taste: "Geschmack: " + 6,
                    farmready: "Erntereif: März - Juli"
                  }]

                  let fruit9 = [{
                    name: "Name: Himbeere",
                    crop: "Pflanzenart: Strauch",
                     growsinaustria: "Wächst es in Österreich: Ja",
                    taste: "Geschmack: " + 10,
                    farmready: "Erntereif: Juni"
                  }]

                  let fruit10 = [{
                    name: "Name: Erdbeere",
                    crop: "Pflanzenart: Strauch",
                     growsinaustria: "Wächst es in Österreich: Ja",
                    taste: "Geschmack: " + 10,
                    farmready: "Erntereif: Juni"
                  }]



          for (let i = 0; i < fruit1.length; i++) {
              html += '<h2>' + fruit1[i].name + '</h2>'
              html += '<hr>'
              html += '<p>' + fruit1[i].crop + '</p>'
              html += '<p>' + fruit1[i].growsinaustria + '</p>'
              html += '<p>' + fruit1[i].taste + '</p>'
              html += '<p>' + fruit1[i].farmready + '</p>'           
          }
          document.getElementById("data1").innerHTML = html   

          for (let i = 0; i < fruit2.length; i++) {
            html2 += '<h2>' + fruit2[i].name + '</h2>'
            html2 += '<hr>'
            html2 += '<p>' + fruit2[i].crop + '</p>'
            html2 += '<p>' + fruit2[i].growsinaustria + '</p>'
            html2 += '<p>' + fruit2[i].taste + '</p>'
            html2 += '<p>' + fruit2[i].farmready + '</p>'
            
        }
        document.getElementById("data2").innerHTML = html2


        for (let i = 0; i < fruit3.length; i++) {
            html3 += '<h2>' + fruit3[i].name + '</h2>'
            html3 += '<hr>'
            html3 += '<p>' + fruit3[i].crop + '</p>'
            html3 += '<p>' + fruit3[i].growsinaustria + '</p>'
            html3 += '<p>' + fruit3[i].taste + '</p>'
            html3 += '<p>' + fruit3[i].farmready + '</p>'
            
        }
        document.getElementById("data3").innerHTML = html3

        for (let i = 0; i < fruit4.length; i++) {
            html4 += '<h2>' + fruit4[i].name + '</h2>'
            html4 += '<hr>'
            html4 += '<p>' + fruit4[i].crop + '</p>'
            html4 += '<p>' + fruit4[i].growsinaustria + '</p>'
            html4 += '<p>' + fruit4[i].taste + '</p>'
            html4 += '<p>' + fruit4[i].farmready + '</p>'
            
        }
        document.getElementById("data4").innerHTML = html4

        for (let i = 0; i < fruit5.length; i++) {
            html5 += '<h2>' + fruit5[i].name + '</h2>'
            html5 += '<hr>'
            html5 += '<p>' + fruit5[i].crop + '</p>'
            html5 += '<p>' + fruit5[i].growsinaustria + '</p>'
            html5 += '<p>' + fruit5[i].taste + '</p>'
            html5 += '<p>' + fruit5[i].farmready + '</p>'
            
        }
        document.getElementById("data5").innerHTML = html5
        
        for (let i = 0; i < fruit6.length; i++) {
            html6 += '<h2>' + fruit6[i].name + '</h2>'
            html6 += '<hr>'
            html6 += '<p>' + fruit6[i].crop + '</p>'
            html6 += '<p>' + fruit6[i].growsinaustria + '</p>'
            html6 += '<p>' + fruit6[i].taste + '</p>'
            html6 += '<p>' + fruit6[i].farmready + '</p>'
            
        }
        document.getElementById("data6").innerHTML = html6

        for (let i = 0; i < fruit7.length; i++) {
            html7 += '<h2>' + fruit7[i].name + '</h2>'
            html7 += '<hr>'
            html7 += '<p>' + fruit7[i].crop + '</p>'
            html7 += '<p>' + fruit7[i].growsinaustria + '</p>'
            html7 += '<p>' + fruit7[i].taste + '</p>'
            html7 += '<p>' + fruit7[i].farmready + '</p>'
            
        }
        document.getElementById("data7").innerHTML = html7

        for (let i = 0; i < fruit8.length; i++) {
            html8 += '<h2>' + fruit8[i].name + '</h2>'
            html8 += '<hr>'
            html8 += '<p>' + fruit8[i].crop + '</p>'
            html8 += '<p>' + fruit8[i].growsinaustria + '</p>'
            html8 += '<p>' + fruit8[i].taste + '</p>'
            html8 += '<p>' + fruit8[i].farmready + '</p>'
            
        }
        document.getElementById("data8").innerHTML = html8


        for (let i = 0; i < fruit9.length; i++) {
            html9 += '<h2>' + fruit9[i].name + '</h2>'
            html9 += '<hr>'
            html9 += '<p>' + fruit9[i].crop + '</p>'
            html9 += '<p>' + fruit9[i].growsinaustria + '</p>'
            html9 += '<p>' + fruit9[i].taste + '</p>'
            html9 += '<p>' + fruit9[i].farmready + '</p>'
            
        }
        document.getElementById("data9").innerHTML = html9

        for (let i = 0; i < fruit10.length; i++) {
            html10 += '<h2>' + fruit10[i].name + '</h2>'
            html10 += '<hr>'
            html10 += '<p>' + fruit10[i].crop + '</p>'
            html10 += '<p>' + fruit10[i].growsinaustria + '</p>'
            html10 += '<p>' + fruit10[i].taste + '</p>'
            html10 += '<p>' + fruit10[i].farmready + '</p>'
            
        }
        document.getElementById("data10").innerHTML = html10
        }

    aufruf()

