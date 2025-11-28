const Planet = "Earth"



























const otamatoneSynth = new Tone.AMSynth({
    oscillator: {
        type: "sawtooth", 
    },
    envelope: {
        attack: 0.05,   
        release: 0.2,   
    },
    volume: -15 
});

const filter = new Tone.Filter(1500, 'lowpass');

otamatoneSynth.connect(filter).toDestination();

let defaultNote = "C4"; 

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        Tone.start(); 
        
        otamatoneSynth.triggerAttack(defaultNote); 

        event.preventDefault(); 
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
        otamatoneSynth.triggerRelease(); 
    }
});