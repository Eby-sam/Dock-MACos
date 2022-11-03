let div = document.getElementById('container');

/**
 * array path
 * @type {string[]}
 */
let array1 = [
    "/assets/img/fb.png",
    "/assets/img/discord.png",
    "/assets/img/mozilla.png",
    "/assets/img/calendar.png",
    "/assets/img/gmail.png",
    "/assets/img/google.png",
    "/assets/img/git.png",
    "/assets/img/picture.png",
    "/assets/img/messenger.png",
    "/assets/img/tiktok.png",
    "/assets/img/amazon.png",
    "/assets/img/youtube.png",
    "/assets/img/twitch.png"
];

/**
 * array link
 * @type {string[]}
 */
let array2 = [
    "https://www.facebook.com/",
    "https://discord.com",
    "https://www.mozilla.org/fr/firefox/new/?utm_source=mozilla-fr&utm_medium=referral",
    "https://www.calendrier.com/",
    "https://mail.google.com",
    "https://www.google.fr/",
    "https://github.com/",
    "https://play.google.com/store/apps/details?id=photo.camera.hdcameras&hl=fr&gl=US",
    "https://www.messenger.com/",
    "https://www.tiktok.com/fr/",
    "https://www.amazon.fr/",
    "https://www.youtube.com/",
    "https://www.twitch.tv/"
];

/**
 * array buble
 * @type {string[]}
 */
let array3 = [
    'facebook',
    'discord',
    'mozilla',
    'calendrier',
    'google',
    'gitHub',
    'photo',
    'messenger',
    'tiktok',
    'amazon',
    'youtube',
    'twitch'
]

let Icons = function (array1, array2, array3) {
    this.array1 = array1;
    this.array2 = array2;
    this.array3 = array3;

    this.createIcons = function () {

        /**
         * buckle to create links with logo
         */
        for (let i = 0; i < this.array1.length && this.array2.length && this.array3.length; i++) {

            /**
             * creating tags a
             * @type {HTMLAnchorElement}
             */
            let link = document.createElement("a");
            link.href = array2[i];

            /**
             * creating tags img
             * @type {HTMLImageElement}
             */
            let image = document.createElement("img");
            image.src = array1[i];
            image.title = array3[i];

            /**
             * transform and transition on mouseover
             */
            image.addEventListener("mouseover", ()=> {
                image.style.transform = "scale(2.5)";
                image.style.transition = "0.2s";
            })
            image.addEventListener("mouseleave", ()=> {
                image.style.transform = "scale(1)";
            })


            div.append(link);
            link.append(image);
        }
    }
}

let logo = new Icons(array1, array2, array3);
logo.createIcons();
