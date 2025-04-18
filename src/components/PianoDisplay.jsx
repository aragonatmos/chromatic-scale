import React from "react";
import { Piano, MidiNumbers } from "react-piano";
import 'react-piano/dist/styles.css';
import * as Tone from 'tone';

const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('c5');

const PianoDisplay = ({ notesToHighlight = [] }) => {
    const synth = new Tone.Synth().toDestination();

    const playNote = midiNumber => {
        const note = MidiNumbers.getAttributes(midiNumber).note;
        synth.triggerAttackRelease(note, '8n');
    };

    return(
        <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={playNote}
        stopNote={() => {}}
        activateNotes={notesToHighlight}
        disabled={false}
        />
    );
};

export default PianoDisplay;