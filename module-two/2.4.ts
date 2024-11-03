{
    // Type generic with interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X
    }

    // using alias
    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {   // don not need to pass null here , it is define in interface
        name: "Tareq",
        computer: {
            brand: "Asus",
            model: "X-25R",
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Emiler",
            model: "Kwtx",
            display: "oled"
        }
    }


    // using interface
    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;

    }

    interface YamahaBike {
        brand: string
        model: string
        engineCC: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Masud",
        computer: {
            brand: "HP",
            model: "AMD Athlon Silver",
            releaseYear: 2020
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Kortana",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: "YAMAHA",
            model: "FZ-X",
            engineCC: "155cc"
        }
    }






}