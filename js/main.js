const speurtocht = [
    { number: 1, hint: "Ga de voordeur uit en volg de RODE pijlen"},
    { number: 2, hint: "Welke kleur heeft sneeuw? Dit is de kleur van de pijlen die je moet volgen."},
    { number: 3, hint: "Kijk goed om je heen of je de volgende hint ziet!"},
    { number: 4, hint: "Test 4"},
];

speurtocht.forEach(e => {
    const div_id = "question_" + e.number;
    const qr_id = "qr_" + e.number;
    const question_div = $( "#content" ).append('<div class="question" id="' + div_id + '"></div>');
    $(question_div).append('<h3>' + e.hint + '</h3>')
    $(question_div).append('<h2>' + e.number + '</h2>')
    $(question_div).append('<div class="qr" id="' + qr_id + '"></div>');
    const code = {
        text: e.hint,
        width: 512,
        height: 512
    };
    new QRCode(document.getElementById(qr_id), code);
});

