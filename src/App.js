import React from 'react';
import './App.css';

function App() {
  const [currentAyah, setCurrentAyah] = React.useState(0);
  const getOptions = (currentAyah) => {
    let randomListOfStrings = [];
    while (randomListOfStrings.length < 3) {
      const randomIndex = Math.floor(
        Math.random() * englishWordMeaningPool.length
      );
      const randomString = englishWordMeaningPool[randomIndex];

      if (!randomListOfStrings.includes(randomString)) {
        randomListOfStrings.push(randomString);
      }
    }
    const randomIndex = Math.floor(
      Math.random() * (englishWordMeaningPool.length + 1)
    );
    randomListOfStrings.splice(randomIndex, 0, data_set[currentAyah].meaning);
    return randomListOfStrings;
  };
  const [options, setOptions] = React.useState([]);
  React.useEffect(() => {
    setOptions((prev) => getOptions(currentAyah));
  }, [currentAyah]);
  return (
    <div className="App">
      <Frame
        arabicText={data_set[currentAyah].phraseArabic}
        listOfOptions={options}
      />
      <div style={{ paddingTop: '2em' }}>
        <button className="next-button">next</button>
      </div>
    </div>
  );
}
const Frame = ({ arabicText, listOfOptions }) => (
  <div>
    <div dir="rtl" className="card">
      {arabicText}
    </div>
    <div className="container">
      {listOfOptions.map((item, index) => (
        <div className="item" key={index}>
          {item}
        </div>
      ))}
    </div>
  </div>
);
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
