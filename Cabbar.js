/**
 * Cabbar sadece kirmizi ve siyah arabalari tamir eder
 * Cabbar sadece BMW, Audi ve VW markalarini tamir eder
 * BMW  sadece kirmizi 2010-2019 arasini
 * Audi sadece 2005-2010 2014-2020
 * WV sadece siyah 2001-2018
 * BMW 2020 siyah
 * 5 yildan uzun sureli sabit musterilerine de tum arabalarda hizmet veriyors
 */

let marka = "WV"
let model = 2016;
let musteriKidemi = 2;
let Renk = "Siyah";

if (musteriKidemi >= 5) {
    console.log("Yarin Gel Anahtari Al")

} else {
    if (((marka == "BMW") && ((model >= 2010)) && (model <= 2019)) && (renk = "Kirmizi") || (model > 2019)) {
        console.log("Gel BMW")

    } else {
        if ((marka == "WV") && ((model >= 2001) && (model <= 2018)) && (renk = "Siyah")) {
            console.log("Gel Wolkswagen")

        } else {
            if (((marka = "Audi") && ((model >= 2005) && (model <= 2010) || (model >= 2014) && (model <= 2020)))) {
                console.log("Gel Audi")

            } else {
                console.log("Kusura Bakmayin")

            }

        }
    }

}