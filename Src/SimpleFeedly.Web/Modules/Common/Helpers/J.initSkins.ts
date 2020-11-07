namespace J {

    export function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
        }
        else var expires = "";

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    export function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    export function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    export function initSkins() {
        let curSkinClass = readCookie("ThemePreference") || "blue";
        //console.log(curSkinClass);

        switch (curSkinClass.toLowerCase().trim()) {
            case "dark-001":
                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;

                break;
            default:
        }
    }
}