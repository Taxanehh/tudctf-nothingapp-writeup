document.addEventListener("DOMContentLoaded", function () {
    const div = document.createElement("div");
    div.id = "particles-js";
    document.body.prepend(div);

    particlesJS("particles-js", {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 1200 } },
            color: { value: "#00ffff" }, 
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00ffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 0.8 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});
