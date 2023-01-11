document.addEventListener("keydown", function (event) {
    /*const keys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
    if (keys.includes(event.code)){
        console.log("The '" + event.key + "' key is pressed.");
    } else {
        console.log("The pressed key is not valid!")
    } */

    if (event.code === "KeyA") {
        let audio_A = new Audio("audio/A.mp3");
        audio_A.play();
    } else if (event.code === "KeyS") {
        let audio_S = new Audio("audio/S.mp3");
        audio_S.play();
    } else if (event.code === "KeyD") {
        let audio_D = new Audio("audio/D.mp3");
        audio_D.play();
    } else if (event.code === "KeyF") {
        let audio_F = new Audio("audio/F.mp3");
        audio_F.play();
    } else if (event.code === "KeyG") {
        let audio_G = new Audio("audio/G.mp3");
        audio_G.play();
    } else if (event.code === "KeyH") {
        let audio_H = new Audio("audio/H.mp3");
        audio_H.play();
    } else if (event.code === "KeyJ") {
        let audio_J = new Audio("audio/J.mp3");
        audio_J.play();
    } else if (event.code === "KeyW") {
        let audio_W = new Audio("audio/W.mp3");
        audio_W.play();
    }else if (event.code === "KeyE") {
        let audio_E = new Audio("audio/E.mp3");
        audio_E.play();
    }else if (event.code === "KeyT") {
        let audio_T = new Audio("audio/T.mp3");
        audio_T.play();
    }else if (event.code === "KeyY") {
        let audio_Y = new Audio("audio/Y.mp3");
        audio_Y.play();
    }else if (event.code === "KeyU") {
        let audio_U = new Audio("audio/U.mp3");
        audio_U.play();
    }
});







