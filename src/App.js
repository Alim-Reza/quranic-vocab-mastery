import React from 'react';
import './App.css';
import Frame from './components/Frames.js';
import { Logic } from './logic.js';
import ProgressBar from './components/ProgressBar/ProgressBar.js';

function App() {
  const [currentAyah, setCurrentAyah] = React.useState(0);

  const [options, setOptions] = React.useState([]);
  React.useEffect(() => {
    setOptions((prev) =>
      Logic.getOptions(currentAyah, englishWordMeaningPool, data_set)
    );
  }, [currentAyah]);
  return (
    <div className="App">
      <ProgressBar progress={(currentAyah * 100) / data_set.length} />
      <div style={{ paddingTop: '2em' }}>
        <Frame
          arabicText={data_set[currentAyah].phraseArabic}
          listOfOptions={options}
          onClickAction={(selectedOption) =>
            Logic.onClickAction(
              currentAyah,
              setCurrentAyah,
              data_set,
              selectedOption
            )
          }
        />
      </div>
      {/* <div style={{ paddingTop: '2em' }}>
        <button
          onClick={() => setCurrentAyah((prev) => prev + 1)}
          className="next-button"
        >
          next
        </button>
      </div> */}
    </div>
  );
}

export default App;

const data_set = [
  {
    ayahNumber: 0,
    phraseEnglish: 'Bismillah',
    phraseArabic: 'بِسْمِ اللهِ ',
    meaning: 'In the name of Allah',
  },
  {
    ayahNumber: 0,
    phraseEnglish: 'Ar-Rahman',
    phraseArabic: 'الرَّحْمٰنِ ',
    meaning: 'The Most Gracious',
  },
  {
    ayahNumber: 0,
    phraseEnglish: 'Ar-Rahim',
    phraseArabic: 'الرَّحِيْمِ ',
    meaning: 'The Most Merciful',
  },
  {
    ayahNumber: 1,
    phraseEnglish: 'Al-hamdu',
    phraseArabic: 'الْحَمْدُ ',
    meaning: 'All praise',
  },
  {
    ayahNumber: 1,
    phraseEnglish: 'Lillahi',
    phraseArabic: 'لِلَّهِ ',
    meaning: 'is for Allah',
  },
  {
    ayahNumber: 1,
    phraseEnglish: 'Rabb',
    phraseArabic: 'رَبِّ ',
    meaning: 'the Lord',
  },
  {
    ayahNumber: 1,
    phraseEnglish: 'Alamin',
    phraseArabic: 'الْعَالَمِيْنَ ',
    meaning: 'of the worlds',
  },
  {
    ayahNumber: 3,
    phraseEnglish: 'Maliki',
    phraseArabic: 'مَالِكِ ',
    meaning: 'Owner',
  },
  {
    ayahNumber: 3,
    phraseEnglish: 'Yawm',
    phraseArabic: 'يَوْمِ ',
    meaning: 'of the Day',
  },
  {
    ayahNumber: 3,
    phraseEnglish: 'Ad-Din',
    phraseArabic: 'الدِّيْنِ ',
    meaning: 'of Judgement',
  },
  {
    ayahNumber: 4,
    phraseEnglish: 'Iyyaka',
    phraseArabic: 'إِيَّاكَ ',
    meaning: 'You alone',
  },
  {
    ayahNumber: 4,
    phraseEnglish: "Na'budu",
    phraseArabic: 'نَعْبُدُ ',
    meaning: 'we worship',
  },
  {
    ayahNumber: 4,
    phraseEnglish: 'Wa-iyyaka',
    phraseArabic: 'وَإِيَّاكَ ',
    meaning: 'and You alone',
  },
  {
    ayahNumber: 4,
    phraseEnglish: "Nasta'in",
    phraseArabic: 'نَسْتَعِيْنُ ',
    meaning: 'we seek help',
  },
  {
    ayahNumber: 5,
    phraseEnglish: 'Ihdina',
    phraseArabic: 'اهْدِنَا ',
    meaning: 'Guide us',
  },
  {
    ayahNumber: 5,
    phraseEnglish: 'As-sirat',
    phraseArabic: 'الصِّرَاطَ ',
    meaning: 'the Straight Path',
  },
  {
    ayahNumber: 5,
    phraseEnglish: 'Al-Mustaqim',
    phraseArabic: 'الْمُسْتَقِيْمَ ',
    meaning: 'the path of those whom You have favored',
  },
  {
    ayahNumber: 6,
    phraseEnglish: 'Sirat',
    phraseArabic: 'صِرَاطَ ',
    meaning: 'not the path',
  },
  {
    ayahNumber: 6,
    phraseEnglish: 'Al-Ladhina',
    phraseArabic: 'الَّذِينَ ',
    meaning: 'of those who',
  },
  {
    ayahNumber: 6,
    phraseEnglish: "An'amta",
    phraseArabic: 'أَنْعَمْتَ ',
    meaning: 'have earned Your anger',
  },
  {
    ayahNumber: 6,
    phraseEnglish: 'Alayhim',
    phraseArabic: 'عَلَيْهِمْ ',
    meaning: 'upon them',
  },
  {
    ayahNumber: 7,
    phraseEnglish: 'Wa-lad-dallin',
    phraseArabic: 'وَلاَ الضَّالِّيْنَ ',
    meaning: 'nor of those who go astray.',
  },
];

const englishWordMeaningPool = data_set.map((object) => object.meaning);
